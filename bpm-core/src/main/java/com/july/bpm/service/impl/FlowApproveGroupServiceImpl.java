package com.july.bpm.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.july.bpm.entity.FlowApproveGroup;
import com.july.bpm.mapper.FlowApproveGroupMapper;
import com.july.bpm.service.FlowApproveGroupService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * 服务实现类(流程审核组信息)
 * @author zengxueqi
 * @since 2020-04-06
 */
@Service
public class FlowApproveGroupServiceImpl extends ServiceImpl<FlowApproveGroupMapper, FlowApproveGroup> implements FlowApproveGroupService {

    /**
     * 修改流程审核组信息
     * @param flowApproveGroup
     * @return java.lang.String
     * @author zengxueqi
     * @since 2020/4/8
     */
    @Override
    public String updateApproveGroup(FlowApproveGroup flowApproveGroup) {
        QueryWrapper<FlowApproveGroup> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("flowId",flowApproveGroup.getFlowId())
                .eq("nodeId",flowApproveGroup.getNodeId());
        FlowApproveGroup flowApproveGroup1 = this.getOne(queryWrapper);

        if(flowApproveGroup1 != null){
            flowApproveGroup1.setApproveGroup(flowApproveGroup.getApproveGroup());
            this.updateById(flowApproveGroup1);
            return flowApproveGroup1.getId();
        }else {
            this.save(flowApproveGroup);
            return flowApproveGroup.getId();
        }
    }

}
