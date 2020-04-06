package com.july.bpm.controller;

import com.july.bpm.configure.ApiResult;
import com.july.bpm.dto.NodeUserDto;
import com.july.bpm.vo.node.NodeUserVo;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

/**
 * 前端控制器
 * @author zengxueqi
 * @since 2020-04-02
 */
@RestController
@RequestMapping("/flowRuntimeNodeUser")
public class FlowRuntimeNodeUserController {

    /**
     * 查询节点用户信息
     * @param nodeUserDto
     * @return com.july.bpm.configure.ApiResult<java.util.List < com.july.bpm.vo.node.NodeUserVo>>
     * @author zengxueqi
     * @since 2020/4/5
     */
    @PostMapping("/getNodeUserInfo")
    public ApiResult<List<NodeUserVo>> getNodeUserInfo(@RequestBody NodeUserDto nodeUserDto) {
        List<NodeUserVo> nodeUserVos = Arrays.asList(
                NodeUserVo.builder().userId("1").userName("曾雪琪").build(),
                NodeUserVo.builder().userId("2").userName("曾妤曦").build());
        return ApiResult.ok(nodeUserVos);
    }

}
