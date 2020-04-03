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
@TableName("bpm_flow_param")
public class FlowParam implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 流程参数id
     */
    @TableId(value = "id", type = IdType.UUID)
    private String id;

    /**
     * 参数名
     */
    @TableField("paramName")
    private String paramName;

    /**
     * 参数变量名
     */
    @TableField("paramCode")
    private String paramCode;

    /**
     * 参数类型
     */
    @TableField("paramType")
    private String paramType;

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
