package com.july.bpm.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.july.bpm.entity.FlowLine;
import org.apache.ibatis.annotations.Mapper;

/**
 * 流程连线表 Mapper 接口
 * @author zengxueqi
 * @since 2020-04-03
 */
@Mapper
public interface FlowLineMapper extends BaseMapper<FlowLine> {

}
