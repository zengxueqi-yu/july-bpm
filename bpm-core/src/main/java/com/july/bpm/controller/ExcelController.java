package com.july.bpm.controller;

import com.alibaba.fastjson.JSON;
import com.july.bpm.vo.node.TeacherLeaveRecordExcel;
import com.july.excel.entity.ExcelData;
import com.july.excel.entity.ExcelReadData;
import com.july.excel.excel.ExcelFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

/**
 * excel测试控制器
 * @author zengxueqi
 * @program july-bpm
 * @since 2020-05-07 16:57
 **/
@RestController
@RequestMapping("/excel")
@Slf4j
public class ExcelController {

    /**
     * 导出excel数据
     * @param response
     * @return void
     * @author zengxueqi
     * @since 2020/5/9
     */
    @GetMapping("/exportExcel")
    public void exportExcel(HttpServletResponse response) {
        ExcelData excelData = ExcelData.builder()
                //需要导出的excel数据
                .excelData(exportExcel())
                //sheet名称
                .sheetName("测试数据")
                //文件名称
                .fileName("测试数据")
                //字体大小
                .fontSize(12)
                //列宽
                .cellWidth(25)
                //大标题
                .labelName("教师请假信息数据")
                .build();
        long startTime = System.currentTimeMillis();
        com.july.excel.excel.ExcelFactory.exportExcelData(excelData, TeacherLeaveRecordExcel.class, response);
        log.info("===> time:" + (System.currentTimeMillis() - startTime) + " ms!");
    }

    /**
     * 模拟需要导出的excel数据
     * @param
     * @return java.util.List<com.july.bpm.vo.node.EduTeacherLeaveRecordExcel1>
     * @author zengxueqi
     * @since 2020/5/9
     */
    public List<TeacherLeaveRecordExcel> exportExcel() {
        List<TeacherLeaveRecordExcel> list = new ArrayList<>();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        for (int i = 0; i < 10; i++) {
            TeacherLeaveRecordExcel excel = TeacherLeaveRecordExcel.builder()
                    .schoolName("鹭岛小学" + i)
                    .teacherName("曾雪琪" + i)
                    .activeTime(simpleDateFormat.format(new Date()))
                    .img("http://tdog.oss-cn-hangzhou.aliyuncs.com/default/dJWRp2TXihjpeaxH4ANnExzmSG77GTcF.jpg")
                    .build();
            list.add(excel);
        }
        return list;
    }

    /**
     * 导入excel数据
     * @param file
     * @return void
     * @author zengxueqi
     * @since 2020/5/9
     */
    @GetMapping("/importExcel")
    public void importExcel(@RequestBody MultipartFile file) throws Exception {
        ExcelReadData excelTitleRowNum = ExcelReadData.builder()
                .sheetNum(0)
                .rowNum(1)
                .build();
        ExcelReadData excelReadData = ExcelReadData.builder()
                .sheetNum(0)
                .rowNum(2)
                .build();
        ExcelData excelData = ExcelData.builder()
                //导入测试excel这个sheet
                .sheetName("测试数据")
                //时间格式化
                .expectDateFormatStr("yyyy-MM-dd")
                //sheet标题所在行数(读取sheet下标为0，行数为1的标题)
                .excelTitleRowNum(Arrays.asList(excelTitleRowNum))
                //sheet解析数据开始行数(从sheet下标为0，行数为2开始解析数据)
                .excelReadDataList(Arrays.asList(excelReadData))
                .build();
        List<TeacherLeaveRecordExcel> excel1s = ExcelFactory.importExcelData(file, TeacherLeaveRecordExcel.class, excelData);
        log.info("excel data===>" + JSON.toJSONString(excel1s));
    }

}
