package com.july.bpm.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * 节点属性信息
 * @author zengxueqi
 * @program julybpm
 * @since 2020-04-05 19:44
 **/
@Data
public class SaveNodePropertyDto implements Serializable {

    /**
     * 属性名称
     */
    private String propertyName;
    /**
     * 属性值
     */
    private String propertyValue;

}
