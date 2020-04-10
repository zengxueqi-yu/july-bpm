package com.july.bpm.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * <p>
 * 流程自定义业务表
 * </p>
 *
 * @author zengxueqi
 * @since 2020-04-08
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("bpm_flow_table_zdine")
public class FlowTableZdine implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 自定义表id
     */
    @TableField("id")
    private String id;

    /**
     * 表名
     */
    @TableField("tableName")
    private String tableName;

    /**
     * 备注
     */
    @TableField("desc")
    private String desc;

    /**
     * 表别名
     */
    @TableField("tableAlias")
    private String tableAlias;

    @TableField("createTime")
    private Long createTime;

    @TableField("updateTime")
    private Long updateTime;

    @TableField("deleted")
    private Integer deleted;

}
