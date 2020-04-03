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
@TableName("bpm_flow_decision")
public class FlowDecision implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 流程编号
     */
    @TableField("flowId")
    private byte[] flowId;

    /**
     * 分支名称
     */
    @TableField("descName")
    private String descName;

    /**
     * 创建时间
     */
    @TableField("createTime")
    private Long createTime;

    /**
     * 创建人
     */
    @TableField("createUserId")
    private Long createUserId;

}
