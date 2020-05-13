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

    @GetMapping("/myflow")
    public String myflow() {
        return "myflow";
    }

    @GetMapping("/gooflow1")
    public String gooflow1() {
        return "gooflow1";
    }

    @GetMapping("/gooflow")
    public String gooflow() {
        return "gooflow";
    }

    @GetMapping("/flow")
    public String flow() {
        return "flow";
    }

}