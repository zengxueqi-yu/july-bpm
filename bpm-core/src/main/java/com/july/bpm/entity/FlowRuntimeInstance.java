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
@TableName("bpm_flow_runtime_instance")
public class FlowRuntimeInstance extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 流程实例id
     */
    @TableId(value = "id", type = IdType.UUID)
    private String id;

    /**
     * 流程id
     */
    @TableField("flowId")
    private String flowId;

    /**
     * 业务id
     */
    @TableField("dataId")
    private String dataId;

    /**
     * 审核进度id
     */
    @TableField("approveProcessId")
    private String approveProcessId;

    /**
     * 当前审核id
     */
    @TableField("approveId")
    private String approveId;

    /**
     * 审核状态
     */
    @TableField("approveStatus")
    private Integer approveStatus;

    /**
     * 流程标识
     */
    @TableField("flowIdentical")
    private String flowIdentical;

    /**
     * 版本号
     */
    @TableField("version")
    private Integer version;

    /**
     * 是否完成
     */
    @TableField("boolEnd")
    private Integer boolEnd;

    /**
     * 流程标题（曾雪琪的请假申请流程）
     */
    @TableField("flowTopic")
    private String flowTopic;

    /**
     * 审核节点id
     */
    @TableField("nodeId")
    private String nodeId;

    /**
     * 是否紧急
     */
    @TableField("boolUrgent")
    private Integer boolUrgent;

    /**
     * 创建人
     */
    @TableField("createUserId")
    private String createUserId;

    /**
     * 创建时间
     */
    @TableField("createTime")
    private Long createTime;

    /**
     * 修改时间
     */
    @TableField("updateTime")
    private Long updateTime;

}
