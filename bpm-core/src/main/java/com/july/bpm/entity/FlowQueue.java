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
@TableName("bpm_flow_queue")
public class FlowQueue implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 选择人类型（0=部门，1=职务，2 =机构，3=教师）
     */
    @TableField("type")
    private Integer type;

    /**
     * 选择对象id
     */
    @TableField("subjectId")
    private Long subjectId;

    /**
     * 选择对象名称
     */
    @TableField("subjectName")
    private String subjectName;

    /**
     * 关联任教年级后只能审核当前年级教师的申请 0 不关联1关联
     */
    @TableField("relateTeachd")
    private Integer relateTeachd;

    /**
     * 用户选择对象所有组合，比如选择[一年级 一班 xxx老师] 每个选择流程对象id,根据对象定义产生不同类型组合',
     */
    @TableField("searchCombine")
    private String searchCombine;

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
     * 禁用状态（0=启用，1=禁用）
     */
    @TableField("status")
    private Integer status;

}
