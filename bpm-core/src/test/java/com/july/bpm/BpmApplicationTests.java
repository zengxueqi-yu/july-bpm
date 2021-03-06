package com.july.bpm;

import com.alibaba.fastjson.JSON;
import com.july.bpm.vo.node.TeacherLeaveRecordExcel;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class BpmApplicationTests {

    @Test
    void contextLoads() {
    }

    @org.junit.Test
    public void test() {
        List<TeacherLeaveRecordExcel> excel1s = new ArrayList<>();

        TeacherLeaveRecordExcel excel1 = new TeacherLeaveRecordExcel();
        excel1.setId(1);
        excel1.setTeacherName("四川");

        TeacherLeaveRecordExcel excel2 = new TeacherLeaveRecordExcel();
        excel2.setId(2);
        excel2.setPid(1);
        excel2.setTeacherName("广安");

        TeacherLeaveRecordExcel excel3 = new TeacherLeaveRecordExcel();
        excel3.setId(3);
        excel3.setTeacherName("贵州");

        TeacherLeaveRecordExcel excel4 = new TeacherLeaveRecordExcel();
        excel4.setId(4);
        excel4.setPid(3);
        excel4.setTeacherName("遵义");

        TeacherLeaveRecordExcel excel5 = new TeacherLeaveRecordExcel();
        excel5.setId(5);
        excel5.setPid(4);
        excel5.setTeacherName("红花岗区");

        excel1s.add(excel1);
        excel1s.add(excel2);
        excel1s.add(excel3);
        excel1s.add(excel4);
        excel1s.add(excel5);

        System.out.println("===>" + JSON.toJSONString(excel1s));
    }

}
