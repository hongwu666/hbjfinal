alter table t_crm_customer add lastcontract_endDate bigint(20) DEFAULT NULL COMMENT '最新合同到期时间';
alter table t_crm_customer add lastcontract_submitDate bigint(20) DEFAULT NULL COMMENT '最新合同审批通过时间';
alter table t_crm_customer add lastpublic_userId bigint(20) DEFAULT NULL COMMENT '被谁公开';
alter table t_crm_customer add lastpublic_date bigint(20) DEFAULT NULL COMMENT '公开时间';