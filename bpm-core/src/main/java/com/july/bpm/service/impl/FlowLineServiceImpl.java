package com.july.bpm.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.july.bpm.dto.DeleteFlowLineDto;
import com.july.bpm.dto.SaveFlowLineDto;
import com.july.bpm.entity.FlowLine;
import com.july.bpm.entity.FlowTransition;
import com.july.bpm.entity.enums.EnableEnum;
import com.july.bpm.exception.BnException;
import com.july.bpm.mapper.FlowLineMapper;
import com.july.bpm.service.FlowLineService;
import com.july.bpm.service.FlowTransitionService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 流程连线表 服务实现类
 * @author zengxueqi
 * @since 2020-04-03
 */
@Service
public class FlowLineServiceImpl extends ServiceImpl<FlowLineMapper, FlowLine> implements FlowLineService {

    @Resource
    private FlowTransitionService flowTransitionService;

    /**
     * 保存流程连线信息
     * @param saveFlowLineDto
     * @return void
     * @author zengxueqi
     * @since 2020/4/3
     */
    @Override
    public void saveFlowLine(SaveFlowLineDto saveFlowLineDto) {
        FlowLine flowLine = FlowLine.builder()
                .id(saveFlowLineDto.getFlowLineId())
                .startNodeId(saveFlowLineDto.getStartNodeId())
                .endNodeId(saveFlowLineDto.getEndNodeId())
                .flowId(saveFlowLineDto.getFlowId())
                .build();
        this.save(flowLine);

        //保存流程转换信息
        FlowTransition flowTransition = FlowTransition.builder()
                .flowId(saveFlowLineDto.getFlowId())
                .nodeId(saveFlowLineDto.getStartNodeId())
                .transitionCode("")
                .transitionName("")
                .passNodeId(saveFlowLineDto.getEndNodeId())
                .build();
        flowTransitionService.save(flowTransition);
    }

    /**
     * 删除流程连线信息
     * @param deleteFlowLineDto
     * @return void
     * @author zengxueqi
     * @since 2020/4/3
     */
    @Override
    public void deleteFlowLine(DeleteFlowLineDto deleteFlowLineDto) {
        FlowLine flowLine = this.getById(deleteFlowLineDto.getFlowLineId());
        BnException.of(flowLine == null, "没有找到该连结线！");

        flowLine.setStatus(EnableEnum.DISENABLE.getValue());
        this.updateById(flowLine);

        //删除连线后，也删除连接节点之间的关系
        QueryWrapper<FlowTransition> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("nodeId",flowLine.getStartNodeId())
                .eq("passNodeId",flowLine.getEndNodeId())
                .eq("status",EnableEnum.ENABLE.getValue());
        FlowTransition flowTransition = flowTransitionService.getOne(queryWrapper);
        if(flowTransition != null){
            flowTransition.setStatus(EnableEnum.DISENABLE.getValue());
            flowTransitionService.updateById(flowTransition);
        }
    }

}
