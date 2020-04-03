package com.july.bpm.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * 流程图设计保存信息
 * @author zengxueqi
 * @program julybpm
 * @since 2020-04-02 17:45
 **/
@Data
public class SaveFlowDesignDto implements Serializable {

    private static final long serialVersionUID = 1945649961122691638L;

    /**
     * 流程图信息
     */
    private String flowJson;
    /**
     * 流程id
     */
    private String flowId;

}