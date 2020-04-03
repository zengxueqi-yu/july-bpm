package com.july.bpm.entity.enums;

import com.july.bpm.exception.BnException;

/**
 * 是否启用枚举信息
 * @author zengxueqi
 * @since 2020/3/25
 */
public enum EnableEnum {

    /**
     * 启用
     */
    ENABLE(0, "启用"),
    /**
     * 禁用
     */
    DISENABLE(1, "禁用");


    private Integer value;
    private String desc;

    EnableEnum(Integer value, String desc) {
        this.value = value;
        this.desc = desc;
    }

    public Integer getValue() {
        return value;
    }

    @Override
    public String toString() {
        return "" + value;
    }

    public String getDesc() {
        return desc;
    }

    /**
     * 通过枚举value获取desc
     * @param value
     * @return java.lang.String
     * @author zengxueqi
     * @since 2020/3/25
     */
    public static String getDescByValue(Integer value) {
        for (EnableEnum flowStatusEnum : values()) {
            if (flowStatusEnum.getValue().equals(value)) {
                return flowStatusEnum.desc;
            }
        }
        throw BnException.on("value 值不存在:{0}", value);
    }

}
