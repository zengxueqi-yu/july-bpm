package com.july.bpm.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * 保存流程连线信息
 * @author zengxueqi
 * @program julybpm
 * @since 2020-04-03 14:18
 **/
@Data
public class SaveFlowLineDto implements Serializable {

    private static final long serialVersionUID = -1274611297629301741L;

    /**
     * 流程id
     */
    private String flowId;
    /**
     * 流程连线id
     */
    private String flowLineId;
    /**
     * 开始节点id
     */
    private String startNodeId;
    /**
     * 结束节点id
     */
    private String endNodeId;
    /**
     * 连线名称
     */
    private String pathName;

}
