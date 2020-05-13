package com.july.bpm;

import com.alibaba.fastjson.JSON;
import com.july.bpm.vo.node.TeacherLeaveRecordExcel;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


/**
 * 自动生成接口文档
 * @author zqk
 * @since 2020/01/06
 */
public class MarkDownTest {

    @Test
    public void test() {
        List<TeacherLeaveRecordExcel> excel1s = new ArrayList<>();

        TeacherLeaveRecordExcel excel1 = new TeacherLeaveRecordExcel();
        excel1.setId(1);
        excel1.setTeacherName("zengxueqi1");
        excel1.setSchoolName("九峰");

        TeacherLeaveRecordExcel excel2 = new TeacherLeaveRecordExcel();
        excel2.setId(2);
        excel2.setPid(1);
        excel2.setTeacherName("zengxueqi2");
        excel1.setSchoolName("九峰");

        TeacherLeaveRecordExcel excel3 = new TeacherLeaveRecordExcel();
        excel3.setId(3);
        excel3.setTeacherName("zengxueqi3");
        excel1.setSchoolName("tan tong");

        TeacherLeaveRecordExcel excel4 = new TeacherLeaveRecordExcel();
        excel4.setId(4);
        excel4.setPid(3);
        excel4.setTeacherName("zengxueqi4");

        TeacherLeaveRecordExcel excel5 = new TeacherLeaveRecordExcel();
        excel5.setId(5);
        excel5.setPid(4);
        excel5.setTeacherName("zengxueqi5");

        excel1s.add(excel1);
        excel1s.add(excel2);
        excel1s.add(excel3);
        excel1s.add(excel4);
        excel1s.add(excel5);

        excel1s.stream().anyMatch(teacherLeaveRecordExcel -> {
            System.out.println("===>" + teacherLeaveRecordExcel.getTeacherName());
            if (teacherLeaveRecordExcel.getTeacherName().equals("zengxueqi1")) {
                return true;
            }
            return false;
        });
    }

}
