alter table s_crm_customer_filter add displayOrder int(11) default 0;
Alter table s_crm_customer_filter add primary key(filterid);
insert into s_crm_customer_filter value(7,'contact.name','名称格式如：张三','联系人名称',0,4);
update s_crm_customer_filter set displayOrder = 1 where filterid = 1;
update s_crm_customer_filter set displayOrder = 2 where filterid = 2;
update s_crm_customer_filter set displayOrder = 3 where filterid = 3;
update s_crm_customer_filter set displayOrder = 5 where filterid = 4;
update s_crm_customer_filter set displayOrder = 6 where filterid = 5;
update s_crm_customer_filter set displayOrder = 7 where filterid = 6;