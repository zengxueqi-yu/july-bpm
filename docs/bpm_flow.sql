/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 50728
 Source Host           : localhost:3306
 Source Schema         : bpm_flow

 Target Server Type    : MySQL
 Target Server Version : 50728
 File Encoding         : 65001

 Date: 07/04/2020 22:37:37
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
-- Table structure for bpm_flow_approve_group
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_approve_group`;
CREATE TABLE `bpm_flow_approve_group` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '流程审核组id',
  `flowId` bigint(20) DEFAULT NULL COMMENT '流程Id',
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
INSERT INTO `bpm_flow_design` VALUES ('fb1d1770f10eefbf081bcec3cd5d6b54', '4ce08c32bcbab235fc6e6276e21b4f38', '{states:{rect270cc395ea6f4986833b7d504b7d2ced:{type:\'start\',text:{text:\'开始\'}, attr:{ x:409, y:10, width:50, height:50}, props:{text:{value:\'开始\'},temp1:{value:\'31231\'},temp2:{value:\'\'}}},rect3852579782a94f189c76fdc4a27300d5:{type:\'task\',text:{text:\'行政登记\'}, attr:{ x:386, y:116, width:100, height:50}, props:{text:{value:\'行政登记\'},assignee:{value:\'曾雪琪\'},form:{value:\'曾雪琪\'},desc:{value:\'曾雪琪\'}}},rect7b55aa13fcf949548e9fa7b28515698e:{type:\'fork\',text:{text:\'分支\'}, attr:{ x:410, y:209, width:50, height:50}, props:{text:{value:\'分支\'},temp1:{value:\'\'},temp2:{value:\'\'}}},rect07537dc026be40eea907537554333636:{type:\'task\',text:{text:\'部门经理审核\'}, attr:{ x:192, y:317, width:100, height:50}, props:{text:{value:\'部门经理审核\'},assignee:{value:\'\'},form:{value:\'\'},desc:{value:\'\'}}},rect3dbd7d6b2fbb4ffc92c61cf76c8ea1b0:{type:\'task\',text:{text:\'项目总监批准\'}, attr:{ x:385, y:317, width:100, height:50}, props:{text:{value:\'项目总监批准\'},assignee:{value:\'\'},form:{value:\'\'},desc:{value:\'\'}}},rect51dae99bfafc42c3b6759bb9620de653:{type:\'task\',text:{text:\'总经理审核\'}, attr:{ x:556, y:320, width:100, height:50}, props:{text:{value:\'总经理审核\'},assignee:{value:\'\'},form:{value:\'\'},desc:{value:\'\'}}},rectab880b8366744646848feccc446cfff2:{type:\'join\',text:{text:\'合并\'}, attr:{ x:410, y:416, width:50, height:50}, props:{text:{value:\'合并\'},temp1:{value:\'\'},temp2:{value:\'\'}}},rect2c4c83074e7b478fbe3257d993cf764b:{type:\'end\',text:{text:\'结束\'}, attr:{ x:409, y:633, width:50, height:50}, props:{text:{value:\'结束\'},temp1:{value:\'\'},temp2:{value:\'\'}}},rectaf587229d8104a47802b6bd6d3c77f62:{type:\'task\',text:{text:\'总裁批准\'}, attr:{ x:384, y:528, width:100, height:50}, props:{text:{value:\'总裁批准\'},assignee:{value:\'\'},form:{value:\'\'},desc:{value:\'\'}}}},paths:{path17b380d97bd444799b04d3ee444c7220:{from:\'rect270cc395ea6f4986833b7d504b7d2ced\',to:\'rect3852579782a94f189c76fdc4a27300d5\', dots:[],text:{text:\'TO 任务1\'},textPos:{x:37,y:-4}, props:{text:{value:\'\'}}},pathe3ef1284df33409aa70040bb0d065318:{from:\'rect3852579782a94f189c76fdc4a27300d5\',to:\'rect7b55aa13fcf949548e9fa7b28515698e\', dots:[],text:{text:\'TO 分支\'},textPos:{x:56,y:-1}, props:{text:{value:\'\'}}},path3a2b6d1ce2574287a8e6a1ebe338eccc:{from:\'rect7b55aa13fcf949548e9fa7b28515698e\',to:\'rect3dbd7d6b2fbb4ffc92c61cf76c8ea1b0\', dots:[],text:{text:\'TO 任务3\'},textPos:{x:24,y:-5}, props:{text:{value:\'\'}}},path85536d4f8908486b9e275ad7135bb6af:{from:\'rect3dbd7d6b2fbb4ffc92c61cf76c8ea1b0\',to:\'rectab880b8366744646848feccc446cfff2\', dots:[],text:{text:\'TO 合并\'},textPos:{x:41,y:8}, props:{text:{value:\'\'}}},path30a18258288c4f1385107a79d8d7f387:{from:\'rectab880b8366744646848feccc446cfff2\',to:\'rectaf587229d8104a47802b6bd6d3c77f62\', dots:[],text:{text:\'TO 任务5\'},textPos:{x:36,y:-5}, props:{text:{value:\'\'}}},path6fa2e6e2780e40da8782cde15fd8dc76:{from:\'rectaf587229d8104a47802b6bd6d3c77f62\',to:\'rect2c4c83074e7b478fbe3257d993cf764b\', dots:[],text:{text:\'TO 结束\'},textPos:{x:32,y:0}, props:{text:{value:\'\'}}},pathff540a550d864efda1b04a1b8f8518eb:{from:\'rect7b55aa13fcf949548e9fa7b28515698e\',to:\'rect07537dc026be40eea907537554333636\', dots:[{x:244,y:232}],text:{text:\'TO 任务2\'},textPos:{x:0,y:-10}, props:{text:{value:\'TO 任务2\'}}},path7dd08df8b5994a4ead1ad6f1be04e09f:{from:\'rect07537dc026be40eea907537554333636\',to:\'rectab880b8366744646848feccc446cfff2\', dots:[{x:242,y:435}],text:{text:\'TO 合并\'},textPos:{x:-3,y:17}, props:{text:{value:\'TO 合并\'}}},pathe776a5c7bb484c0d86e2b94b046c34c0:{from:\'rect7b55aa13fcf949548e9fa7b28515698e\',to:\'rect51dae99bfafc42c3b6759bb9620de653\', dots:[{x:607,y:234}],text:{text:\'TO 任务4\'},textPos:{x:0,y:-10}, props:{text:{value:\'TO 任务4\'}}},path959a9842a8834e1b9cc92e8a1185984a:{from:\'rect51dae99bfafc42c3b6759bb9620de653\',to:\'rectab880b8366744646848feccc446cfff2\', dots:[{x:607,y:439}],text:{text:\'TO 合并\'},textPos:{x:-8,y:16}, props:{text:{value:\'TO 合并\'}}}},props:{props:{name:{value:\'员工入职申请\'},key:{value:\'\'},desc:{value:\'\'}}}}', NULL, NULL, 1585988503, NULL);
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
INSERT INTO `bpm_flow_line` VALUES ('084b61aff72a402387a7e9b79a9f6e40', '4ce08c32bcbab235fc6e6276e21b4f38', 'cf72774d3ea74a9aa9455be5bf084062', 'a94f1f0101df41599ad87acc2c4899f4', NULL, NULL, 0);
INSERT INTO `bpm_flow_line` VALUES ('0ce88dcc4cc347298129b5add0c477e9', '4ce08c32bcbab235fc6e6276e21b4f38', '826f7a5902d345ebb8503cad76e2225d', '182d1a6a0b4643cea62129f79d471974', NULL, NULL, 0);
INSERT INTO `bpm_flow_line` VALUES ('11', '4ce08c32bcbab235fc6e6276e21b4f38', 'cb5255ec066c48ec9c875336b86bb805', '1dbace1a63134c01a99af2608af7a23f', NULL, NULL, 0);
INSERT INTO `bpm_flow_line` VALUES ('47acd756bba446068921f2dcb5daed6c', '4ce08c32bcbab235fc6e6276e21b4f38', '0346033d702c4feba6155cf816070d2b', '23006ba99d944bbcac0cb8b30c68b97c', NULL, NULL, 0);
INSERT INTO `bpm_flow_line` VALUES ('5525548b7d3d4003b7c35af3d359f898', '4ce08c32bcbab235fc6e6276e21b4f38', '69c687d6af5040c4877ec8c20637812e', '655891e2101e40fe97cc336c1f798933', NULL, NULL, 0);
INSERT INTO `bpm_flow_line` VALUES ('a204811d786f4f85921ba33b0c72ca38', '4ce08c32bcbab235fc6e6276e21b4f38', '826f7a5902d345ebb8503cad76e2225d', '0346033d702c4feba6155cf816070d2b', NULL, NULL, 0);
INSERT INTO `bpm_flow_line` VALUES ('d069ea0a5bbe45078ce92818bd4bcfb1', '4ce08c32bcbab235fc6e6276e21b4f38', '23006ba99d944bbcac0cb8b30c68b97c', '910b2f7a09f5459da5676bc9c876eda0', NULL, NULL, 0);
INSERT INTO `bpm_flow_line` VALUES ('d8e46d261dac476e8daf43d2d56fd4dd', '4ce08c32bcbab235fc6e6276e21b4f38', '07ce2af82f1f42ed8042b49ff827cfce', '06e6ad3db5c54424b2d97d4359514500', NULL, NULL, 0);
INSERT INTO `bpm_flow_line` VALUES ('e47611902af24d6aa084d0f8d73f8bae', '4ce08c32bcbab235fc6e6276e21b4f38', '826f7a5902d345ebb8503cad76e2225d', 'ec7ebcdb8a4d48b6930fff8f5f5b71bc', NULL, NULL, 0);
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
  `approveGroupId` bigint(20) DEFAULT NULL COMMENT '流程审核组id，用于查找该节点的所有审核人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='流程节点表';

-- ----------------------------
-- Records of bpm_flow_task_node
-- ----------------------------
BEGIN;
INSERT INTO `bpm_flow_task_node` VALUES ('031685b035fe4140b2012f93556b78c6', '4ce08c32bcbab235fc6e6276e21b4f38', '开始', NULL, '1', NULL, 'start', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('0346033d702c4feba6155cf816070d2b', '4ce08c32bcbab235fc6e6276e21b4f38', '任务', NULL, '1', NULL, 'task', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('14b0810ae382495f8cb0f52b9a4fc662', '4ce08c32bcbab235fc6e6276e21b4f38', '开始', NULL, '1', NULL, 'start', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('17ba902731f949c7922166277d9d20fe', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('182d1a6a0b4643cea62129f79d471974', '4ce08c32bcbab235fc6e6276e21b4f38', '任务', NULL, '1', NULL, 'task', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('20', '4ce08c32bcbab235fc6e6276e21b4f38', '状态', NULL, '1', NULL, 'state', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('204a8e128d46494591117f1afbdf2a3e', '4ce08c32bcbab235fc6e6276e21b4f38', '状态', NULL, '1', NULL, 'state', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('23006ba99d944bbcac0cb8b30c68b97c', '4ce08c32bcbab235fc6e6276e21b4f38', '任务', NULL, '1', NULL, 'task', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('32f8508cd194451ca2b19594030b7862', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('4f216633f04b4d93aa43f071728d4361', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('500d043b8a39498eb341dd3335e0599a', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('5076534846cc4917b06743057585a9f8', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('67a07c79f2f74a09b5f3273d185c2ba6', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('826f7a5902d345ebb8503cad76e2225d', '4ce08c32bcbab235fc6e6276e21b4f38', '开始', NULL, '1', NULL, 'start', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('844bdfd787d040eca683bf5b086dbcd2', '4ce08c32bcbab235fc6e6276e21b4f38', '开始', NULL, '1', NULL, 'start', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('910b2f7a09f5459da5676bc9c876eda0', '4ce08c32bcbab235fc6e6276e21b4f38', '结束', NULL, '1', NULL, 'end', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('948fe45072f64c5b992f9a8fc8c959f6', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('ac2e138a09f54652895555cdb5af0411', '4ce08c32bcbab235fc6e6276e21b4f38', '任务', NULL, '1', NULL, 'task', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('b1b390fbed1b45da865ec5abe44d75df', '4ce08c32bcbab235fc6e6276e21b4f38', '任务', NULL, '1', NULL, 'task', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('b335fed22c834bc98f0b8f1692ef44cc', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('cf4e1a5cd66b406b943012d4e98d2329', '4ce08c32bcbab235fc6e6276e21b4f38', '开始', NULL, '1', NULL, 'start', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('e387b8ed769748c29cce04c3d8c08910', '4ce08c32bcbab235fc6e6276e21b4f38', '分支', NULL, '1', NULL, 'fork', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
INSERT INTO `bpm_flow_task_node` VALUES ('ec7ebcdb8a4d48b6930fff8f5f5b71bc', '4ce08c32bcbab235fc6e6276e21b4f38', '状态', NULL, '1', NULL, 'state', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
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
INSERT INTO `bpm_flow_transition` VALUES ('0255b92d7597bf34a21a96fc152367be', '4ce08c32bcbab235fc6e6276e21b4f38', '69c687d6af5040c4877ec8c20637812e', '', '', NULL, '655891e2101e40fe97cc336c1f798933', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `bpm_flow_transition` VALUES ('1bf2374e5690dc016ceb6b0a54b50dc3', '4ce08c32bcbab235fc6e6276e21b4f38', '23006ba99d944bbcac0cb8b30c68b97c', '', '', NULL, '910b2f7a09f5459da5676bc9c876eda0', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `bpm_flow_transition` VALUES ('3cb700d478348c6d3efe857ff8a5239d', '4ce08c32bcbab235fc6e6276e21b4f38', 'cb5255ec066c48ec9c875336b86bb805', '', '', NULL, '1dbace1a63134c01a99af2608af7a23f', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `bpm_flow_transition` VALUES ('4b63ea81365bdfff712faeda50b01412', '4ce08c32bcbab235fc6e6276e21b4f38', '07ce2af82f1f42ed8042b49ff827cfce', '', '', NULL, '06e6ad3db5c54424b2d97d4359514500', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `bpm_flow_transition` VALUES ('5953f18d2bf4e980282937daff222cdc', '4ce08c32bcbab235fc6e6276e21b4f38', '0346033d702c4feba6155cf816070d2b', '', '', NULL, '23006ba99d944bbcac0cb8b30c68b97c', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `bpm_flow_transition` VALUES ('83cd08c97e74fc726739a572bfd5cddb', '4ce08c32bcbab235fc6e6276e21b4f38', '826f7a5902d345ebb8503cad76e2225d', '', '', NULL, '0346033d702c4feba6155cf816070d2b', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `bpm_flow_transition` VALUES ('98ced9c3294e1414a426b65a5740f93c', '4ce08c32bcbab235fc6e6276e21b4f38', '826f7a5902d345ebb8503cad76e2225d', '', '', NULL, 'ec7ebcdb8a4d48b6930fff8f5f5b71bc', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `bpm_flow_transition` VALUES ('b2deb373c22e991575ec2c8cfff09558', '4ce08c32bcbab235fc6e6276e21b4f38', '826f7a5902d345ebb8503cad76e2225d', '', '', NULL, '182d1a6a0b4643cea62129f79d471974', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `bpm_flow_transition` VALUES ('f807ade891c26837676eea6dc57d6c60', '4ce08c32bcbab235fc6e6276e21b4f38', 'cf72774d3ea74a9aa9455be5bf084062', '', '', NULL, 'a94f1f0101df41599ad87acc2c4899f4', NULL, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for bpm_flow_zdine
-- ----------------------------
DROP TABLE IF EXISTS `bpm_flow_zdine`;
CREATE TABLE `bpm_flow_zdine` (
  `id` varchar(32) DEFAULT NULL COMMENT '自定义表id',
  `tableName` varchar(255) DEFAULT NULL COMMENT '表名',
  `desc` varchar(1000) DEFAULT NULL COMMENT '备注',
  `tableAlias` varchar(255) DEFAULT NULL COMMENT '表别名',
  `createTime` bigint(20) DEFAULT NULL,
  `updateTime` bigint(20) DEFAULT NULL,
  `deleted` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of bpm_flow_zdine
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
