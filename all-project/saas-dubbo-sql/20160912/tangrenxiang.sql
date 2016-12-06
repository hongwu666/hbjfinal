update t_crm_definition_field set max_length = 15 where table_name = 't_crm_sales_opportunity' and column_field_name = 'sales_amount';
update s_crm_definition_field set max_length = 15 where table_name = 't_crm_sales_opportunity' and column_field_name = 'sales_amount';

-- 修改数据库合同金额字段类型以及t,s表的max_length
update t_crm_definition_field set max_length = 15 where table_name = 't_crm_contract' and column_field_name in ('total','befor_discount','discount_total','discount','payments','invoice_pay');
update s_crm_definition_field set max_length = 15 where table_name = 't_crm_contract' and column_field_name in ('total','befor_discount','discount_total','discount','payments','invoice_pay');

commit;