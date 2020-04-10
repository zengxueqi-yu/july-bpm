package com.july.bpm.entity.enums;

import com.july.bpm.exception.BnException;

/**
 * 是否启用枚举信息
 * @author zengxueqi
 * @since 2020/3/25
 */
public enum NodePropertyEnum {

    /**
     * 节点
     */
    KEY("key", "流程标识"),
    /**
     * 节点
     */
    NODEID("node", "节点"),
    /**
     * 节点名称
     */
    NODENAME("text", "节点名称"),
    /**
     * 节点审核用户
     */
    APPROVER("assignee","用户"),
    /**
     * 表单组信息
     */
    FORM("form","表单"),
    /**
     * 节点描述
     */
    NODEDESC("desc","节点描述");

    private String value;
    private String desc;

    NodePropertyEnum(String value, String desc) {
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
        for (NodePropertyEnum flowStatusEnum : values()) {
            if (flowStatusEnum.getValue().equals(value)) {
                return flowStatusEnum.desc;
            }
        }
        throw BnException.on("value 值不存在:{0}", value);
    }

}
