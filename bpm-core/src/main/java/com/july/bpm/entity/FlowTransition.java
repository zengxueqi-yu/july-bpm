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
 * 流程节点转换信息
 * @author zengxueqi
 * @since 2020-04-02
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("bpm_flow_transition")
@Builder
public class FlowTransition extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.UUID)
    private String id;

    @TableField("flowId")
    private String flowId;

    @TableField("nodeId")
    private String nodeId;

    @TableField("transitionCode")
    private String transitionCode;

    @TableField("transitionName")
    private String transitionName;

    @TableField("remark")
    private String remark;

    @TableField("passNodeId")
    private String passNodeId;

    @TableField("notPassNodeId")
    private String notPassNodeId;

    @TableField("createTime")
    private Long createTime;

    @TableField("updateTime")
    private Long updateTime;

    @TableField("passNodeType")
    private String passNodeType;

    @TableField("status")
    private Integer status;

}
