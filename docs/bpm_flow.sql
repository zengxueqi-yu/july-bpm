/*
 Navicat Premium Data Transfer

 Source Server         : 192.168.3.99
 Source Server Type    : MySQL
 Source Server Version : 50635
 Source Host           : 192.168.3.99:3306
 Source Schema         : bpm_flow

 Target Server Type    : MySQL
 Target Server Version : 50635
 File Encoding         : 65001

 Date: 03/04/2020 19:16:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for bpm_flow
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow`;
CREATE TABLE `bpm_flow` (
  `id` varchar(32) NOT NULL COMMENT '流程id',
  `flowName` varchar(255) DEFAULT NULL COMMENT '流程名称',
  `projectId` varchar(32) DEFAULT NULL COMMENT '授权项目id',
  `flowIdentical` varchar(255) DEFAULT NULL COMMENT '流程标识',
  `flowStatus` int(5) DEFAULT NULL COMMENT '流程状态（是否禁用）',
  `remark` varchar(1000) DEFAULT NULL COMMENT '流程描述',
  `createTime` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `updateTime` bigint(20) DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程信息表';

-- ----------------------------
-- Records of bpm_flow
-- ----------------------------
BEGIN;
INSERT INTO `bpm_flow` VALUES ('4ce08c32bcbab235fc6e6276e21b4f38', '请假申请流程', NULL, 'LEAVE', NULL, '用于测试的请假申请流程', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_authority
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_authority`;
CREATE TABLE `bpm_flow_authority` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `queueId` bigint(20) DEFAULT NULL COMMENT '流程组节点id',
  `flowId` bigint(20) unsigned DEFAULT NULL COMMENT '审核流程Id',
  `approverName` varchar(32) DEFAULT NULL COMMENT '审核人姓名',
  `approverId` bigint(20) DEFAULT NULL COMMENT '审核人id',
  `approverRef` bigint(20) DEFAULT NULL COMMENT '审核人关联其他信息',
  `createTime` bigint(20) DEFAULT '0' COMMENT '数据的创建时间戳单位秒.',
  `updateTime` bigint(20) DEFAULT '0' COMMENT '数据的修改时间戳单位秒.',
  `status` tinyint(4) DEFAULT '0' COMMENT '是否禁用（0=启动，1=禁用）',
  `approverType` int(10) DEFAULT NULL COMMENT '审核人类型（eg：0=机构用户，1=教师）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COMMENT='流程审核人明细表（队列表拆出来的每个人）';

-- ----------------------------
-- Records of bpm_flow_authority
-- ----------------------------
BEGIN;
INSERT INTO `bpm_flow_authority` VALUES (1, 1, 1, '曾雪琪', 285, NULL, 1585214164, 1585214164, 0, 1);
INSERT INTO `bpm_flow_authority` VALUES (2, 1, 1, '曾妤曦', 169, NULL, 1585214164, 1585214164, 0, 1);
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_decision
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_decision`;
CREATE TABLE `bpm_flow_decision` (
  `id` bigint(20) NOT NULL,
  `flowId` varbinary(20) DEFAULT NULL COMMENT '流程编号',
  `descName` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '分支名称',
  `createTime` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `createUserId` bigint(20) DEFAULT NULL COMMENT '创建人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of bpm_flow_decision
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_design
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_design`;
CREATE TABLE `bpm_flow_design` (
  `id` varchar(32) NOT NULL COMMENT '流程图id',
  `flowId` varchar(32) DEFAULT NULL COMMENT '流程id',
  `flowJson` text COMMENT '流程图配置信息',
  `createTime` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `createUserId` bigint(20) DEFAULT NULL COMMENT '创建人',
  `updateTime` bigint(20) DEFAULT NULL COMMENT '修改时间',
  `updateUserId` varchar(32) DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程图设计表';

-- ----------------------------
-- Records of bpm_flow_design
-- ----------------------------
BEGIN;
INSERT INTO `bpm_flow_design` VALUES ('fb1d1770f10eefbf081bcec3cd5d6b54', '4ce08c32bcbab235fc6e6276e21b4f38', '{states:{rect826f7a5902d345ebb8503cad76e2225d:{type:\'start\',ID:\'9a3835afa62842dcb69a4a991f1dde4f\',text:{text:\'开始\'}, attr:{ x:353, y:39, width:50, height:50}},rect0346033d702c4feba6155cf816070d2b:{type:\'task\',ID:\'6b246af0637c4a41884573f585f2fef0\',text:{text:\'任务1\'}, attr:{ x:329, y:163, width:100, height:50}},rect23006ba99d944bbcac0cb8b30c68b97c:{type:\'task\',ID:\'ac043ee6f6c84f79899c5ffa4c6a8bfe\',text:{text:\'任务\'}, attr:{ x:330, y:288, width:100, height:50}},rect910b2f7a09f5459da5676bc9c876eda0:{type:\'end\',ID:\'2211e5d9cce6404c8a214a7e9d34a666\',text:{text:\'结束\'}, attr:{ x:356, y:426, width:50, height:50}}},paths:{patha204811d786f4f85921ba33b0c72ca38:{lineID:\'\',from:\'rect826f7a5902d345ebb8503cad76e2225d\',to:\'rect0346033d702c4feba6155cf816070d2b\', dots:[],text:{text:\'\',textPos:{x:0,y:-10}}, props:{text:{value:\'\'}}},path47acd756bba446068921f2dcb5daed6c:{lineID:\'\',from:\'rect0346033d702c4feba6155cf816070d2b\',to:\'rect23006ba99d944bbcac0cb8b30c68b97c\', dots:[],text:{text:\'\',textPos:{x:0,y:-10}}, props:{text:{value:\'测试\'}}},pathd069ea0a5bbe45078ce92818bd4bcfb1:{lineID:\'\',from:\'rect23006ba99d944bbcac0cb8b30c68b97c\',to:\'rect910b2f7a09f5459da5676bc9c876eda0\', dots:[],text:{text:\'\',textPos:{x:0,y:-10}}, props:{text:{value:\'\'}}}}}', NULL, NULL, 1585907828, NULL);
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_line
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_line`;
CREATE TABLE `bpm_flow_line` (
  `id` varchar(32) NOT NULL COMMENT '流程线id',
  `flowId` varchar(32) DEFAULT NULL COMMENT '流程id',
  `startNodeId` varchar(32) DEFAULT NULL COMMENT '流程开始节点id',
  `endNodeId` varchar(32) DEFAULT NULL COMMENT '流程结束节点id',
  `createTime` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `updateTime` bigint(20) DEFAULT NULL COMMENT '更新时间',
  `status` int(10) DEFAULT '0' COMMENT '禁用状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程连线表';

-- ----------------------------
-- Records of bpm_flow_line
-- ----------------------------
BEGIN;
INSERT INTO `bpm_flow_line` VALUES ('47acd756bba446068921f2dcb5daed6c', '4ce08c32bcbab235fc6e6276e21b4f38', '0346033d702c4feba6155cf816070d2b', '23006ba99d944bbcac0cb8b30c68b97c', NULL, NULL, 0);
INSERT INTO `bpm_flow_line` VALUES ('a204811d786f4f85921ba33b0c72ca38', '4ce08c32bcbab235fc6e6276e21b4f38', '826f7a5902d345ebb8503cad76e2225d', '0346033d702c4feba6155cf816070d2b', NULL, NULL, 0);
INSERT INTO `bpm_flow_line` VALUES ('d069ea0a5bbe45078ce92818bd4bcfb1', '4ce08c32bcbab235fc6e6276e21b4f38', '23006ba99d944bbcac0cb8b30c68b97c', '910b2f7a09f5459da5676bc9c876eda0', NULL, NULL, 0);
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_param
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_param`;
CREATE TABLE `bpm_flow_param` (
  `id` bigint(20) NOT NULL COMMENT '流程参数id',
  `paramName` varchar(255) DEFAULT NULL COMMENT '参数名',
  `paramCode` varchar(255) DEFAULT NULL COMMENT '参数变量名',
  `paramType` varchar(255) DEFAULT NULL COMMENT '参数类型',
  `createTime` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `createUserId` bigint(20) DEFAULT NULL COMMENT '创建人',
  `updateTime` bigint(20) DEFAULT NULL COMMENT '修改时间',
  `updateUserId` bigint(20) DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程参数表（用于控制流程走向）';

-- ----------------------------
-- Records of bpm_flow_param
-- ----------------------------
BEGIN;
INSERT INTO `bpm_flow_param` VALUES (1, '请假时长', 'applyProTime', 'int', 1585798234, 285, 1585798234, 285);
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_project
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_project`;
CREATE TABLE `bpm_flow_project` (
  `id` varchar(32) NOT NULL COMMENT '项目授权id',
  `projecName` varchar(255) DEFAULT NULL COMMENT '项目名称',
  `createTime` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `updateTime` bigint(20) DEFAULT NULL COMMENT '修改时间',
  `status` int(10) DEFAULT NULL COMMENT '是否禁用（0=启用，1=禁用）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程授权项目表（授权的项目才能使用流程引擎）';

-- ----------------------------
-- Records of bpm_flow_project
-- ----------------------------
BEGIN;
INSERT INTO `bpm_flow_project` VALUES ('1', '书香项目', 1585798234, 1585798234, 0);
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_queue
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_queue`;
CREATE TABLE `bpm_flow_queue` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `type` tinyint(4) DEFAULT NULL COMMENT '选择人类型（0=部门，1=职务，2 =机构，3=教师）',
  `subjectId` bigint(20) DEFAULT NULL COMMENT '选择对象id',
  `subjectName` varchar(32) DEFAULT NULL COMMENT '选择对象名称',
  `relateTeachd` tinyint(4) DEFAULT '0' COMMENT '关联任教年级后只能审核当前年级教师的申请 0 不关联1关联',
  `searchCombine` text COMMENT '用户选择对象所有组合，比如选择[一年级 一班 xxx老师] 每个选择流程对象id,根据对象定义产生不同类型组合'',',
  `createTime` bigint(20) DEFAULT '0' COMMENT '数据的创建时间戳单位秒.',
  `updateTime` bigint(20) DEFAULT '0' COMMENT '数据的修改时间戳单位秒.',
  `status` tinyint(4) DEFAULT '0' COMMENT '禁用状态（0=启用，1=禁用）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='流程审核人队列表';

-- ----------------------------
-- Records of bpm_flow_queue
-- ----------------------------
BEGIN;
INSERT INTO `bpm_flow_queue` VALUES (1, 0, 1, '研发部', 0, '[{\"id\":\"1\",\"name\":\"研发部\"}]', 1585214164, 1585214164, 0);
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_runtime_instance
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_runtime_instance`;
CREATE TABLE `bpm_flow_runtime_instance` (
  `id` varchar(32) NOT NULL COMMENT '流程实例id',
  `flowId` varchar(32) DEFAULT NULL COMMENT '流程id',
  `dataId` varchar(32) DEFAULT NULL COMMENT '业务id',
  `approveProcessId` varchar(32) DEFAULT NULL COMMENT '审核进度id',
  `approveId` varchar(32) DEFAULT NULL COMMENT '当前审核id',
  `approveStatus` int(10) DEFAULT NULL COMMENT '审核状态',
  `flowIdentical` varchar(255) DEFAULT NULL COMMENT '流程标识',
  `version` int(10) DEFAULT NULL COMMENT '版本号',
  `boolEnd` int(10) DEFAULT NULL COMMENT '是否完成',
  `flowTopic` varchar(255) DEFAULT NULL COMMENT '流程标题（曾雪琪的请假申请流程）',
  `nodeId` varchar(32) DEFAULT NULL COMMENT '审核节点id',
  `boolUrgent` int(10) DEFAULT NULL COMMENT '是否紧急',
  `createUserId` varchar(32) DEFAULT NULL COMMENT '创建人',
  `createTime` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `updateTime` bigint(20) DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程实例表（一个申请一条数据）';

-- ----------------------------
-- Records of bpm_flow_runtime_instance
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_runtime_node
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_runtime_node`;
CREATE TABLE `bpm_flow_runtime_node` (
  `id` varchar(32) NOT NULL COMMENT '流程运行节点id',
  `flowId` varchar(32) DEFAULT NULL COMMENT '流程id',
  `dataId` varchar(32) DEFAULT NULL COMMENT '业务id',
  `nodeId` varchar(32) DEFAULT NULL COMMENT '节点id',
  `nodeStatus` int(10) DEFAULT NULL COMMENT '节点状态',
  `commitType` int(10) DEFAULT NULL COMMENT '提交类型',
  `backNodeId` varchar(32) DEFAULT NULL COMMENT '返回节点Id',
  `flowIdentical` varchar(255) DEFAULT NULL COMMENT '流程标识',
  `instanceId` varchar(32) DEFAULT NULL COMMENT '流程实例Id',
  `handleTime` bigint(20) DEFAULT NULL COMMENT '处理时间',
  `createTime` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `updateTime` bigint(20) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程运行节点表';

-- ----------------------------
-- Records of bpm_flow_runtime_node
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_runtime_node_user
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_runtime_node_user`;
CREATE TABLE `bpm_flow_runtime_node_user` (
  `id` varchar(32) NOT NULL COMMENT '流程审核人审核id',
  `runtimeNodeId` varchar(32) DEFAULT NULL COMMENT '流程审核节点id',
  `dataId` varchar(32) DEFAULT NULL COMMENT '业务id',
  `flowId` varchar(32) DEFAULT NULL COMMENT '流程id',
  `nodeId` varchar(32) DEFAULT NULL COMMENT '节点id',
  `approveStatus` int(10) DEFAULT NULL COMMENT '审核状态',
  `approverId` varchar(32) DEFAULT NULL COMMENT '审核人id',
  `workStatus` int(10) DEFAULT NULL COMMENT '处理状态',
  `workUserId` varchar(32) DEFAULT NULL COMMENT '处理人id',
  `flowIdentical` varchar(255) DEFAULT NULL COMMENT '流程标识',
  `instanceId` varchar(32) DEFAULT NULL COMMENT '流程实例id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程运行节点人员表';

-- ----------------------------
-- Records of bpm_flow_runtime_node_user
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_task_node
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_task_node`;
CREATE TABLE `bpm_flow_task_node` (
  `id` varchar(50) CHARACTER SET utf8 NOT NULL,
  `flowId` varchar(32) CHARACTER SET utf8 DEFAULT NULL,
  `nodeName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `transitionMaker` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `checkType` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `nodeType` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `sort` decimal(11,0) DEFAULT NULL,
  `usersMaker` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `nextNodeMaker` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `params` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ssrole` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL,
  `autoBackTask` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ssUser` varchar(2000) CHARACTER SET utf8 DEFAULT NULL,
  `ssType` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ssCode` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `timeReq` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '是否有办理时限要求',
  `timeLimit` decimal(10,0) DEFAULT NULL COMMENT '办理时限',
  `taskNode` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '任务节点',
  `status` int(10) DEFAULT '0' COMMENT '是否禁用（0=启用，1=禁用）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程节点表';

-- ----------------------------
-- Records of bpm_flow_task_node
-- ----------------------------
BEGIN;
INSERT INTO `bpm_flow_task_node` VALUES ('0346033d702c4feba6155cf816070d2b', '4ce08c32bcbab235fc6e6276e21b4f38', '任务', NULL, '1', NULL, 'task', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1);
INSERT INTO `bpm_flow_task_node` VALUES ('17ba902731f949c7922166277d9d20fe', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('23006ba99d944bbcac0cb8b30c68b97c', '4ce08c32bcbab235fc6e6276e21b4f38', '任务', NULL, '1', NULL, 'task', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('4f216633f04b4d93aa43f071728d4361', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('500d043b8a39498eb341dd3335e0599a', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('5076534846cc4917b06743057585a9f8', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('67a07c79f2f74a09b5f3273d185c2ba6', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('826f7a5902d345ebb8503cad76e2225d', '4ce08c32bcbab235fc6e6276e21b4f38', '开始', NULL, '1', NULL, 'start', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('910b2f7a09f5459da5676bc9c876eda0', '4ce08c32bcbab235fc6e6276e21b4f38', '结束', NULL, '1', NULL, 'end', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('948fe45072f64c5b992f9a8fc8c959f6', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('b1b390fbed1b45da865ec5abe44d75df', '4ce08c32bcbab235fc6e6276e21b4f38', '任务', NULL, '1', NULL, 'task', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('b335fed22c834bc98f0b8f1692ef44cc', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('e387b8ed769748c29cce04c3d8c08910', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_transition
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_transition`;
CREATE TABLE `bpm_flow_transition` (
  `id` varchar(32) NOT NULL,
  `flowId` varchar(32) DEFAULT NULL,
  `nodeId` varchar(32) DEFAULT NULL,
  `transitionCode` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `transitionName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `passNodeId` varchar(32) DEFAULT NULL,
  `notPassNodeId` varchar(32) DEFAULT NULL,
  `createTime` bigint(20) DEFAULT NULL,
  `updateTime` bigint(20) DEFAULT NULL,
  `passNodeType` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `status` int(10) DEFAULT NULL COMMENT '是否禁用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程节点转换表';

-- ----------------------------
-- Records of bpm_flow_transition
-- ----------------------------
BEGIN;
INSERT INTO `bpm_flow_transition` VALUES ('1bf2374e5690dc016ceb6b0a54b50dc3', '4ce08c32bcbab235fc6e6276e21b4f38', '23006ba99d944bbcac0cb8b30c68b97c', '', '', NULL, '910b2f7a09f5459da5676bc9c876eda0', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `bpm_flow_transition` VALUES ('5953f18d2bf4e980282937daff222cdc', '4ce08c32bcbab235fc6e6276e21b4f38', '0346033d702c4feba6155cf816070d2b', '', '', NULL, '23006ba99d944bbcac0cb8b30c68b97c', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `bpm_flow_transition` VALUES ('83cd08c97e74fc726739a572bfd5cddb', '4ce08c32bcbab235fc6e6276e21b4f38', '826f7a5902d345ebb8503cad76e2225d', '', '', NULL, '0346033d702c4feba6155cf816070d2b', NULL, NULL, NULL, NULL, NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
