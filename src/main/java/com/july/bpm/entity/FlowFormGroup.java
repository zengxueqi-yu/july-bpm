package com.july.bpm.entity;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
/**
 * <p>
 * 流程表单组=>对应每个节点
 * </p>
 *
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
    @TableField("id")
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
