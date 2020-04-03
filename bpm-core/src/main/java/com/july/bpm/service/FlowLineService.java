package com.july.bpm.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.july.bpm.dto.DeleteFlowLineDto;
import com.july.bpm.dto.SaveFlowLineDto;
import com.july.bpm.entity.FlowLine;

/**
 * 流程连线表 服务类
 * @author zengxueqi
 * @since 2020-04-03
 */
public interface FlowLineService extends IService<FlowLine> {

    /**
     * 保存流程连线信息
     * @param saveFlowLineDto
     * @return void
     * @author zengxueqi
     * @since 2020/4/3
     */
    void saveFlowLine(SaveFlowLineDto saveFlowLineDto);

    /**
     * 删除流程连线信息
     * @param deleteFlowLineDto
     * @return void
     * @author zengxueqi
     * @since 2020/4/3
     */
    void deleteFlowLine(DeleteFlowLineDto deleteFlowLineDto);

}
