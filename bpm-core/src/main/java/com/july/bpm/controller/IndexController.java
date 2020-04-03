package com.july.bpm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * 用于页面跳转的控制器
 * @author zengxueqi
 * @program julybpm
 * @since 2020-04-02 15:35
 **/
@Controller
public class IndexController {

    @GetMapping("/bpm")
    public String index(){
        return "index";
    }

}