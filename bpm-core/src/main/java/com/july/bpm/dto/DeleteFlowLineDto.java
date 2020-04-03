package com.july.bpm.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * 删除流程连线信息
 * @author zengxueqi
 * @program julybpm
 * @since 2020-04-03 14:18
 **/
@Data
public class DeleteFlowLineDto implements Serializable {

    private static final long serialVersionUID = -1274611297629301741L;

    /**
     * 流程连线id
     */
    private String flowLineId;

}
