package com.july.bpm.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.july.bpm.dto.DeleteFlowTaskNodeDto;
import com.july.bpm.dto.SaveFlowTaskNodeDto;
import com.july.bpm.entity.FlowTaskNode;

/**
 * 服务类
 * @author zengxueqi
 * @since 2020-04-02
 */
public interface FlowTaskNodeService extends IService<FlowTaskNode> {

    /**
     * 保存流程节点信息
     * @param saveFlowTaskNodeDto
     * @return void
     * @author zengxueqi
     * @since 2020/4/3
     */
    void saveFlowTaskNode(SaveFlowTaskNodeDto saveFlowTaskNodeDto);

    /**
     * 删除某个节点信息
     * @param deleteFlowTaskNodeDto
     * @return void
     * @author zengxueqi
     * @since 2020/4/3
     */
    void deleteFlowTaskNode(DeleteFlowTaskNodeDto deleteFlowTaskNodeDto);

}
