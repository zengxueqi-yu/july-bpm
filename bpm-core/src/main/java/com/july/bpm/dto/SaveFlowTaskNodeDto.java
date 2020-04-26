package com.july.bpm.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * 保存流程节点信息
 * @author zengxueqi
 * @program julybpm
 * @since 2020-04-02 18:31
 **/
@Data
public class SaveFlowTaskNodeDto implements Serializable {

    private static final long serialVersionUID = -3389183420709304544L;

    /**
     * 流程id
     */
    private String flowId;
    /**
     * 节点信息
     */
    private SaveNodeDto nodeDto;
    /**
     * 节点id
     */
    private String nodeId;
    /**
     * 节点名称
     */
    private String nodeName;
    /**
     * 节点审核信息
     */
    private String nodeApproverMsg;
    /**
     * 节点知会人
     */
    private String nodeNotifyMsg;
    /**
     * 节点审核类型(会签/或签/自定义)
     */
    private String nodeApproveType;
    /**
     * 节点表单信息
     */
    private String nodeFormMsg;
}