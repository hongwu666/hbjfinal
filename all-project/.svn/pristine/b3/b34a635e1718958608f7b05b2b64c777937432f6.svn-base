-- 销售参数设置增加客户查询范围设置开关，初始化T表
insert into t_bs_systemprofile( dbid ,id ,category ,fkey ,fvalue ,fdesc ) select dbid , 1013 ,'sales' , 'customerQueryScope' ,'1' , '客户查询范围设置(1:全公司 2:可见范围》)' from t_bs_systemprofile group by dbid;
-- 初始化S表
insert into s_bs_systemprofile( id ,category ,fkey ,fvalue ,fdesc ) values( 1013 ,'sales' , 'customerQueryScope' ,'1' , '客户查询范围设置(1:全公司 2:可见范围》)' );

commit;
