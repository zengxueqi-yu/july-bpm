package com.july.bpm.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * 流程连线表
 * @author zengxueqi
 * @since 2020-04-03
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("bpm_flow_line")
@Builder
public class FlowLine extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 流程线id
     */
    @TableId(value = "id", type = IdType.UUID)
    private String id;

    /**
     * 流程id
     */
    @TableField("flowId")
    private String flowId;

    /**
     * 流程开始节点id
     */
    @TableField("startNodeId")
    private String startNodeId;

    /**
     * 流程结束节点id
     */
    @TableField("endNodeId")
    private String endNodeId;

    /**
     * 创建时间
     */
    @TableField("createTime")
    private Long createTime;

    /**
     * 更新时间
     */
    @TableField("updateTime")
    private Long updateTime;

    /**
     * 禁用状态
     */
    @TableField("status")
    private Integer status;

}
