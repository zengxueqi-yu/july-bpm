package com.july.bpm.vo.node;

import com.july.excel.entity.ExcelField;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * 教师请假记录信息
 * @author zengxueqi
 * @program teacherleave
 * @since 2020-03-24 17:51
 **/
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TeacherLeaveRecordExcel implements Serializable {

    private static final long serialVersionUID = 7475534851737245290L;

    private Integer id;
    private Integer pid = 0;
    /**
     * 教师姓名
     */
    @ExcelField(value = "教师姓名")
    private String teacherName;
    /**
     * 学校名称
     */
    @ExcelField("学校名称")
    private String schoolName;
    /**
     * 请假类型
     */
    @ExcelField("请假类型")
    private String leaveTypeName;
    /**
     * 请假开始时间
     */
    @ExcelField("请假开始时间")
    private String startTime;
    /**
     * 请教结束时间
     */
    @ExcelField("请假结束时间")
    private String endTime;
    /**
     * 请假时长
     */
    @ExcelField("请假时长")
    private String activeTime;
    /**
     * 申请时间
     */
    @ExcelField("申请时间")
    private String createdTime;
    /**
     * 审核状态
     */
    @ExcelField("审核状态")
    private String status;
    /**
     * 封面
     */
    @ExcelField("图片附件")
    private String img;

}
