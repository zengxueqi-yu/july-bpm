package com.july.bpm.mapper;

import com.july.bpm.entity.FlowFormGroup;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * 流程表单组=>对应每个节点 Mapper 接口
 * @author zengxueqi
 * @since 2020-04-07
 */
@Mapper
public interface FlowFormGroupMapper extends BaseMapper<FlowFormGroup> {

}
