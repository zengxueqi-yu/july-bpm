package com.july.bpm.entity;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import com.july.bpm.utils.DateUtil;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * 基础类
 * @author zengxueqi
 * @program julybpm
 * @since 2020-04-03 15:07
 **/
@Setter
@Getter
@ToString
@Accessors(chain = true)
public class BaseEntity implements Serializable {

    private static final long serialVersionUID = 8302804005483099889L;

    /**
     * 更新数据的时间(秒)
     */
    @TableField(value = "updateTime", fill = FieldFill.INSERT_UPDATE)
    private Long updatedTime;
    /**
     * 创建数据的时间(秒)
     */
    @TableField(value = "createTime", fill = FieldFill.INSERT)
    private Long createdTime;

    /**
     * 获取时间类型的修改时间
     * @return 时间类型的修改时间
     */
    public LocalDateTime updatedTime() {
        if (updatedTime != null) {
            return DateUtil.toLocalDateTime(updatedTime);
        }
        return null;
    }

    /**
     * 把日期时间转换为Long整形的秒
     * @param updatedTime 日期时间
     */
    public void updatedTime(LocalDateTime updatedTime) {
        this.updatedTime = DateUtil.toLong(updatedTime);
    }

    /**
     * 获取时间类型的创建时间
     * @return 创建时间
     */
    public LocalDateTime createdTime() {
        if (createdTime != null) {
            return DateUtil.toLocalDateTime(createdTime);
        }
        return null;
    }

    /**
     * 把日期时间转换为Long整形的秒
     * @param createdTime 日期时间
     */
    public void createdTime(LocalDateTime createdTime) {
        this.createdTime = DateUtil.toLong(createdTime);
    }
}
