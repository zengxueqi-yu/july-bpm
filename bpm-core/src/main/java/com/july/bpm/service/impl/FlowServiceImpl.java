package com.july.bpm.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.july.bpm.dto.SaveFlowDto;
import com.july.bpm.entity.Flow;
import com.july.bpm.mapper.FlowMapper;
import com.july.bpm.service.FlowService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

/**
 * 服务实现类
 * @author zengxueqi
 * @since 2020-04-02
 */
@Service
public class FlowServiceImpl extends ServiceImpl<FlowMapper, Flow> implements FlowService {

    /**
     * 保存流程信息
     * @param saveFlowDto
     * @return void
     * @author zengxueqi
     * @since 2020/4/3
     */
    @Override
    public void saveFlow(SaveFlowDto saveFlowDto) {
        Flow flow = new Flow();
        BeanUtils.copyProperties(saveFlowDto,flow);
        this.save(flow);
    }
}
