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
@TableName("bpm_flow_project")
public class FlowProject implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 项目授权id
     */
    @TableId(value = "id", type = IdType.UUID)
    private String id;

    /**
     * 项目名称
     */
    @TableField("projecName")
    private String projecName;

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

    /**
     * 是否禁用（0=启用，1=禁用）
     */
    @TableField("status")
    private Integer status;

}
