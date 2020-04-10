package com.july.bpm.entity.enums;

import com.july.bpm.exception.BnException;

/**
 * 节点枚举信息
 * @author zengxueqi
 * @since 2020/3/25
 */
public enum NodeEnum {

    /**
     * 主流程
     */
    ROOT("root", "主流程"),
    /**
     * 开始节点
     */
    START("start", "开始节点"),
    /**
     * 结束节点
     */
    END("end", "结束节点"),
    /**
     * 任务节点
     */
    TASK("task", "任务节点"),
    /**
     * 分支
     */
    FORK("fork", "分支"),
    /**
     * 合并
     */
    JOIN("join", "合并");


    private String value;
    private String desc;

    NodeEnum(String value, String desc) {
        this.value = value;
        this.desc = desc;
    }

    public String getValue() {
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
        for (NodeEnum flowStatusEnum : values()) {
            if (flowStatusEnum.getValue().equals(value)) {
                return flowStatusEnum.desc;
            }
        }
        throw BnException.on("value 值不存在:{0}", value);
    }

}
