update t_crm_definition_field set is_updateable = 'Y' where table_name = 't_crm_sales_opportunity' and mapping_field_name = 'custId' and dbid = 1005056;
update t_crm_definition_field set is_mandatory  = 'N' where table_name = 't_crm_sales_opportunity' and mapping_field_name = 'contactId' and dbid = 1005056;


update s_crm_definition_field set is_updateable = 'Y' where table_name = 't_crm_sales_opportunity' and mapping_field_name = 'custId'; 
update s_crm_definition_field set is_mandatory  = 'N' where table_name = 't_crm_sales_opportunity' and mapping_field_name = 'contactId'; 


alter table t_crm_contract change enddate enddate bigint(20) DEFAULT NULL COMMENT '结束日期';