package com.july.bpm.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.july.bpm.dto.DeleteFlowTaskNodeDto;
import com.july.bpm.dto.SaveFlowTaskNodeDto;
import com.july.bpm.dto.SaveNodeDto;
import com.july.bpm.dto.SaveNodePropertyDto;
import com.july.bpm.entity.*;
import com.july.bpm.entity.enums.EnableEnum;
import com.july.bpm.entity.enums.NodeEnum;
import com.july.bpm.entity.enums.NodePropertyEnum;
import com.july.bpm.exception.BnException;
import com.july.bpm.mapper.FlowTasknodeMapper;
import com.july.bpm.service.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.List;

/**
 * 服务实现类
 * @author zengxueqi
 * @since 2020-04-02
 */
@Service
@Slf4j
public class FlowTaskNodeServiceImpl extends ServiceImpl<FlowTasknodeMapper, FlowTaskNode> implements FlowTaskNodeService {

    @Resource
    private FlowNodeFormService flowNodeFormService;
    @Resource
    private FlowApproveGroupService flowApproveGroupService;
    @Resource
    private FlowService flowService;

    /**
     * 保存流程节点信息
     * @param saveFlowTaskNodeDto
     * @return java.lang.Long
     * @author zengxueqi
     * @since 2020/4/2
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveFlowTaskNode(SaveFlowTaskNodeDto saveFlowTaskNodeDto) {
        SaveNodeDto saveNodeDto = saveFlowTaskNodeDto.getNodeDto();

        //节点属性信息
        List<SaveNodePropertyDto> nodePropertyDtos = saveNodeDto.getNodeProperty();

        /**修改主流程信息**/
        //是否修改主流程信息
        if (NodeEnum.ROOT.getValue().equals(saveNodeDto.getNodeType())) {
            Flow flow = flowService.getById(saveFlowTaskNodeDto.getFlowId());
            BnException.of(flow == null, "没有找到该流程信息！");
            flow.setFlowName(saveNodeDto.getNodeName());
            if (!CollectionUtils.isEmpty(nodePropertyDtos)) {
                nodePropertyDtos.forEach(saveNodePropertyDto -> {
                    if (NodePropertyEnum.NODEDESC.getValue().equals(saveNodePropertyDto.getPropertyName())) {
                        //流程备注
                        flow.setRemark(saveNodePropertyDto.getPropertyValue());
                        flowService.updateById(flow);
                    } else if (NodePropertyEnum.KEY.getValue().equals(saveNodePropertyDto.getPropertyName())) {
                        //流程标识
                        flow.setFlowIdentical(saveNodePropertyDto.getPropertyValue());
                        flowService.updateById(flow);
                    }
                });
            }
        } else {
            /**修改节点信息**/
            //先判断该节点是否存在，不存在先保存
            FlowTaskNode flowTaskNode = getFlowTaskNode(saveFlowTaskNodeDto.getFlowId(), saveNodeDto.getNodeId());
            if (flowTaskNode == null) {
                FlowTaskNode flowTaskNode1 = new FlowTaskNode();
                flowTaskNode1.setFlowId(saveFlowTaskNodeDto.getFlowId());
                flowTaskNode1.setId(saveNodeDto.getNodeId());
                flowTaskNode1.setNodeName(saveNodeDto.getNodeName());
                flowTaskNode1.setNodeName(saveNodeDto.getNodeName());
                this.save(flowTaskNode1);
                flowTaskNode = flowTaskNode1;
            } else {
                flowTaskNode.setNodeName(saveNodeDto.getNodeName());
            }

            if (!CollectionUtils.isEmpty(nodePropertyDtos)) {
                FlowTaskNode finalFlowTaskNode = flowTaskNode;
                nodePropertyDtos.stream().forEach(saveNodePropertyDto -> {
                    if (NodePropertyEnum.NODEDESC.getValue().equals(saveNodePropertyDto.getPropertyName())) {
                        finalFlowTaskNode.setRemark(saveNodePropertyDto.getPropertyValue());
                        this.updateById(finalFlowTaskNode);
                    } else if (NodePropertyEnum.APPROVER.getValue().equals(saveNodePropertyDto.getPropertyName())) {
                        FlowApproveGroup flowApproveGroup = FlowApproveGroup.builder()
                                .approveGroup(saveNodePropertyDto.getPropertyValue())
                                .flowId(saveFlowTaskNodeDto.getFlowId())
                                .nodeId(saveNodeDto.getNodeId())
                                .build();
                        String approveGroupId = flowApproveGroupService.updateApproveGroup(flowApproveGroup);
                        finalFlowTaskNode.setApproveGroupId(approveGroupId);
                        this.updateById(finalFlowTaskNode);
                    } else if (NodePropertyEnum.FORM.getValue().equals(saveNodePropertyDto.getPropertyName())) {
                        //如果此节点设置单独审核表单，保存节点与表单组的关系
                        FlowNodeForm flowNodeForm = FlowNodeForm.builder()
                                .formGroupId(saveNodePropertyDto.getPropertyValue())
                                .nodeId(saveNodeDto.getNodeId())
                                .build();
                        flowNodeFormService.updateNodeFormGroup(flowNodeForm);
                    }
                });
            }
        }
    }

    /**
     * 查询某个节点信息
     * @param flowId
     * @param nodeId
     * @return com.july.bpm.entity.FlowTaskNode
     * @author zengxueqi
     * @since 2020/4/8
     */
    public FlowTaskNode getFlowTaskNode(String flowId, String nodeId) {
        QueryWrapper<FlowTaskNode> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("flowId", flowId)
                .eq("id", nodeId)
                .eq("status", EnableEnum.ENABLE.getValue());
        return this.getOne(queryWrapper);
    }

    /**
     * 删除某个节点信息
     * @param deleteFlowTaskNodeDto
     * @return void
     * @author zengxueqi
     * @since 2020/4/3
     */
    @Override
    public void deleteFlowTaskNode(DeleteFlowTaskNodeDto deleteFlowTaskNodeDto) {
        FlowTaskNode flowTaskNode = this.getById(deleteFlowTaskNodeDto.getNodeId());

        BnException.of(flowTaskNode == null, "没有找到该节点信息！");

        flowTaskNode.setStatus(EnableEnum.DISENABLE.getValue());
        this.updateById(flowTaskNode);
    }

}
