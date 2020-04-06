package com.july.bpm.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * 节点用户信息
 * @author zengxueqi
 * @program julybpm
 * @since 2020-04-05 21:32
 **/
@Data
public class NodeUserDto implements Serializable {

    private static final long serialVersionUID = -5255383587150466551L;

    /**
     * 流程id
     */
    private String flowId;

}
