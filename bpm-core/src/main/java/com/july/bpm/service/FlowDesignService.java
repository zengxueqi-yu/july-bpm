package com.july.bpm.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.july.bpm.dto.SaveFlowDesignDto;
import com.july.bpm.entity.FlowDesign;

/**
 *  服务类
 * @author zengxueqi
 * @since 2020-04-02
 */
public interface FlowDesignService extends IService<FlowDesign> {

    /**
     * 保存流程设计图
     * @param saveFlowDesignDto
     * @return void
     * @author zengxueqi
     * @since 2020/4/2
     */
    void saveFlowDesign(SaveFlowDesignDto saveFlowDesignDto);

    /**
     * 查询流程图设计信息
     * @param flowDesign
     * @return com.july.bpm.entity.FlowDesign
     * @author zengxueqi
     * @since 2020/4/2
     */
    FlowDesign getFlowDesign(FlowDesign flowDesign);

}
