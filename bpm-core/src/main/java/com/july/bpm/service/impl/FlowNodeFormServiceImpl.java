package com.july.bpm.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.july.bpm.entity.FlowNodeForm;
import com.july.bpm.mapper.FlowNodeFormMapper;
import com.july.bpm.service.FlowNodeFormService;
import org.springframework.stereotype.Service;

/**
 * 节点表单组表 服务实现类
 * @author zengxueqi
 * @since 2020-04-08
 */
@Service
public class FlowNodeFormServiceImpl extends ServiceImpl<FlowNodeFormMapper, FlowNodeForm> implements FlowNodeFormService {

    /**
     * 更新节点表单组信息
     * @param flowNodeForm
     * @return void
     * @author zengxueqi
     * @since 2020/4/8
     */
    @Override
    public void updateNodeFormGroup(FlowNodeForm flowNodeForm) {
        QueryWrapper<FlowNodeForm> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("nodeId", flowNodeForm.getNodeId());
        FlowNodeForm flowNodeForm1 = this.getOne(queryWrapper);

        if (flowNodeForm1 != null) {
            flowNodeForm1.setFormGroupId(flowNodeForm.getFormGroupId());
            this.updateById(flowNodeForm1);
        } else {
            this.save(flowNodeForm);
        }
    }
}
