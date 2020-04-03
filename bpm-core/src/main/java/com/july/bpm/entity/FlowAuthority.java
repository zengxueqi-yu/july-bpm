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
@TableName("bpm_flow_authority")
public class FlowAuthority implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 流程组节点id
     */
    @TableField("queueId")
    private Long queueId;

    /**
     * 审核流程Id
     */
    @TableField("flowId")
    private Long flowId;

    /**
     * 审核人姓名
     */
    @TableField("approverName")
    private String approverName;

    /**
     * 审核人id
     */
    @TableField("approverId")
    private Long approverId;

    /**
     * 审核人关联其他信息
     */
    @TableField("approverRef")
    private Long approverRef;

    /**
     * 数据的创建时间戳单位秒.
     */
    @TableField("createTime")
    private Long createTime;

    /**
     * 数据的修改时间戳单位秒.
     */
    @TableField("updateTime")
    private Long updateTime;

    /**
     * 是否禁用（0=启动，1=禁用）
     */
    @TableField("status")
    private Integer status;

    /**
     * 审核人类型（eg：0=机构用户，1=教师）
     */
    @TableField("approverType")
    private Integer approverType;

}
