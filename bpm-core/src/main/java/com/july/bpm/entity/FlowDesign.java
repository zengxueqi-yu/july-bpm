package com.july.bpm.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.*;
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
@TableName("bpm_flow_design")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FlowDesign extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 流程图id
     */
    @TableId(value = "id", type = IdType.UUID)
    private String id;

    /**
     * 流程id
     */
    @TableField("flowId")
    private String flowId;

    /**
     * 流程图配置信息
     */
    @TableField("flowJson")
    private String flowJson;

    /**
     * 创建时间
     */
    @TableField("createTime")
    private Long createTime;

    /**
     * 创建人
     */
    @TableField("createUserId")
    private String createUserId;

    /**
     * 修改时间
     */
    @TableField("updateTime")
    private Long updateTime;

    /**
     * 修改人
     */
    @TableField("updateUserId")
    private String updateUserId;

}
