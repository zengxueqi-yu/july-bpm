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
 * @since 2020-04-06
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("bpm_flow_approve_group")
public class FlowApproveGroup implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 流程审核组id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 流程Id
     */
    @TableField("flowId")
    private Long flowId;

    /**
     * 流程审核人信息=>[{"id":"13","name":"一年级","parent":0},{"id":"14","name":"二年级","parent":0}]
     */
    @TableField("approveGroup")
    private String approveGroup;

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
     * 逻辑删除标志1删除0未删除
     */
    @TableField("deleted")
    private Integer deleted;

}
