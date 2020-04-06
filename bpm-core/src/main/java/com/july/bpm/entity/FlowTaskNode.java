package com.july.bpm.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * 流程节点信息
 * @author zengxueqi
 * @since 2020-04-02
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("bpm_flow_task_node")
public class FlowTaskNode extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.UUID)
    private String id;

    @TableField("flowId")
    private String flowId;

    /**
     * 流程审核组id，用户查询该节点的所有审核人
     */
    private String approveGroupId;

    @TableField("nodeName")
    private String nodeName;

    @TableField("transitionMaker")
    private String transitionMaker;

    @TableField("checkType")
    private String checkType;

    @TableField("remark")
    private String remark;

    @TableField("nodeType")
    private String nodeType;

    @TableField("sort")
    private BigDecimal sort;

    @TableField("usersMaker")
    private String usersMaker;

    @TableField("nextNodeMaker")
    private String nextNodeMaker;

    @TableField("params")
    private String params;

    @TableField("ssrole")
    private String ssrole;

    @TableField("createTime")
    private LocalDateTime createTime;

    @TableField("updateTime")
    private LocalDateTime updateTime;

    @TableField("autoBackTask")
    private String autoBackTask;

    @TableField("url")
    private String url;

    @TableField("ssUser")
    private String ssUser;

    @TableField("ssType")
    private String ssType;

    @TableField("ssCode")
    private String ssCode;

    /**
     * 是否有办理时限要求
     */
    @TableField("timeReq")
    private String timeReq;

    /**
     * 办理时限
     */
    @TableField("timeLimit")
    private BigDecimal timeLimit;

    /**
     * 任务节点
     */
    @TableField("taskNode")
    private String taskNode;

    /**
     * 是否禁用（0=启用，1=禁用）
     */
    @TableField("status")
    private Integer status;

}
