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
@TableName("bpm_flow_runtime_node")
public class FlowRuntimeNode extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 流程运行节点id
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
     * 节点id
     */
    @TableField("nodeId")
    private String nodeId;

    /**
     * 节点状态
     */
    @TableField("nodeStatus")
    private Integer nodeStatus;

    /**
     * 提交类型
     */
    @TableField("commitType")
    private Integer commitType;

    /**
     * 返回节点Id
     */
    @TableField("backNodeId")
    private String backNodeId;

    /**
     * 流程标识
     */
    @TableField("flowIdentical")
    private String flowIdentical;

    /**
     * 流程实例Id
     */
    @TableField("instanceId")
    private String instanceId;

    /**
     * 处理时间
     */
    @TableField("handleTime")
    private Long handleTime;

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

}
