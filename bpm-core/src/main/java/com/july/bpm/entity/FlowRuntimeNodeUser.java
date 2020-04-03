package com.july.bpm.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author zengxueqi
 * @since 2020-04-02
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("bpm_flow_runtime_node_user")
public class FlowRuntimeNodeUser implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 流程审核人审核id
     */
    @TableId(value = "id", type = IdType.UUID)
    private String id;

    /**
     * 流程审核节点id
     */
    @TableField("runtimeNodeId")
    private String runtimeNodeId;

    /**
     * 业务id
     */
    @TableField("dataId")
    private String dataId;

    /**
     * 流程id
     */
    @TableField("flowId")
    private String flowId;

    /**
     * 节点id
     */
    @TableField("nodeId")
    private String nodeId;

    /**
     * 审核状态
     */
    @TableField("approveStatus")
    private Integer approveStatus;

    /**
     * 审核人id
     */
    @TableField("approverId")
    private String approverId;

    /**
     * 处理状态
     */
    @TableField("workStatus")
    private Integer workStatus;

    /**
     * 处理人id
     */
    @TableField("workUserId")
    private String workUserId;

    /**
     * 流程标识
     */
    @TableField("flowIdentical")
    private String flowIdentical;

    /**
     * 流程实例id
     */
    @TableField("instanceId")
    private String instanceId;

}
