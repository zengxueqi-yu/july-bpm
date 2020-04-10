package com.july.bpm.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.*;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * 节点表单组表
 * @author zengxueqi
 * @since 2020-04-08
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("bpm_flow_node_form")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FlowNodeForm implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 节点表单组id
     */
    @TableId(value = "id", type = IdType.UUID)
    private String id;

    /**
     * 节点id
     */
    @TableField("nodeId")
    private String nodeId;

    /**
     * 表单组id
     */
    @TableField("formGroupId")
    private String formGroupId;

    @TableField("createTime")
    private Long createTime;

    @TableField("updateTime")
    private Long updateTime;

    @TableField("deleted")
    private Integer deleted;

}
