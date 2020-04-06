package com.july.bpm.controller;

import com.july.bpm.configure.ApiResult;
import com.july.bpm.dto.DeleteFlowTaskNodeDto;
import com.july.bpm.dto.SaveFlowTaskNodeDto;
import com.july.bpm.service.FlowTaskNodeService;
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
@RequestMapping("/flowTaskNode")
public class FlowTaskNodeController {

    @Resource
    private FlowTaskNodeService flowTaskNodeService;

    /**
     * 保存流程节点信息
     * @param saveFlowTaskNodeDto
     * @return com.july.bpm.configure.ApiResult<java.lang.Long>
     * @author zengxueqi
     * @since 2020/4/2
     */
    @PostMapping("/saveFlowTaskNode")
    public ApiResult<Long> saveFlowTaskNode(@RequestBody SaveFlowTaskNodeDto saveFlowTaskNodeDto){
        flowTaskNodeService.saveFlowTaskNode(saveFlowTaskNodeDto);
        return ApiResult.ok("操作成功！");
    }

    /**
     * 删除某个节点信息
     * @param deleteFlowTaskNodeDto
     * @return com.july.bpm.configure.ApiResult<java.lang.String>
     * @author zengxueqi
     * @since 2020/4/3
     */
    @PostMapping("/deleteFlowTaskNode")
    public ApiResult<String> deleteFlowTaskNode(@RequestBody DeleteFlowTaskNodeDto deleteFlowTaskNodeDto){
        flowTaskNodeService.deleteFlowTaskNode(deleteFlowTaskNodeDto);
        return ApiResult.ok("操作成功！");
    }

}
