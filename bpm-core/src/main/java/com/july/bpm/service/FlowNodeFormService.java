package com.july.bpm.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.july.bpm.entity.FlowNodeForm;

/**
 * 节点表单组表 服务类
 * @author zengxueqi
 * @since 2020-04-08
 */
public interface FlowNodeFormService extends IService<FlowNodeForm> {

    /**
     * 修改节点表单组信息
     * @param flowNodeForm
     * @return void
     * @author zengxueqi
     * @since 2020/4/8
     */
    void updateNodeFormGroup(FlowNodeForm flowNodeForm);

}
