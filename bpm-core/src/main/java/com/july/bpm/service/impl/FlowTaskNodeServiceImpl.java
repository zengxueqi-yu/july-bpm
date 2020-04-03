package com.july.bpm.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.july.bpm.dto.DeleteFlowTaskNodeDto;
import com.july.bpm.dto.SaveFlowTaskNodeDto;
import com.july.bpm.entity.FlowTaskNode;
import com.july.bpm.entity.enums.EnableEnum;
import com.july.bpm.exception.BnException;
import com.july.bpm.mapper.FlowTasknodeMapper;
import com.july.bpm.service.FlowTaskNodeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * 服务实现类
 * @author zengxueqi
 * @since 2020-04-02
 */
@Service
@Slf4j
public class FlowTaskNodeServiceImpl extends ServiceImpl<FlowTasknodeMapper, FlowTaskNode> implements FlowTaskNodeService {

    /**
     * 保存流程节点信息
     * @param saveFlowTaskNodeDto
     * @return java.lang.Long
     * @author zengxueqi
     * @since 2020/4/2
     */
    @Override
    public void saveFlowTaskNode(SaveFlowTaskNodeDto saveFlowTaskNodeDto) {
        FlowTaskNode flowTaskNode = new FlowTaskNode();
        flowTaskNode.setFlowId(saveFlowTaskNodeDto.getFlowId());
        flowTaskNode.setId(saveFlowTaskNodeDto.getNodeId());
        flowTaskNode.setNodeName(saveFlowTaskNodeDto.getNodeName());
        flowTaskNode.setNodeType(saveFlowTaskNodeDto.getNodeType());
        flowTaskNode.setCheckType("1");
        this.save(flowTaskNode);
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
