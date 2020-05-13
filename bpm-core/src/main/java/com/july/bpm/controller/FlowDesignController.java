package com.july.bpm.controller;

import com.july.bpm.configure.ApiResult;
import com.july.bpm.dto.SaveFlowDesignDto;
import com.july.bpm.entity.FlowDesign;
import com.july.bpm.service.FlowDesignService;
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
@RequestMapping("/flowDesign")
public class FlowDesignController {

    @Resource
    private FlowDesignService flowDesignService;

    /**
     * 保存流程设计图
     * @param saveFlowDesignDto
     * @return com.july.bpm.configure.ApiResult<java.lang.String>
     * @author zengxueqi
     * @since 2020/4/2
     */
    @PostMapping("/saveFlowDesign")
    public ApiResult<String> saveFlowDesign(@RequestBody SaveFlowDesignDto saveFlowDesignDto){
        System.out.println("流程图保存信息 ===> " + saveFlowDesignDto.getFlowJson());
        flowDesignService.saveFlowDesign(saveFlowDesignDto);
        return ApiResult.ok("操作成功！");
    }

    /**
     * 查询流程图设计信息
     * @param flowDesign
     * @return com.july.bpm.configure.ApiResult<com.july.bpm.entity.FlowDesign>
     * @author zengxueqi
     * @since 2020/4/2
     */
    @PostMapping("/getFlowDesign")
    public ApiResult<FlowDesign> getFlowDesign(@RequestBody FlowDesign flowDesign){
        return ApiResult.ok(flowDesignService.getFlowDesign(flowDesign));
    }

}
