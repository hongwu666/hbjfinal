insert into s_crm_ui_grid(id,name,name_en,module_id,display_order) values('ID_GRID_REPORT','报表','report',13,1);

insert into t_crm_ui_grid(dbid,id,name,name_en,module_id,display_order)
select dbid,'ID_GRID_REPORT','报表','report',13,1 from t_crm_user GROUP BY dbid;


insert into s_crm_ui_grid_column(id,grid_id,name,width,is_auto_width,index_num,label,title,title_category,sortable,display,mapping_field_name) 
values
(21,'ID_GRID_REPORT','name',200,'N',1,'名称','','M','N','Y','name'),
(22,'ID_GRID_REPORT','module',200,'N',2,'类型','','M','N','Y','module'),
(23,'ID_GRID_REPORT','description',null,'Y',3,'描述','','M','N','Y','description');



insert into t_crm_define_grid_column(dbid,id,grid_id,ownerId,name,width,is_auto_width,index_num,label,title,title_category,sortable,display,mapping_field_name) 
select dbid,21,'ID_GRID_REPORT',user_id,'name',200,'N',1,'名称','','M','N','Y','name' from t_crm_user GROUP BY dbid,user_id;

insert into t_crm_define_grid_column(dbid,id,grid_id,ownerId,name,width,is_auto_width,index_num,label,title,title_category,sortable,display,mapping_field_name) 
select dbid,22,'ID_GRID_REPORT',user_id,'module',200,'N',2,'类型','','M','N','Y','module' from t_crm_user GROUP BY dbid,user_id;

insert into t_crm_define_grid_column(dbid,id,grid_id,ownerId,name,width,is_auto_width,index_num,label,title,title_category,sortable,display,mapping_field_name) 
select dbid,23,'ID_GRID_REPORT',user_id,'description',null,'Y',3,'描述','','M','N','Y','description' from t_crm_user GROUP BY dbid,user_id;


insert into s_crm_definition_field(id,table_name,field_label_eng,field_label,field_type,
field_type_ex,field_type_value,field_proper,comboxid,
has_default_value,field_default_value,display_order,
mapping_field_name,column_field_name,max_length,descn,is_mandatory,is_unique,is_delete,is_common,is_define,is_updateable
,is_deleteable,isdisable,is_filter,is_number,checkRepeat) values 
(4070,'t_crm_report_form','name','名称','text','text','','basic',-1,'N','',1,'name','name',80,'','N','N','N','N','N','N','N','N','N','N','N'),
(4071,'t_crm_report_form','module','类型','combobox','special','enum_module','basic',-1,'N','',2,'module','module',80,'','N','N','N','N','N','N','N','N','N','N','N'),
(4072,'t_crm_report_form','description','描述','textarea','textarea','','basic',-1,'N','',3,'description','description',80,'','N','N','N','N','N','N','N','N','N','N','N');




insert into t_crm_definition_field(dbid,id,table_name,field_label_eng,field_label,field_type,
field_type_ex,field_type_value,field_proper,comboxid,
has_default_value,field_default_value,display_order,
mapping_field_name,column_field_name,max_length,descn,is_mandatory,is_unique,is_delete,is_common,is_define,is_updateable
,is_deleteable,isdisable,is_filter,is_number,checkRepeat) 
select  dbid,4070,'t_crm_report_form','name','名称','text','text','','basic',-1,'N','',1,'name','name',80,'','N','N','N','N','N','N','N','N','N','N','N' from t_crm_user  GROUP BY dbid;



insert into t_crm_definition_field(dbid,id,table_name,field_label_eng,field_label,field_type,
field_type_ex,field_type_value,field_proper,comboxid,
has_default_value,field_default_value,display_order,
mapping_field_name,column_field_name,max_length,descn,is_mandatory,is_unique,is_delete,is_common,is_define,is_updateable
,is_deleteable,isdisable,is_filter,is_number,checkRepeat) 
select  dbid,4071,'t_crm_report_form','module','类型','combobox','special','winbins.special.enum_module','basic',-1,'N','',2,'module','module',80,'','N','N','N','N','N','N','N','N','N','N','N' from t_crm_user  GROUP BY dbid;


insert into t_crm_definition_field(dbid,id,table_name,field_label_eng,field_label,field_type,
field_type_ex,field_type_value,field_proper,comboxid,
has_default_value,field_default_value,display_order,
mapping_field_name,column_field_name,max_length,descn,is_mandatory,is_unique,is_delete,is_common,is_define,is_updateable
,is_deleteable,isdisable,is_filter,is_number,checkRepeat) 
select  dbid,4072,'t_crm_report_form','description','描述','textarea','textarea','','basic',-1,'N','',3,'description','description',80,'','N','N','N','N','N','N','N','N','N','N','N' from t_crm_user  GROUP BY dbid;




DROP PROCEDURE IF EXISTS `p_crm_userdatainit`;
CREATE PROCEDURE `p_crm_userdatainit`(IN `pdbid` BIGINT, IN `puserid` BIGINT)
BEGIN	
	declare pmaxid bigint ;

	if  exists(select 1 from t_crm_dashboard where dbid = pdbid ) then
		select max(id) into pmaxid  from t_crm_dashboard where dbid = pdbid ;
	else
			select 0 into pmaxid	;
	end if;

	if not exists(select 1 from t_crm_dashboard where dbid = pdbid and ownerId = puserid) then 
		insert into t_crm_dashboard(dbid,id,ownerId,report_form_id,name,fsort,filter_type,filter_time) 
		select pdbid,pmaxid+id,puserid,report_form_id,name,fsort,filter_type,filter_time from s_crm_dashboard;
		
		update t_bs_identity set lastid = lastid + 10 where dbid = pdbid;
	end if;
	
		if not exists(select 1 from t_crm_define_grid_column where dbid = pdbid and ownerId = puserid) then
		insert into t_crm_define_grid_column(`dbid`,id,`ownerId`,`grid_id`,`name`,`width`,`is_auto_width`,`index_num`,`renderer`,`align`,`label`,`title`,`title_category`,`sortable`,`display`,`mapping_field_name`)
		select pdbid,id,puserid,`grid_id`,`name`,`width`,`is_auto_width`,`index_num`,`renderer`,`align`,`label`,`title`,`title_category`,`sortable`,`display`,`mapping_field_name` 
		from s_crm_ui_grid_column 	where  id in (21,22,23,110102,110101,110112,110103,110113,110114,600011,600012,600021,600013,600016,600017,600019,4,1,6,2,3,7,8,500010,500002,500001,500006,500007,500008,500004,500011,121403008,
		410610,410611,410612,410614,410615,410616,410617,410638,410639,410643,410647,410640,410641,410642,410648,410650,410631,410632,410633,410651,410635,410634,410636,410637);
	end if;
	
	call p_bs_identity(pdbid,1);
	
	INSERT INTO t_bs_acl_hotkey (dbid,`id`,userid, `module`, `object`, `fsort`) 
	select  pdbid,lastid+1,puserid, 'Signin', 'add', 1 from t_bs_identity where dbid = pdbid ;
	INSERT INTO t_bs_acl_hotkey (dbid,`id`,userid, `module`, `object`,  `fsort`) 
	select  pdbid,lastid+2,puserid, 'Workreport', 'add', 2 from t_bs_identity where dbid = pdbid ;
	INSERT INTO t_bs_acl_hotkey (dbid,`id`,userid, `module`, `object`, `fsort`) 
	select  pdbid,lastid+3,puserid, 'StreamDynamic', 'add',3 from t_bs_identity where dbid = pdbid ;
	INSERT INTO t_bs_acl_hotkey (dbid,`id`,userid, `module`, `object`, `fsort`) 
	select  pdbid,lastid+4,puserid, 'Contact', 'scan',4 from t_bs_identity where dbid = pdbid ;
	
	call p_bs_identity(pdbid,4);
	
	INSERT INTO t_crm_sign_filter(dbid,id,userid,module,filter,fvalue,created_date,created_by,updated_date,updated_by)
   values(pdbid,puserid,puserid,'Goal','target','1,2,3,4',UNIX_TIMESTAMP(now())*1000,puserid,UNIX_TIMESTAMP(now())*1000,puserid);
END




