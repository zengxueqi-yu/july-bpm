package com.july.bpm.controller;

import com.july.bpm.configure.ApiResult;
import com.july.bpm.dto.SaveFlowDto;
import com.july.bpm.service.FlowService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * 前端控制器
 * @author zengxueqi
 * @since 2020-04-02
 */
@RestController
@RequestMapping("/flow")
public class FlowController {

    @Resource
    private FlowService flowService;

    /**
     * 保存流程信息
     * @param saveFlowDto
     * @return com.july.bpm.configure.ApiResult<java.lang.String>
     * @author zengxueqi
     * @since 2020/4/3
     */
    @PostMapping("/saveFlow")
    public ApiResult<String> saveFlow(@RequestBody SaveFlowDto saveFlowDto){
        flowService.saveFlow(saveFlowDto);
        return ApiResult.ok("操作成功！");
    }

}
