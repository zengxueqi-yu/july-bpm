package com.july.bpm.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.july.bpm.dto.SaveFlowDto;
import com.july.bpm.entity.Flow;

/**
 * 服务类
 * @author zengxueqi
 * @since 2020-04-02
 */
public interface FlowService extends IService<Flow> {

    /**
     * 保存流程信息
     * @param saveFlowDto
     * @return void
     * @author zengxueqi
     * @since 2020/4/3
     */
    void saveFlow(SaveFlowDto saveFlowDto);

}
