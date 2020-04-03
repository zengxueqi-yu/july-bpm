package com.july.bpm.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.july.bpm.dto.SaveFlowDesignDto;
import com.july.bpm.entity.FlowDesign;
import com.july.bpm.mapper.FlowDesignMapper;
import com.july.bpm.service.FlowDesignService;
import org.springframework.stereotype.Service;

/**
 * 服务实现类
 * @author zengxueqi
 * @since 2020-04-02
 */
@Service
public class FlowDesignServiceImpl extends ServiceImpl<FlowDesignMapper, FlowDesign> implements FlowDesignService {

    /**
     * 保存流程设计图
     * @param saveFlowDesignDto
     * @return void
     * @author zengxueqi
     * @since 2020/4/2
     */
    @Override
    public void saveFlowDesign(SaveFlowDesignDto saveFlowDesignDto) {
        QueryWrapper<FlowDesign> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("flowId",saveFlowDesignDto.getFlowId());
        FlowDesign flowDesign = this.getOne(queryWrapper);

        if(flowDesign == null){
            FlowDesign flowDesign1 = FlowDesign.builder()
                    .flowId(saveFlowDesignDto.getFlowId())
                    .flowJson(saveFlowDesignDto.getFlowJson())
                    .build();
            this.save(flowDesign1);
        }else{
            flowDesign.setUpdateTime(System.currentTimeMillis()/1000);
            flowDesign.setFlowJson(saveFlowDesignDto.getFlowJson());
            this.updateById(flowDesign);
        }
    }

    /**
     * 查询流程图设计信息
     * @param flowDesign
     * @return com.july.bpm.entity.FlowDesign
     * @author zengxueqi
     * @since 2020/4/2
     */
    @Override
    public FlowDesign getFlowDesign(FlowDesign flowDesign){
        QueryWrapper<FlowDesign> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("flowId",flowDesign.getFlowId());
        return this.getOne(queryWrapper);
    }

}
