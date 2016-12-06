CREATE TABLE `s_crm_report_form` (
  `id` bigint(20) NOT NULL,
  `name` varchar(200) DEFAULT NULL COMMENT '报表名',
  `description` varchar(200) DEFAULT NULL COMMENT '描述',
  `created_date` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `created_by` bigint(20) DEFAULT NULL COMMENT '创建者',
  `updated_date` bigint(20) DEFAULT NULL COMMENT '更新时间',
  `updated_by` bigint(20) DEFAULT NULL COMMENT '更新者',
  `type` tinyint(1) DEFAULT NULL COMMENT '报表型的选项,1-列表型，2-分组型，3-矩阵型',
  `module` varchar(200) DEFAULT NULL COMMENT '报表模型,比如自定义的报表是基于哪个模型来的',
  `parent_module` varchar(200) DEFAULT NULL COMMENT '报表的上级模型',
  `is_static` tinyint(1) DEFAULT NULL COMMENT '是否是固定的报表模板',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




CREATE TABLE `t_crm_report_form` (
  `id` bigint(20) NOT NULL COMMENT '报表对象的id',
  `dbid` bigint(20) NOT NULL DEFAULT '0',
  `userId` bigint(20) DEFAULT NULL COMMENT '所属用户的id，如果为空表示是系统用户',
  `name` varchar(200) DEFAULT NULL COMMENT '报表名称',
  `created_date` bigint(20) DEFAULT NULL,
  `updated_date` bigint(20) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '报表类型的选项,1-列表型，2-分组型，3-矩阵型',
  `description` varchar(200) DEFAULT NULL COMMENT '描述',
  `module` varchar(200) NOT NULL COMMENT '报表模型,比如自定义的报表是基于哪个模型来的',
  `module_name` varchar(100) DEFAULT NULL COMMENT 'module字段对应的中文描述',
  `parent_module` varchar(200) DEFAULT NULL COMMENT '报表的上级模型',
  PRIMARY KEY (`id`,`dbid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `t_crm_report_form_field` (
  `id` bigint(20) NOT NULL,
  `dbid` bigint(20) NOT NULL DEFAULT '0',
  `form_id` bigint(20) NOT NULL COMMENT '关联到t_crm_report_form表的id',
  `defined_id` bigint(20) NOT NULL COMMENT '和defined表关联的ID',
  `width` bigint(20) DEFAULT '160',
  `is_display` tinyint(1) NOT NULL COMMENT '0-不显示；1-显示',
  `display_order` int(10) NOT NULL COMMENT '显示的顺序，999999表示不显示',
  PRIMARY KEY (`id`,`dbid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `t_crm_report_form_filter` (
  `id` bigint(20) NOT NULL,
  `dbid` bigint(20) NOT NULL,
  `form_id` bigint(20) NOT NULL,
  `defined_id` bigint(20) DEFAULT NULL,
  `filter_value` varchar(1024) DEFAULT NULL,
  `filter_option` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`,`dbid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

