package com.july.bpm.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * 保存流程信息
 * @author zengxueqi
 * @program julybpm
 * @since 2020-04-03 15:45
 **/
@Data
public class SaveFlowDto implements Serializable {

    private static final long serialVersionUID = -4420778588727841565L;

    /**
     * 流程名称
     */
    private String flowName;
    /**
     * 授权项目id
     */
    private Long projectId;
    /**
     * 流程标识
     */
    private String flowIdentical;
    /**
     * 流程描述
     */
    private String remark;

}