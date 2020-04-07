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
 * 流程表单信息
 * @author zengxueqi
 * @since 2020-04-07
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("bpm_flow_form")
public class FlowForm implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 表单id
     */
    @TableId(value = "id", type = IdType.UUID)
    private String id;

    /**
     * 表单类型
     */
    @TableField("formType")
    private String formType;

    /**
     * 表单信息
     */
    @TableField("formJson")
    private String formJson;

    @TableField("createTime")
    private Long createTime;

    @TableField("updateTime")
    private Long updateTime;

    @TableField("deleted")
    private Integer deleted;

}
