package com.july.bpm.service;

import com.july.bpm.entity.FlowApproveGroup;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * 服务类(流程审核组信息)
 * @author zengxueqi
 * @since 2020-04-06
 */
public interface FlowApproveGroupService extends IService<FlowApproveGroup> {

    /**
     * 修改流程审核组信息
     * @param flowApproveGroup
     * @return java.lang.String
     * @author zengxueqi
     * @since 2020/4/8
     */
    String updateApproveGroup(FlowApproveGroup flowApproveGroup);

}
