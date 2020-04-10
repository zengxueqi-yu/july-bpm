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

 Date: 10/04/2020 18:49:25
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
INSERT INTO `bpm_flow` VALUES ('4ce08c32bcbab235fc6e6276e21b4f38', '新建流程', NULL, '1', NULL, '1', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_approve_group
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_approve_group`;
CREATE TABLE `bpm_flow_approve_group` (
  `id` varchar(32) NOT NULL COMMENT '流程审核组id',
  `flowId` varchar(32) DEFAULT NULL COMMENT '流程Id',
  `nodeId` varchar(32) DEFAULT NULL COMMENT '节点id',
  `approveGroup` varchar(1000) DEFAULT '1' COMMENT '流程审核人信息=>[{"id":"13","name":"一年级","parent":0},{"id":"14","name":"二年级","parent":0}]',
  `createTime` bigint(20) DEFAULT '0' COMMENT '数据的创建时间戳单位秒.',
  `updateTime` bigint(20) DEFAULT '0' COMMENT '数据的修改时间戳单位秒.',
  `deleted` tinyint(4) DEFAULT '0' COMMENT '逻辑删除标志1删除0未删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程节点审核组（审核人）';

-- ----------------------------
-- Records of bpm_flow_approve_group
-- ----------------------------
BEGIN;
INSERT INTO `bpm_flow_approve_group` VALUES ('19ca19419c2f57ec3609d547421d31be', '4ce08c32bcbab235fc6e6276e21b4f38', '7cd2b3b8cdc54beeafbe754697e851c6', '曾雪琪', 0, 0, 0);
INSERT INTO `bpm_flow_approve_group` VALUES ('24085f983348c1be69ef3b75dd1e465c', '4ce08c32bcbab235fc6e6276e21b4f38', '16a7304904e243c98abd771142bcf18a', '曾雪琪', 0, 0, 0);
INSERT INTO `bpm_flow_approve_group` VALUES ('2b87c213afe439ba200575009862aed0', '4ce08c32bcbab235fc6e6276e21b4f38', 'fef01f1df19a44ddb171a3db5f9099c7', '曾雪琪', 0, 0, 0);
INSERT INTO `bpm_flow_approve_group` VALUES ('42f18f51b97bae9d17bb868be251148d', '4ce08c32bcbab235fc6e6276e21b4f38', '35cba5b28ba24ee3a31ba668ee5463e5', '曾雪琪', 0, 0, 0);
INSERT INTO `bpm_flow_approve_group` VALUES ('6248beaf712b0c84e9d8ba569efd9a2f', '4ce08c32bcbab235fc6e6276e21b4f38', '23d257726b3a4dad82425887d0afc3b2', '曾妤曦', 0, 0, 0);
INSERT INTO `bpm_flow_approve_group` VALUES ('ac7fed24bfc85074dc4c5b90f86b64de', '4ce08c32bcbab235fc6e6276e21b4f38', '3949038a46334b00b09e919b870e20ba', '曾雪琪1', 0, 0, 0);
INSERT INTO `bpm_flow_approve_group` VALUES ('c1ea408636a280828ac62778cb188fcc', '4ce08c32bcbab235fc6e6276e21b4f38', 'e4c6e8329c8b4281b343edc44b98ccb8', '曾雪琪', 0, 0, 0);
INSERT INTO `bpm_flow_approve_group` VALUES ('e3b8dc7dc4651bd406d59856bda8bcfb', '4ce08c32bcbab235fc6e6276e21b4f38', 'cd168d81172746a18fe8e4dbf261a631', '曾雪琪', 0, 0, 0);
INSERT INTO `bpm_flow_approve_group` VALUES ('eae7280dbe418472765f5e13b966f075', '4ce08c32bcbab235fc6e6276e21b4f38', '8893dc6324bd47a891bf0f54a4bfd10f', '曾雪琪', 0, 0, 0);
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
INSERT INTO `bpm_flow_design` VALUES ('fb1d1770f10eefbf081bcec3cd5d6b54', '4ce08c32bcbab235fc6e6276e21b4f38', '{states:{rect11739c12e2ae4970bf98d0bc1a0d3fe7:{type:\'start\',text:{text:\'开始\'}, attr:{ x:409, y:10, width:50, height:50}, props:{node:{value:\'74996a3d7e994d45bb8c3bcd7523cd39\'},text:{value:\'开始\'},temp1:{value:\'31231\'},temp2:{value:\'\'}}},rect19ec82cc473045f68ecfded20c286daa:{type:\'task\',text:{text:\'行政登记\'}, attr:{ x:386, y:116, width:100, height:50}, props:{node:{value:\'8893dc6324bd47a891bf0f54a4bfd10f\'},text:{value:\'行政登记\'},assignee:{value:\'曾雪琪1\'},form:{value:\'申请表单1\'},desc:{value:\'教师申请入职后，行政部门登记信息\'}}},rect7e8e798b64954f71920944e9b88469b3:{type:\'fork\',text:{text:\'分支\'}, attr:{ x:410, y:209, width:50, height:50}, props:{node:{value:\'6a89e81f76cc475398a6273a4552db23\'},text:{value:\'分支\'},temp1:{value:\'\'},temp2:{value:\'\'}}},rectdfff9b10ddef4ef8b33ad3cca59cc63b:{type:\'task\',text:{text:\'部门经理审核\'}, attr:{ x:192, y:317, width:100, height:50}, props:{node:{value:\'节点\'},text:{value:\'部门经理审核\'},assignee:{value:\'\'},form:{value:\'\'},desc:{value:\'\'}}},rect0b02054f74b542328d3a61a665c1eeb5:{type:\'task\',text:{text:\'项目总监批准\'}, attr:{ x:385, y:317, width:100, height:50}, props:{node:{value:\'节点\'},text:{value:\'项目总监批准\'},assignee:{value:\'\'},form:{value:\'\'},desc:{value:\'\'}}},rect7ef8b63b71fa4d488059f68b51c0e286:{type:\'task\',text:{text:\'总经理审核\'}, attr:{ x:556, y:320, width:100, height:50}, props:{node:{value:\'节点\'},text:{value:\'总经理审核\'},assignee:{value:\'\'},form:{value:\'\'},desc:{value:\'\'}}},rectca7015e455aa44a89e8daf39e75d5f8d:{type:\'join\',text:{text:\'合并\'}, attr:{ x:410, y:416, width:50, height:50}, props:{node:{value:\'节点\'},text:{value:\'合并\'},temp1:{value:\'\'},temp2:{value:\'\'}}},rectbdd4eebc0b7e442bae1841b8949285cb:{type:\'end\',text:{text:\'结束\'}, attr:{ x:409, y:633, width:50, height:50}, props:{node:{value:\'节点\'},text:{value:\'结束\'},temp1:{value:\'\'},temp2:{value:\'\'}}},rect93ae9f39e28d4ac58040dfb5f13b555c:{type:\'task\',text:{text:\'总裁批准\'}, attr:{ x:384, y:528, width:100, height:50}, props:{node:{value:\'节点\'},text:{value:\'总裁批准\'},assignee:{value:\'\'},form:{value:\'\'},desc:{value:\'\'}}}},paths:{path4931cc86bd00419e8304a2ce2277a63d:{from:\'rect11739c12e2ae4970bf98d0bc1a0d3fe7\',to:\'rect19ec82cc473045f68ecfded20c286daa\', dots:[],text:{text:\'TO 任务1\'},textPos:{x:37,y:-4}, props:{text:{value:\'\'}}},path6ff0ffd9cc8c43668cd876905d9da723:{from:\'rect19ec82cc473045f68ecfded20c286daa\',to:\'rect7e8e798b64954f71920944e9b88469b3\', dots:[],text:{text:\'TO 分支\'},textPos:{x:56,y:-1}, props:{text:{value:\'\'}}},path9435e7ffa014442993752adc905757ab:{from:\'rect7e8e798b64954f71920944e9b88469b3\',to:\'rect0b02054f74b542328d3a61a665c1eeb5\', dots:[],text:{text:\'TO 任务3\'},textPos:{x:24,y:-5}, props:{text:{value:\'\'}}},path3c28ec6b235447f39a69b42cb633c7c9:{from:\'rect0b02054f74b542328d3a61a665c1eeb5\',to:\'rectca7015e455aa44a89e8daf39e75d5f8d\', dots:[],text:{text:\'TO 合并\'},textPos:{x:41,y:8}, props:{text:{value:\'\'}}},pathf8f682e39c9747b8839892dc80045971:{from:\'rectca7015e455aa44a89e8daf39e75d5f8d\',to:\'rect93ae9f39e28d4ac58040dfb5f13b555c\', dots:[],text:{text:\'TO 任务5\'},textPos:{x:36,y:-5}, props:{text:{value:\'\'}}},path33657cc811ec46679f01dfcd4074b80c:{from:\'rect93ae9f39e28d4ac58040dfb5f13b555c\',to:\'rectbdd4eebc0b7e442bae1841b8949285cb\', dots:[],text:{text:\'TO 结束\'},textPos:{x:32,y:0}, props:{text:{value:\'\'}}},path5271f9ae82ea45ed88e07844601df597:{from:\'rect7e8e798b64954f71920944e9b88469b3\',to:\'rectdfff9b10ddef4ef8b33ad3cca59cc63b\', dots:[{x:244,y:232}],text:{text:\'TO 任务2\'},textPos:{x:0,y:-10}, props:{text:{value:\'TO 任务2\'}}},path25b9fd8ae0ac4922adf81e757ca662f9:{from:\'rectdfff9b10ddef4ef8b33ad3cca59cc63b\',to:\'rectca7015e455aa44a89e8daf39e75d5f8d\', dots:[{x:242,y:435}],text:{text:\'TO 合并\'},textPos:{x:-3,y:17}, props:{text:{value:\'TO 合并\'}}},path09308bbae1c44ee3a8ee1905aaf64647:{from:\'rect7e8e798b64954f71920944e9b88469b3\',to:\'rect7ef8b63b71fa4d488059f68b51c0e286\', dots:[{x:607,y:234}],text:{text:\'TO 任务4\'},textPos:{x:0,y:-10}, props:{text:{value:\'TO 任务4\'}}},path14fc989a49f6436ab2254523907d61d6:{from:\'rect7ef8b63b71fa4d488059f68b51c0e286\',to:\'rectca7015e455aa44a89e8daf39e75d5f8d\', dots:[{x:607,y:439}],text:{text:\'TO 合并\'},textPos:{x:-8,y:16}, props:{text:{value:\'TO 合并\'}}}},props:{props:{name:{value:\'新建流程\'},key:{value:\'\'},desc:{value:\'\'}}}}', NULL, NULL, 1586507955, NULL);
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_form
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_form`;
CREATE TABLE `bpm_flow_form` (
  `id` varchar(32) NOT NULL COMMENT '表单id',
  `formType` varchar(255) DEFAULT NULL COMMENT '表单类型',
  `formJson` text COMMENT '表单信息',
  `createTime` bigint(20) DEFAULT NULL,
  `updateTime` bigint(20) DEFAULT NULL,
  `deleted` int(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程表单信息';

-- ----------------------------
-- Records of bpm_flow_form
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_form_group
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_form_group`;
CREATE TABLE `bpm_flow_form_group` (
  `id` varchar(32) NOT NULL COMMENT '流程表单组id',
  `formId` varchar(32) DEFAULT NULL COMMENT '流程表单id',
  `createTime` bigint(20) DEFAULT NULL,
  `updateTime` bigint(20) DEFAULT NULL,
  `deleted` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程表单组=>对应每个节点';

-- ----------------------------
-- Records of bpm_flow_form_group
-- ----------------------------
BEGIN;
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
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_node_form
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_node_form`;
CREATE TABLE `bpm_flow_node_form` (
  `id` varchar(32) NOT NULL COMMENT '节点表单组id',
  `nodeId` varchar(32) DEFAULT NULL COMMENT '节点id',
  `formGroupId` varchar(32) DEFAULT NULL COMMENT '表单组id',
  `createTime` bigint(20) DEFAULT NULL,
  `updateTime` bigint(20) DEFAULT NULL,
  `deleted` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='节点表单组表';

-- ----------------------------
-- Records of bpm_flow_node_form
-- ----------------------------
BEGIN;
INSERT INTO `bpm_flow_node_form` VALUES ('14d6b8035e0401096561b238fcc59462', '23d257726b3a4dad82425887d0afc3b2', '申请表单', NULL, NULL, NULL);
INSERT INTO `bpm_flow_node_form` VALUES ('166857456d75e29a8b5cca7c076f3a55', 'cd168d81172746a18fe8e4dbf261a631', '申请表单', NULL, NULL, NULL);
INSERT INTO `bpm_flow_node_form` VALUES ('30bed83e13c39b303209cbd97ef62117', '16a7304904e243c98abd771142bcf18a', '申请表单1', NULL, NULL, NULL);
INSERT INTO `bpm_flow_node_form` VALUES ('6ee6c5e3951eab99fbd1255ea824ef7f', 'fef01f1df19a44ddb171a3db5f9099c7', '申请表单', NULL, NULL, NULL);
INSERT INTO `bpm_flow_node_form` VALUES ('78f15477dfa4c1ba7128403fac1ef76c', '8893dc6324bd47a891bf0f54a4bfd10f', '申请表单', NULL, NULL, NULL);
INSERT INTO `bpm_flow_node_form` VALUES ('7b9d71cd3034d9bf925bf300cc442b60', 'e4c6e8329c8b4281b343edc44b98ccb8', '申请表单1', NULL, NULL, NULL);
INSERT INTO `bpm_flow_node_form` VALUES ('d64f54fecd7011c260c23c69ea29931b', '35cba5b28ba24ee3a31ba668ee5463e5', '申请表单', NULL, NULL, NULL);
INSERT INTO `bpm_flow_node_form` VALUES ('da341266b7a89fe74211f415296fa423', '7cd2b3b8cdc54beeafbe754697e851c6', '申请表单1', NULL, NULL, NULL);
INSERT INTO `bpm_flow_node_form` VALUES ('ee3574cd473d854060151ef970b4edc6', '3949038a46334b00b09e919b870e20ba', '申请表单1', NULL, NULL, NULL);
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
-- Table structure for bpm_flow_table_zdine
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_table_zdine`;
CREATE TABLE `bpm_flow_table_zdine` (
  `id` varchar(32) DEFAULT NULL COMMENT '自定义表id',
  `tableName` varchar(255) DEFAULT NULL COMMENT '表名',
  `desc` varchar(1000) DEFAULT NULL COMMENT '备注',
  `tableAlias` varchar(255) DEFAULT NULL COMMENT '表别名',
  `createTime` bigint(20) DEFAULT NULL,
  `updateTime` bigint(20) DEFAULT NULL,
  `deleted` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程自定义业务表';

-- ----------------------------
-- Records of bpm_flow_table_zdine
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
  `approveGroupId` varchar(32) DEFAULT NULL COMMENT '流程审核组id，用于查找该节点的所有审核人',
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
INSERT INTO `bpm_flow_task_node` VALUES ('16a7304904e243c98abd771142bcf18a', '4ce08c32bcbab235fc6e6276e21b4f38', '24085f983348c1be69ef3b75dd1e465c', '行政登记', NULL, NULL, '教师申请入职后，行政部门登记信息', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('23d257726b3a4dad82425887d0afc3b2', '4ce08c32bcbab235fc6e6276e21b4f38', '6248beaf712b0c84e9d8ba569efd9a2f', '行政登记', NULL, NULL, '教师申请入职后，行政部门登记信息', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('35cba5b28ba24ee3a31ba668ee5463e5', '4ce08c32bcbab235fc6e6276e21b4f38', '42f18f51b97bae9d17bb868be251148d', '行政登记', NULL, NULL, '教师申请入职后，行政部门登记信息', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('3949038a46334b00b09e919b870e20ba', '4ce08c32bcbab235fc6e6276e21b4f38', 'ac7fed24bfc85074dc4c5b90f86b64de', '行政登记', NULL, NULL, '教师申请入职后，行政部门登记信息', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('7cd2b3b8cdc54beeafbe754697e851c6', '4ce08c32bcbab235fc6e6276e21b4f38', '19ca19419c2f57ec3609d547421d31be', '行政登记', NULL, NULL, '教师申请入职后，行政部门登记信息', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('8893dc6324bd47a891bf0f54a4bfd10f', '4ce08c32bcbab235fc6e6276e21b4f38', 'eae7280dbe418472765f5e13b966f075', '行政登记', NULL, NULL, '教师申请入职后，行政部门登记信息', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('cd168d81172746a18fe8e4dbf261a631', '4ce08c32bcbab235fc6e6276e21b4f38', 'e3b8dc7dc4651bd406d59856bda8bcfb', '行政登记', NULL, NULL, '教师申请入职后，行政部门登记信息', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('e4c6e8329c8b4281b343edc44b98ccb8', '4ce08c32bcbab235fc6e6276e21b4f38', 'c1ea408636a280828ac62778cb188fcc', '行政登记', NULL, NULL, '教师申请入职后，行政部门登记信息', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `bpm_flow_task_node` VALUES ('fef01f1df19a44ddb171a3db5f9099c7', '4ce08c32bcbab235fc6e6276e21b4f38', '2b87c213afe439ba200575009862aed0', '行政登记', NULL, NULL, '教师申请入职后，行政部门登记信息', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);
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
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
