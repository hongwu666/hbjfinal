-- s表添加商机映射合同字段
alter table s_crm_definition_field add map_column_field_name varchar(20) default null COMMENT '映射列字段名(例如:商机字段映射合同字段名字)';
COMMIT;

-- t表添加商机映射合同字段
alter table t_crm_definition_field add map_column_field_name varchar(20) default null COMMENT '映射列字段名(例如:商机字段映射合同字段名字)';
COMMIT;

-- 合同被映射的商机ID
alter table t_crm_contract add map_opportunity_id bigint(20) default 0 COMMENT '映射的商机ID';

-- 修改合同金额字段长度
alter table t_crm_contract modify column total decimal(14,2);
alter table t_crm_contract modify column discount_total decimal(14,2);
alter table t_crm_contract modify column discount decimal(14,2);
alter table t_crm_contract modify column payments decimal(14,2);
alter table t_crm_contract modify column invoice_pay decimal(14,2);

-- 修改合同在S表中金额字段长度
update s_crm_definition_field set max_length = 14 where table_name = 't_crm_contract' and column_field_name = 'total';
-- 修改合同在T表中金额字段长度
update t_crm_definition_field set max_length = 14 where table_name = 't_crm_contract' and column_field_name = 'total';

commit;


-- 更新S表
-- 商机名称	>>>	合同主题
update s_crm_definition_field set map_column_field_name = 'subject'    where table_name = 't_crm_sales_opportunity' and mapping_field_name = 'name'        ;
-- 客户名称	>>>	客户名称
update s_crm_definition_field set map_column_field_name = 'customerid' where table_name = 't_crm_sales_opportunity' and mapping_field_name = 'custId'      ;
-- 销售金额	>>>	合同金额
update s_crm_definition_field set map_column_field_name = 'total'      where table_name = 't_crm_sales_opportunity' and mapping_field_name = 'salesAmount' ;
-- 结单日期	>>>	开始日期
update s_crm_definition_field set map_column_field_name = 'begindate'  where table_name = 't_crm_sales_opportunity' and mapping_field_name = 'finishDate'  ;
-- 备注	>>>	备注
update s_crm_definition_field set map_column_field_name = 'fdescribe'  where table_name = 't_crm_sales_opportunity' and mapping_field_name = 'remark'      ;

commit;

-- 更新T表
-- 商机名称	>>>	合同主题
update t_crm_definition_field set map_column_field_name = 'subject'    where table_name = 't_crm_sales_opportunity' and mapping_field_name = 'name'        ;
-- 客户名称	>>>	客户名称
update t_crm_definition_field set map_column_field_name = 'customerid' where table_name = 't_crm_sales_opportunity' and mapping_field_name = 'custId'      ;
-- 销售金额	>>>	合同金额
update t_crm_definition_field set map_column_field_name = 'total'      where table_name = 't_crm_sales_opportunity' and mapping_field_name = 'salesAmount' ;
-- 结单日期	>>>	开始日期
update t_crm_definition_field set map_column_field_name = 'begindate'  where table_name = 't_crm_sales_opportunity' and mapping_field_name = 'finishDate'  ;
-- 备注	>>>	备注
update t_crm_definition_field set map_column_field_name = 'fdescribe'  where table_name = 't_crm_sales_opportunity' and mapping_field_name = 'remark'      ;

commit;


