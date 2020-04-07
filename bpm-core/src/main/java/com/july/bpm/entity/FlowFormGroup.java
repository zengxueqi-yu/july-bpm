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
 * 流程表单组=>对应每个节点
 * @author zengxueqi
 * @since 2020-04-07
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("bpm_flow_form_group")
public class FlowFormGroup implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 流程表单组id
     */
    @TableId(value = "id", type = IdType.UUID)
    private String id;

    /**
     * 流程表单id
     */
    @TableField("formId")
    private String formId;

    @TableField("createTime")
    private Long createTime;

    @TableField("updateTime")
    private Long updateTime;

    @TableField("deleted")
    private Integer deleted;

}
