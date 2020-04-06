package com.july.bpm.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * 保存的节点信息
 * @author zengxueqi
 * @program julybpm
 * @since 2020-04-05 19:39
 **/
@Data
public class SaveNodeDto implements Serializable {

    private static final long serialVersionUID = 5080227245734037282L;

    /**
     * 节点id
     */
    private String nodeId;
    /**
     * 节点类型（start=开始，state=任务，join=转换，end=结束）
     */
    private String nodeType;
    /**
     * 节点名称
     */
    private String nodeName;
    /**
     * 节点属性信息
     */
    private List<SaveNodePropertyDto> nodeProperty;

}
