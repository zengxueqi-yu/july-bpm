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
@TableName("bpm_flow")
public class Flow extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 流程id
     */
    @TableId(value = "id", type = IdType.UUID)
    private String id;

    /**
     * 流程名称
     */
    @TableField("flowName")
    private String flowName;

    /**
     * 授权项目id
     */
    @TableField("projectId")
    private String projectId;

    /**
     * 流程标识
     */
    @TableField("flowIdentical")
    private String flowIdentical;

    /**
     * 流程状态(是否禁用)
     */
    @TableField("flowStatus")
    private Integer flowStatus;

    /**
     * 流程描述
     */
    @TableField("remark")
    private String remark;

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
