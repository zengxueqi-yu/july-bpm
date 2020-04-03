package com.july.bpm.controller;

import com.july.bpm.configure.ApiResult;
import com.july.bpm.dto.DeleteFlowLineDto;
import com.july.bpm.dto.SaveFlowLineDto;
import com.july.bpm.service.FlowLineService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * 流程连线表 前端控制器
 * @author zengxueqi
 * @since 2020-04-03
 */
@RestController
@RequestMapping("/flowLine")
public class FlowLineController {

    @Resource
    private FlowLineService flowLineService;

    /**
     * 保存流程连线信息
     * @param saveFlowLineDto
     * @return com.july.bpm.configure.ApiResult<java.lang.String>
     * @author zengxueqi
     * @since 2020/4/3
     */
    @PostMapping("/saveFlowLine")
    public ApiResult<String> saveFlowLine(@RequestBody SaveFlowLineDto saveFlowLineDto){
        flowLineService.saveFlowLine(saveFlowLineDto);
        return ApiResult.ok("操作成功！");
    }

    /**
     * 删除流程连线信息
     * @param deleteFlowLineDto
     * @return com.july.bpm.configure.ApiResult<java.lang.String>
     * @author zengxueqi
     * @since 2020/4/3
     */
    @PostMapping("/deleteFlowLine")
    public ApiResult<String> deleteFlowLine(@RequestBody DeleteFlowLineDto deleteFlowLineDto){
        flowLineService.deleteFlowLine(deleteFlowLineDto);
        return ApiResult.ok("操作成功！");
    }

}
