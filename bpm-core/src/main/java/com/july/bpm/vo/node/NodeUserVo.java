package com.july.bpm.vo.node;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * 节点用户信息
 * @author zengxueqi
 * @program julybpm
 * @since 2020-04-05 21:30
 **/
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NodeUserVo implements Serializable {

    private static final long serialVersionUID = 7039993033004376956L;

    /**
     * 用户id
     */
    private String userId;
    /**
     * 用户名
     */
    private String userName;

}
