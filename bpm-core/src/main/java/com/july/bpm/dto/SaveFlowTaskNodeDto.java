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
     * 节点id
     */
    private String nodeId;
    /**
     * 节点标识（start，state，end）
     */
    private String nodeType;
    /**
     * 节点名称
     */
    private String nodeName;

}