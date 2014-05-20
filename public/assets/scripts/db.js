	function getType(f_class){
		$("#search_f_class").val(f_class);
		var url = "/db/index/getData";	
		$.ajax({
			type:'post',
			url: url,
			data:{
				f_class:f_class
			},
			dataType: 'json',
			success: function(data) {
				drawDb(data);
			},
			error:function() {
				alert("error");
			}
		});
	}
	function showPart(part){
		if($("#"+part)[0].style.display == 'none'){
			$("#"+part).css('display','block'); 
		}else{
			$("#"+part).css('display','none'); 
		}
		
	}
	function giveUrl(){
		var f_class = $("#search_f_class").val();
		var f_host = $("#search_f_host").val();
		var f_ip = $("#search_f_ip").val();
		var f_port = $("#search_f_port").val();
		var f_sock = $("#search_f_sock").val();
		var f_role_type = $("#search_f_role_type").val();
		var f_cpu_model = $("#search_f_cpu_model").val();
		var f_real_mem_size = $("#search_f_real_mem_size").val();
		var f_raid_level = $("#search_f_raid_level").val();
		var f_os_ver = $("#search_f_os_ver").val();
		var f_mysql_ver = $("#search_f_mysql_ver").val();
		var f_ms_ip = $("#search_f_ms_ip").val();
		var f_engine = $("#search_f_engine").val();
		var f_idc_type = $("#search_f_idc_type").val();
		
		var f_responsible = $("#search_f_responsible").val();
		var f_strategy = $("#search_f_strategy").val();
		var f_serial = $("#search_f_serial").val();
		var f_model = $("#search_f_model").val();
		var f_dand = $("#search_f_dand").val();
		var f_description = $("#search_f_description").val();
		var f_disk_num = $("#search_f_disk_num").val();
		var f_disk_capacity = $("#search_f_disk_capacity").val();
		var f_os_version = $("#search_f_os_version").val();
		var f_os_core_version = $("#search_f_os_core_version").val();
		var f_model_num = $("#search_f_model_num").val();
		var f_dep = $("#search_f_dep").val();
		var f_dev_ip = $("#search_f_dev_ip").val();

		var href = "/db/index/download?f_class="+f_class+"&f_host="+f_host+"&f_ip="+f_ip+"&f_port="+f_port+"&f_sock="+f_sock+"&f_role_type="+f_role_type+"&f_cpu_model="+f_cpu_model+"&f_real_mem_size="+f_real_mem_size+"&f_raid_level="+f_raid_level+"&f_os_ver="+f_os_ver+"&f_mysql_ver="+f_mysql_ver+"&f_ms_ip="+f_ms_ip+"&f_engine="+f_engine+"&f_idc_type="+f_idc_type+"&f_responsible="+f_responsible+"&f_strategy="+f_strategy+"&f_serial="+f_serial+"&f_model="+f_model+"&f_dand="+f_dand+"&f_description="+f_description+"&f_disk_num="+f_disk_num+"&f_disk_capacity="+f_disk_capacity+"&f_os_version="+f_os_version+"&f_os_core_version="+f_os_core_version+"&f_model_num="+f_model_num+"&f_dep="+f_dep+"&f_dev_ip="+f_dev_ip;
		$('#download').attr('href',href); 
	}
	function getDb(){
		var url = "/db/index/getData";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			success: function(data) { 
				drawDb(data);
			},
			error:function() {
				alert("error");
			}
		});
	}
	
	function drawDb(data){
		var str = '';
		str += '<div class="col-md-12">';
		str += '	<div class="portlet box blue">';
		str += '	<div class="portlet-title">';
		str += '		<div class="caption"><i class="fa fa-globe"></i>数据库信息</div>';
		str += '		<div class="actions">';
		str += '			<div class="btn-group">';
		str += '				<a class="btn default" href="#" data-toggle="dropdown">';
		str += '				Columns';
		str += '				<i class="fa fa-angle-down"></i>';
		str += '				</a>';
		str += '				<div id="sample_2_column_toggler" class="dropdown-menu hold-on-click dropdown-checkboxes pull-right">';
							
		//str += '					<label style="display:none;"><input type="checkbox" checked data-column="0"></label>';
		str += '					<label><input type="checkbox" checked data-column="1">主机名</label>';
		str += '					<label><input type="checkbox" checked data-column="2">ip地址</label>';
		str += '					<label><input type="checkbox" checked data-column="3">端口</label>';
		str += '					<label><input type="checkbox" checked data-column="4">主从ip</label>';
		str += '					<label><input type="checkbox" checked data-column="5">引擎类型</label>';
		str += '					<label><input type="checkbox" checked data-column="6">Socket</label>';
		str += '					<label><input type="checkbox" checked data-column="7">IDC类型</label>';
		str += '					<label><input type="checkbox" checked data-column="8">责任人</label>';
		str += '					<label><input type="checkbox" checked data-column="9">vip</label>';
		str += '					<label><input type="checkbox" checked data-column="10">操作</label>';
		str += '				</div>';
		str += '			</div>';
		str += '		</div>';
		str += '		</div>';
		str += '	<div class="portlet-body">';
		
		str += '<table class="table table-striped table-bordered table-hover table-full-width" id="sample_2">';
		str += '<thead><tr>';
		
		//str += '   <th><input type="checkbox" name="is_all" onclick="selectList();"></input></th>';
		str += '   <th>主机名</th>';
		str += '   <th>ip地址</th>';
		str += '   <th>端口</th>';
		str += '   <th>主从ip</th>';
		str += '   <th>引擎类型</th>';
		str += '   <th>Socket</th>';
		str += '   <th>IDC类型</th>';
		str += '   <th>责任人</th>';
		str += '   <th>vip</th>';
		str += '   <th>操作</th>';
		str += '</tr></thead>';
		str += '<tbody>';
		for(i in data){
			str += '<tr>';
			//str +='<td><input type="checkbox" name="f_id" value="'+data[i]['f_id']+'"></input></td>';
			str += '<td><a target="_blank" href="/db/index/detail?f_ip='+data[i]['f_ip']+'">'+data[i]['f_host']+'</a></td>';
			str += '<td>'+data[i]['f_ip']+'</td>';
			str += '<td>'+data[i]['f_port']+'</td>';
			str += '<td>'+data[i]['f_ms_ip']+'</td>';
			str += '<td>'+data[i]['f_engine']+'</td>';
			str += '<td>'+data[i]['f_sock']+'</td>';
			str += '<td>'+data[i]['f_idc_type']+'</td>';
			str += '<td>'+data[i]['f_responsible']+'</td>';
			if(data[i]['f_vip'] == null){
				str += '<td></td>';
			}else{
				str += '<td>'+data[i]['f_vip']+'</td>';
			}
			str += '<td><input type="button" class="btn btn-success" onclick="giveDb(\''+data[i]['f_id']+'\');" value="修改"></input></td>';
			str += '</tr>';
		}
		str += '</tbody>';
		str += '</table>';
		str += '		</div>';
		str += '		</div>';
		str += '</div>';
		$("#show_data").html(str);
		TableAdvanced.init();
	}
	function giveDb(id){
		// var	f_id = $("input[name='f_id']");
		// f_id.each(function(){
		// 	if($(this).val() == id){
		// 		$(this).attr("checked",true);
  //           }
		// });
		// return false;
		var url = "/db/index/giveData";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			data:{
				id:id
				},
			success: function(data) { 
				for(i in data){
					
					$("#update_f_id").val(data[i]['f_id']);
					$("#update_f_host").val(data[i]['f_host']);
					$("#update_f_ip").val(data[i]['f_ip']);
					$("#update_f_port").val(data[i]['f_port']);
					$("#update_f_sock").val(data[i]['f_sock']);
					$("#update_f_class").val(data[i]['f_class']);
					$("#update_f_role_type").val(data[i]['f_role_type']);
					$("#update_f_cpu_model").val(data[i]['f_cpu_model']);
					$("#update_f_real_mem_size").val(data[i]['f_real_mem_size']);
					$("#update_f_raid_level").val(data[i]['f_raid_level']);
					$("#update_f_os_ver").val(data[i]['f_os_ver']);
					$("#update_f_mysql_ver").val(data[i]['f_mysql_ver']);
					$("#update_f_ms_ip").val(data[i]['f_ms_ip']);
					$("#update_f_engine").val(data[i]['f_engine']);
					$("#update_f_idc_type").val(data[i]['f_idc_type']);

					$("#update_f_responsible").val(data[i]['f_responsible']);
					$("#update_f_strategy").val(data[i]['f_strategy']);
					$("#update_f_serial").val(data[i]['f_serial']);
					$("#update_f_model").val(data[i]['f_model']);
					$("#update_f_dand").val(data[i]['f_dand']);
					$("#update_f_description").val(data[i]['f_description']);
					$("#update_f_disk_num").val(data[i]['f_disk_num']);
					$("#update_f_disk_capacity").val(data[i]['f_disk_capacity']);
					$("#update_f_os_version").val(data[i]['f_os_version']);
					$("#update_f_os_core_version").val(data[i]['f_os_core_version']);
					$("#update_f_model_num").val(data[i]['f_model_num']);
					$("#update_f_dep").val(data[i]['f_dep']);
					$("#update_f_dev_ip").val(data[i]['f_dev_ip']);
				}
				$("#update_info").css('display','block');
			},
			error:function() {
				alert("error");
			}
		});
	}
	function searchData(){
		var f_class = $("#search_f_class").val();
		var f_host = $("#search_f_host").val();
		var f_ip = $("#search_f_ip").val();
		var f_port = $("#search_f_port").val();
		var f_sock = $("#search_f_sock").val();
		var f_role_type = $("#search_f_role_type").val();
		var f_cpu_model = $("#search_f_cpu_model").val();
		var f_real_mem_size = $("#search_f_real_mem_size").val();
		var f_raid_level = $("#search_f_raid_level").val();
		var f_os_ver = $("#search_f_os_ver").val();
		var f_mysql_ver = $("#search_f_mysql_ver").val();
		var f_ms_ip = $("#search_f_ms_ip").val();
		var f_engine = $("#search_f_engine").val();
		var f_idc_type = $("#search_f_idc_type").val();
		
		var f_responsible = $("#search_f_responsible").val();
		var f_strategy = $("#search_f_strategy").val();
		var f_serial = $("#search_f_serial").val();
		var f_model = $("#search_f_model").val();
		var f_dand = $("#search_f_dand").val();
		var f_description = $("#search_f_description").val();
		var f_disk_num = $("#search_f_disk_num").val();
		var f_disk_capacity = $("#search_f_disk_capacity").val();
		var f_os_version = $("#search_f_os_version").val();
		var f_os_core_version = $("#search_f_os_core_version").val();
		var f_model_num = $("#search_f_model_num").val();
		var f_dep = $("#search_f_dep").val();
		var f_dev_ip = $("#search_f_dev_ip").val();
		var url = "/db/index/getData";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			data:{
				f_class:f_class,
				f_host:f_host,
				f_ip:f_ip,
				f_port:f_port,
				f_sock:f_sock,
				f_role_type:f_role_type,
				f_cpu_model:f_cpu_model,
				f_real_mem_size:f_real_mem_size,
				f_raid_level:f_raid_level,
				f_os_ver:f_os_ver,
				f_mysql_ver:f_mysql_ver,
				f_ms_ip:f_ms_ip,
				f_engine:f_engine,
				f_idc_type:f_idc_type,

				f_responsible:f_responsible,
				f_strategy:f_strategy,
				f_serial:f_serial,
				f_model:f_model,
				f_dand:f_dand,
				f_description:f_description,
				f_disk_num:f_disk_num,
				f_disk_capacity:f_disk_capacity,
				f_os_version:f_os_version,
				f_os_core_version:f_os_core_version,
				f_model_num:f_model_num,
				f_dep:f_dep,
				f_dev_ip:f_dev_ip
				},
			success: function(data) { 
				drawDb(data);
			},
			error:function() {
				alert("error");
			}
		});
	}
	function updateDb(){
		
		// var f_id_str = '';
		// var	f_id = $("input[name='f_id']");
		// f_id.each(function(){
		// 	if($(this).attr("checked")){
		// 		f_id_str += $(this).val()+","
  //             }
		// });
		// if(f_id_str == ''){
		// 	alert('请选择');
		// 	return false;
		// }
		

		
		
		var f_host = $("#update_f_host").val();
		var f_ip = $("#update_f_ip").val();
		var f_port = $("#update_f_port").val();
		var f_sock = $("#update_f_sock").val();
		var f_class = $("#update_f_class").val();
		var f_role_type = $("#update_f_role_type").val();
		var f_cpu_model = $("#update_f_cpu_model").val();
		var f_real_mem_size = $("#update_f_real_mem_size").val();
		var f_raid_level = $("#update_f_raid_level").val();
		var f_os_ver = $("#update_f_os_ver").val();
		var f_mysql_ver = $("#update_f_mysql_ver").val();
		var f_ms_ip = $("#update_f_ms_ip").val();
		var f_engine = $("#update_f_engine").val();
		var f_idc_type = $("#update_f_idc_type").val();

		var f_responsible = $("#update_f_responsible").val();
		var f_strategy = $("#update_f_strategy").val();
		var f_serial = $("#update_f_serial").val();
		var f_model = $("#update_f_model").val();
		var f_dand = $("#update_f_dand").val();
		var f_description = $("#update_f_description").val();
		var f_disk_num = $("#update_f_disk_num").val();
		var f_disk_capacity = $("#update_f_disk_capacity").val();
		var f_os_version = $("#update_f_os_version").val();
		var f_os_core_version = $("#update_f_os_core_version").val();
		var f_model_num = $("#update_f_model_num").val();
		var f_dep = $("#update_f_dep").val();
		var f_dev_ip = $("#update_f_dev_ip").val();
		var f_vip = $("#update_f_vip").val();
		
		var url = "/db/index/updateData";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			data:{
				//f_id_str:f_id_str,
				f_host:f_host,
				f_ip:f_ip,
				f_port:f_port,
				f_sock:f_sock,
				f_class:f_class,
				f_role_type:f_role_type,
				f_cpu_model:f_cpu_model,
				f_real_mem_size:f_real_mem_size,
				f_raid_level:f_raid_level,
				f_os_ver:f_os_ver,
				f_mysql_ver:f_mysql_ver,
				f_ms_ip:f_ms_ip,
				f_engine:f_engine,
				f_idc_type:f_idc_type,

				f_responsible:f_responsible,
				f_strategy:f_strategy,
				f_serial:f_serial,
				f_model:f_model,
				f_dand:f_dand,
				f_description:f_description,
				f_disk_num:f_disk_num,
				f_disk_capacity:f_disk_capacity,
				f_os_version:f_os_version,
				f_os_core_version:f_os_core_version,
				f_model_num:f_model_num,
				f_dep:f_dep,
				f_dev_ip:f_dev_ip,
				f_vip:f_vip
				},
			success: function(data) { 
				getDb();
			},
			error:function() {
				alert("error");
			}
		});
	}
	function deleteDb(){
		var f_id_str = '';
		var	f_id = $("input[name='f_id']");
		f_id.each(function(){
			if($(this).attr("checked")){
				f_id_str += $(this).val()+","
              }
		});
		if(f_id_str == ''){
			alert('请选择');
			return false;
		}
		var url = "/db/index/deleteData";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			data:{
				f_id_str:f_id_str
				},
			success: function(data) { 
				searchData();
			},
			error:function() {
				alert("error");
			}
		});
	}
	function insertData(){
		var f_host = $("#f_host").val();
		var f_ip = $("#f_ip").val();
		var f_port = $("#f_port").val();
		var f_sock = $("#f_sock").val();
		var f_role_type = $("#f_role_type").val();
		var f_cpu_model = $("#f_cpu_model").val();
		var f_real_mem_size = $("#f_real_mem_size").val();
		var f_raid_level = $("#f_raid_level").val();
		var f_os_ver = $("#f_os_ver").val();
		var f_mysql_ver = $("#f_mysql_ver").val();
		var f_ms_ip = $("#f_ms_ip").val();
		var f_engine = $("#f_engine").val();
		var f_idc_type = $("#f_idc_type").val();
		var f_responsible = $("#f_responsible").val();
		var f_strategy = $("#f_strategy").val();
		var f_serial = $("#f_serial").val();
		var f_model = $("#f_model").val();
		var f_dand = $("#f_dand").val();
		var f_description = $("#f_description").val();
		var f_disk_num = $("#f_disk_num").val();
		var f_disk_capacity = $("#f_disk_capacity").val();
		var f_os_version = $("#f_os_version").val();
		var f_os_core_version = $("#f_os_core_version").val();
		var f_model_num = $("#f_model_num").val();
		var f_dep = $("#f_dep").val();
		var f_dev_ip = $("#f_dev_ip").val();
		var f_vip = $("#f_vip").val();
		var url = "/db/index/insertData";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			data:{
				f_host:f_host,
				f_ip:f_ip,
				f_port:f_port,
				f_sock:f_sock,
				f_role_type:f_role_type,
				f_cpu_model:f_cpu_model,
				f_real_mem_size:f_real_mem_size,
				f_raid_level:f_raid_level,
				f_os_ver:f_os_ver,
				f_mysql_ver:f_mysql_ver,
				f_ms_ip:f_ms_ip,
				f_engine:f_engine,
				f_idc_type:f_idc_type,

				f_responsible:f_responsible,
				f_strategy:f_strategy,
				f_serial:f_serial,
				f_model:f_model,
				f_dand:f_dand,
				f_description:f_description,
				f_disk_num:f_disk_num,
				f_disk_capacity:f_disk_capacity,
				f_os_version:f_os_version,
				f_os_core_version:f_os_core_version,
				f_model_num:f_model_num,
				f_dep:f_dep,
				f_dev_ip:f_dev_ip,
				f_vip:f_vip
				},
			success: function(data) { 
				alert(data);
			},
			error:function() {
				alert("error");
			}
		});
	}
	function getBak(){
		var begin = $("#from").val();
		var end = $("#to").val();
		var url = "/db/index/bakData";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			data:{
				begin:begin,
				end:end
			},
			success: function(data) { 
				drawBak(data);
			},
			error:function() {
				alert("error");
			}
		});
	}
	
	function drawBak(data){
		var str = '';
		str += '<div class="col-md-12">';
		str += '	<div class="portlet box blue">';
		str += '	<div class="portlet-title">';
		str += '		<div class="caption"><i class="fa fa-globe"></i>备份信息</div>';
		str += '		<div class="actions">';
		str += '			<div class="btn-group">';
		str += '				<a class="btn default" href="#" data-toggle="dropdown">';
		str += '				Columns';
		str += '				<i class="fa fa-angle-down"></i>';
		str += '				</a>';
		str += '				<div id="sample_2_column_toggler" class="dropdown-menu hold-on-click dropdown-checkboxes pull-right">';
							
		str += '					<label style="display:none;"><input type="checkbox" checked data-column="0"></label>';
		str += '					<label><input type="checkbox" checked data-column="1">主机名</label>';
		str += '					<label><input type="checkbox" checked data-column="2">ip地址</label>';
		str += '					<label><input type="checkbox" checked data-column="3">端口</label>';
		str += '					<label><input type="checkbox" checked data-column="4">主从ip</label>';
		str += '					<label><input type="checkbox" checked data-column="5">引擎类型</label>';
		str += '					<label><input type="checkbox" checked data-column="6">Socket</label>';
		str += '					<label><input type="checkbox" checked data-column="7">IDC类型</label>';
		str += '					<label><input type="checkbox" checked data-column="8">责任人</label>';
		str += '					<label><input type="checkbox" checked data-column="9">vip</label>';
		str += '					<label><input type="checkbox" checked data-column="10">操作</label>';
		str += '				</div>';
		str += '			</div>';
		str += '		</div>';
		str += '		</div>';
		str += '	<div class="portlet-body">';
		
		str += '<table class="table table-striped table-bordered table-hover table-full-width" id="sample_2">';
		str += '<thead><tr>';
		str += '   <th>IP</th>';
		str += '   <th>主从IP</th>';
		str += '   <th>Socket</th>';
		str += '   <th>备份开始时间</th>';
		str += '   <th>备份结束时间</th>';
		str += '   <th>源文件大小</th>';
		str += '   <th>备份文件大小</th>';
		str += '   <th>备份文件存放目录</th>';
		str += '   <th>备份机IP</th>';
		str += '   <th>文件名</th>';
		str += '   <th>备份结果</th>';
		str += '   <th>备注</th>';
		str += '</tr></thead>';
		str += '<tbody>';
		for(i in data){
			str += '<tr>';
			str += '<td>'+data[i]['f_ip']+'</td>';
			str += '<td>'+data[i]['f_ms_ip']+'</td>';
			str += '<td>'+data[i]['f_sock']+'</td>';
			str += '<td>'+data[i]['f_bak_begin_time']+'</td>';
			str += '<td>'+data[i]['f_bak_end_time']+'</td>';
			str += '<td>'+data[i]['f_bak_original_size']+'</td>';
			str += '<td>'+data[i]['f_bak_size']+'</td>';
			str += '<td>'+data[i]['f_bak_keep_dir']+'</td>';
			str += '<td>'+data[i]['f_bak_keep_host']+'</td>';
			str += '<td>'+data[i]['f_bak_file_name']+'</td>';
			if(data[i]['f_bak_remark_code'] == 1){
				str += '<td>成功</td>';
			}else{
				str += '<td>失败</td>';
			}
			str += '<td>'+data[i]['f_bak_remark']+'</td>';
			str += '</tr>';
		}
		str += '</tbody>';
		str += '</table>';
		str += '		</div>';
		str += '		</div>';
		str += '</div>';
		$("#show_data").html(str);
		TableAdvanced.init();
	}
	function bakType(f_class){
		$("#search_f_class").val(f_class);
		var url = "/db/index/getBak";	
		$.ajax({
			type:'post',
			url: url,
			data:{
				f_class:f_class
			},
			dataType: 'json',
			success: function(data) {
				drawBakStatus(data);
			},
			error:function() {
				alert("error");
			}
		});
	}
	function drawBakStatus(data){
		var str = '';
		str += '<div class="col-md-12">';
		str += '	<div class="portlet box blue">';
		str += '	<div class="portlet-title">';
		str += '		<div class="caption"><i class="fa fa-globe"></i>备份信息查看&nbsp;&nbsp;&nbsp;<button onclick="showBak();" class="btn default" type="button">备份配置</button></div>';
		str += '		<div class="actions">';
		str += '			<div class="btn-group">';
		str += '				<a class="btn default" href="#" data-toggle="dropdown">';
		str += '				Columns';
		str += '				<i class="fa fa-angle-down"></i>';
		str += '				</a>';
		str += '				<div id="sample_2_column_toggler" class="dropdown-menu hold-on-click dropdown-checkboxes pull-right">';
							
		str += '					<label style="display:none;"><input type="checkbox" checked data-column="0"></label>';
		str += '					<label><input type="checkbox" checked data-column="1">主机名</label>';
		str += '					<label><input type="checkbox" checked data-column="2">IP:Port</label>';
		str += '					<label><input type="checkbox" checked data-column="3">M/S</label>';
		str += '					<label><input type="checkbox" checked data-column="4">应用描述</label>';
		str += '					<label><input type="checkbox" checked data-column="5">全量间隔</label>';
		str += '					<label><input type="checkbox" checked data-column="6">全量最近备份</label>';
		str += '					<label><input type="checkbox" checked data-column="7">全量备份状态</label>';
		str += '					<label><input type="checkbox" checked data-column="8">全量备份控制</label>';
		str += '					<label><input type="checkbox" checked data-column="9">增量间隔</label>';
		str += '					<label><input type="checkbox" checked data-column="10">增量最近备份</label>';
		str += '					<label><input type="checkbox" checked data-column="11">增量备份状态</label>';
		str += '					<label><input type="checkbox" checked data-column="12">增量备份控制</label>';
		str += '				</div>';
		str += '			</div>';
		str += '		</div>';
		str += '		</div>';
		str += '	<div class="portlet-body">';
		
		str += '<table class="table table-striped table-bordered table-hover table-full-width" id="sample_2">';
		str += '<thead><tr>';
		
		str += '   <th><input type="checkbox" name="is_all" onclick="selectList();"></input></th>';
		str += '   <th>主机名</th>';
		str += '   <th>IP:Port</th>';
		str += '   <th>M/S</th>';
		str += '   <th>应用描述</th>';
		str += '   <th>全量间隔</th>';
		str += '   <th>全量最近备份</th>';
		str += '   <th>全量备份状态</th>';
		str += '   <th>全量备份控制</th>';
		str += '   <th>增量间隔</th>';
		str += '   <th>增量最近备份</th>';
		str += '   <th>增量备份状态</th>';
		str += '   <th>增量备份控制</th>';
		str += '</tr></thead>';
		str += '<tbody>';
		for(i in data){
			str += '<tr>';
			str +='<td><input type="checkbox" name="f_id" value="'+data[i]['f_id']+'"></input></td>';
			str += '<td><a target="_blank" href="/db/index/detail?f_ip='+data[i]['f_ip']+'">'+data[i]['f_host']+'</a></td>';
			
			str += '<td>'+data[i]['f_ip']+'：'+data[i]['f_port']+'</td>';
			str += '<td>'+data[i]['f_role_type']+'</td>';
			if(data[i]['f_description'] == null){
				str += '<td></td>';
			}else{
				str += '<td>'+data[i]['f_description']+'</td>';
			}
			if(data[i]['full_bak_time'] == null){
				str += '<td></td>';
			}else{
				str += '<td>'+data[i]['full_bak_time']+'</td>';
			}
			if(data[i]['full_l_bak_time'] == null){
				str += '<td></td>';
			}else{
				str += '<td>'+data[i]['full_l_bak_time']+'</td>';
			}
			if(data[i]['full_bak_status'] == null){
				str += '<td></td>';
			}else{
				str += '<td>'+data[i]['full_bak_status']+'</td>';
			}
			if(data[i]['full_is_backup'] == null){
				str += '<td></td>';
			}else{
				str += '<td>'+data[i]['full_is_backup']+'</td>';
			}
			if(data[i]['incre_bak_time'] == null){
				str += '<td></td>';
			}else{
				str += '<td>'+data[i]['incre_bak_time']+'</td>';
			}
			if(data[i]['incre_l_bak_time'] == null){
				str += '<td></td>';
			}else{
				str += '<td>'+data[i]['incre_l_bak_time']+'</td>';
			}
			if(data[i]['incre_bak_status'] == null){
				str += '<td></td>';
			}else{
				str += '<td>'+data[i]['incre_bak_status']+'</td>';
			}
			if(data[i]['incre_is_backup'] == null){
				str += '<td></td>';
			}else{
				str += '<td>'+data[i]['incre_is_backup']+'</td>';
			}
			
			str += '</tr>';
		}
		str += '</tbody>';
		str += '</table>';
		str += '		</div>';
		str += '		</div>';
		str += '</div>';
		$("#show_data").html(str);
		TableAdvanced.init();
	}
	function selectList(){
		var is_all = $("input[name='is_all']").get(0).checked;
		var	open_list = $("input[name='f_id']");
		
		var is_select = open_list.attr("checked");
		if(is_all == true){
			open_list.attr("checked",true);
		}else{
			open_list.attr("checked",false);
		}
	}
	function showBak(){
		var f_id_str = '';
		var	f_id = $("input[name='f_id']");
		var time = 0;
		f_id.each(function(){
			if($(this).attr("checked")){
				
				f_id_str = $(this).val();
				time = time + 1;
              }
		});
		if(time > 1){
			alert('只可单个录入');
			return false;
		}
		if(f_id_str == ''){
			alert('请选择');
			return false;
		}
		var url = "/db/index/getSingle";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			data:{
				id:f_id_str,
				},
			success: function(data) { 
//				$("#part_1")[0].className = "";
//				$("#part_2")[0].className = "activeTab";
				for(i in data){
					if(data[i]['f_role_type'] == 'master'){
						$("#incre_f_id").html(data[i]['incre_f_id']);
						$("#incre_f_ip").html(data[i]['incre_f_ip']);
						$("#incre_f_role_type").html(data[i]['f_role_type']);
						$("#incre_is_backup").val(data[i]['incre_is_backup']);
						$("#incre_bak_file_addr").val(data[i]['incre_bak_file_addr']);
						$("#incre_bak_file_dir").val(data[i]['incre_bak_file_dir']);
						$("#incre_bak_time").val(data[i]['incre_bak_time']);
						$("#incre_bak_keep_time").val(data[i]['incre_bak_keep_time']);
						$("#incre_bak_local_keep_time").val(data[i]['incre_bak_local_keep_time']);
						$("#show_info").css('display','block');
						$("#show_incre").css('display','block');
						$("#show_full").css('display','none');
					}else if(data[i]['f_role_type'] == 'slave'){
						$("#f_id").html(data[i]['f_id']);
						$("#f_ip").html(data[i]['f_ip']);
						$("#f_role_type").html(data[i]['f_role_type']);
						$("#is_backup").val(data[i]['is_backup']);
						$("#bak_method").val(data[i]['bak_method']);
						$("#bak_dbname").val(data[i]['bak_dbname']);
						$("#bak_file_addr").val(data[i]['bak_file_addr']);
						$("#bak_file_dir").val(data[i]['bak_file_dir']);
						$("#bak_time").val(data[i]['bak_time']);
						$("#bak_keep_time").val(data[i]['bak_keep_time']);
						$("#local_bak_time").val(data[i]['local_bak_time']);
						$("#local_bak_dir").val(data[i]['local_bak_dir']);
						$("#show_info").css('display','block');
						$("#show_incre").css('display','none');
						$("#show_full").css('display','block');
					}
					$("#detail_f_host").html(data[i]['detail_f_host']);
					$("#detail_f_ip").html(data[i]['detail_f_ip']);
					$("#detail_f_port").html(data[i]['detail_f_port']);
					$("#detail_f_sock").html(data[i]['detail_f_sock']);
					$("#detail_f_class").html(data[i]['detail_f_class']);
					$("#detail_f_role_type").html(data[i]['detail_f_role_type']);
					$("#detail_f_cpu_model").html(data[i]['detail_f_cpu_model']);
					$("#detail_f_real_mem_size").html(data[i]['detail_f_real_mem_size']);
					$("#detail_f_raid_level").html(data[i]['detail_f_raid_level']);
					$("#detail_f_os_ver").html(data[i]['detail_f_os_ver']);
					$("#detail_f_mysql_ver").html(data[i]['detail_f_mysql_ver']);
					$("#detail_f_ms_ip").html(data[i]['detail_f_ms_ip']);
					$("#detail_f_engine").html(data[i]['detail_f_engine']);
					$("#detail_f_idc_type").html(data[i]['detail_f_idc_type']);
					$("#detail_f_responsible").html(data[i]['detail_f_responsible']);
					$("#detail_f_strategy").html(data[i]['detail_f_strategy']);
					$("#detail_f_serial").html(data[i]['detail_f_serial']);
					$("#detail_f_model").html(data[i]['detail_f_model']);
					$("#detail_f_dand").html(data[i]['detail_f_dand']);
					$("#detail_f_description").html(data[i]['detail_f_description']);
					$("#detail_f_disk_num").html(data[i]['detail_f_disk_num']);
					$("#detail_f_disk_capacity").html(data[i]['detail_f_disk_capacity']);
					$("#detail_f_os_version").html(data[i]['detail_f_os_version']);
					$("#detail_f_os_core_version").html(data[i]['detail_f_os_core_version']);
					$("#detail_f_model_num").html(data[i]['detail_f_model_num']);
					$("#detail_f_dep").html(data[i]['detail_f_dep']);
					$("#detail_f_dev_ip").html(data[i]['detail_f_dev_ip']);
				}
			},
			error:function() {
				alert("error");
			}
		});
	}
	function insertFull(){
		var f_id = $("#f_id").html();
		var f_ip = $("#f_ip").html();
		var f_role_type = $("#f_role_type").html();
		var is_backup = $("#is_backup").val();
		var bak_method = $("#bak_method").val();
		var bak_dbname = $("#bak_dbname").val();
		var bak_file_addr = $("#bak_file_addr").val();
		var bak_file_dir = $("#bak_file_dir").val();
		var bak_time = $("#bak_time").val();
		var bak_keep_time = $("#bak_keep_time").val();
		var local_bak_time = $("#local_bak_time").val();
		var local_bak_dir = $("#local_bak_dir").val();
		var f_sock = $("#detail_f_sock").html();

		var url = "/db/index/insertFull";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			data:{
				f_id:f_id,
				f_ip:f_ip,
				f_role_type:f_role_type,
				is_backup:is_backup,
				bak_method:bak_method,
				bak_dbname:bak_dbname,
				bak_file_addr:bak_file_addr,
				bak_file_dir:bak_file_dir,
				bak_time:bak_time,
				bak_keep_time:bak_keep_time,
				local_bak_time:local_bak_time,
				local_bak_dir:local_bak_dir,
				f_sock:f_sock
			},
			success: function(data) { 
				alert(data);
				$("#show_info").css('display','none');
			},
			error:function() {
				alert("error");
			}
		});
		
	}
	function insertIncre(){
		var incre_f_id = $("#incre_f_id").html();
		var incre_f_ip = $("#incre_f_ip").html();
		var incre_f_role_type = $("#incre_f_role_type").html();
		var incre_is_backup = $("#incre_is_backup").val();
		var incre_bak_file_addr = $("#incre_bak_file_addr").val();
		var incre_bak_file_dir = $("#incre_bak_file_dir").val();
		var incre_bak_time = $("#incre_bak_time").val();
		var incre_bak_keep_time = $("#incre_bak_keep_time").val();
		var incre_bak_local_keep_time = $("#incre_bak_local_keep_time").val();
		var incre_f_sock = $("#detail_f_sock").html();

		var url = "/db/index/insertIncre";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			data:{
				incre_f_id:incre_f_id,
				incre_f_ip:incre_f_ip,
				incre_f_role_type:incre_f_role_type,
				incre_is_backup:incre_is_backup,
				incre_bak_file_addr:incre_bak_file_addr,
				incre_bak_file_dir:incre_bak_file_dir,
				incre_bak_time:incre_bak_time,
				incre_bak_keep_time:incre_bak_keep_time,
				incre_bak_local_keep_time:incre_bak_local_keep_time,
				incre_f_sock:incre_f_sock
			},
			success: function(data) { 
				alert(data);
				$("#show_info").css('display','none');
			},
			error:function() {
				alert("error");
			}
		});
		
	}
	function getFullLog(){
		var url = "/db/index/getFullLog";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			success: function(data) { 
				drawFullLog(data);
			},
			error:function() {
				alert("error");
			}
		});
	}
	
	function drawFullLog(data){
		var str = '';
		str += '<div class="col-md-12">';
		str += '	<div class="portlet box blue">';
		str += '	<div class="portlet-title">';
		str += '		<div class="caption"><i class="fa fa-globe"></i>备份信息查看</div>';
		str += '		<div class="actions">';
		str += '			<div class="btn-group">';
		str += '				<a class="btn default" href="#" data-toggle="dropdown">';
		str += '				Columns';
		str += '				<i class="fa fa-angle-down"></i>';
		str += '				</a>';
		str += '				<div id="sample_2_column_toggler" class="dropdown-menu hold-on-click dropdown-checkboxes pull-right">';
							
		str += '					<label><input type="checkbox" checked data-column="0">IP</label>';
		str += '					<label><input type="checkbox" checked data-column="1">M/S IP</label>';
		str += '					<label><input type="checkbox" checked data-column="2">分类</label>';
		str += '					<label><input type="checkbox" checked data-column="3">备份开始时间</label>';
		str += '					<label><input type="checkbox" checked data-column="4">备份结束时间</label>';
		str += '					<label><input type="checkbox" checked data-column="5">大小(M)</label>';
		str += '					<label><input type="checkbox" checked data-column="6">备份目的地</label>';
		str += '					<label><input type="checkbox" checked data-column="7">备份所在目录</label>';
		str += '					<label><input type="checkbox" checked data-column="8">备份结果</label>';
		str += '				</div>';
		str += '			</div>';
		str += '		</div>';
		str += '		</div>';
		str += '	<div class="portlet-body">';
		
		str += '<table class="table table-striped table-bordered table-hover table-full-width" id="sample_2">';
		str += '<thead><tr>';
		
		str += '   <th>IP</th>';
		str += '   <th>M/S IP</th>';
		str += '   <th>分类</th>';
		str += '   <th>备份开始时间</th>';
		str += '   <th>备份结束时间</th>';
		str += '   <th>大小(M)</th>';
		str += '   <th>备份目的地</th>';
		str += '   <th>备份所在目录</th>';
		str += '   <th>备份结果</th>';
		str += '</tr></thead>';
		str += '<tbody>';
		for(i in data){
			str += '<tr>';
			str += '<td>'+data[i]['f_ip']+'</td>';
			str += '<td>'+data[i]['f_ms_ip']+'</td>';
			str += '<td>'+data[i]['f_class']+'</td>';
			str += '<td>'+data[i]['f_bak_begin_time']+'</td>';
			str += '<td>'+data[i]['f_bak_end_time']+'</td>';
			str += '<td>'+data[i]['f_bak_size']+'</td>';
			str += '<td>'+data[i]['f_bin_bak_dest']+'</td>';
			str += '<td></td>';
			str += '<td>'+data[i]['f_bak_remark']+'</td>';
			str += '</tr>';
		}
		str += '</tbody>';
		str += '</table>';
		str += '		</div>';
		str += '		</div>';
		str += '</div>';
		$("#show_data").html(str);
	}
	function getIncreaseLog(){
		var url = "/db/index/getIncreaseLog";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			success: function(data) { 
				drawIncreaseLog(data);
			},
			error:function() {
				alert("error");
			}
		});
	}
	
	function drawIncreaseLog(data){
		var str = '';
		str += '<div class="col-md-12">';
		str += '	<div class="portlet box blue">';
		str += '	<div class="portlet-title">';
		str += '		<div class="caption"><i class="fa fa-globe"></i>备份信息查看</div>';
		str += '		<div class="actions">';
		str += '			<div class="btn-group">';
		str += '				<a class="btn default" href="#" data-toggle="dropdown">';
		str += '				Columns';
		str += '				<i class="fa fa-angle-down"></i>';
		str += '				</a>';
		str += '				<div id="sample_2_column_toggler" class="dropdown-menu hold-on-click dropdown-checkboxes pull-right">';
							
		str += '					<label><input type="checkbox" checked data-column="0">IP</label>';
		str += '					<label><input type="checkbox" checked data-column="1">M/S IP</label>';
		str += '					<label><input type="checkbox" checked data-column="2">分类</label>';
		str += '					<label><input type="checkbox" checked data-column="3">备份开始时间</label>';
		str += '					<label><input type="checkbox" checked data-column="4">备份结束时间</label>';
		str += '					<label><input type="checkbox" checked data-column="5">大小(M)</label>';
		str += '					<label><input type="checkbox" checked data-column="6">备份目的地</label>';
		str += '					<label><input type="checkbox" checked data-column="7">备份所在目录</label>';
		str += '					<label><input type="checkbox" checked data-column="8">备份结果</label>';
		str += '				</div>';
		str += '			</div>';
		str += '		</div>';
		str += '		</div>';
		str += '	<div class="portlet-body">';
		
		str += '<table class="table table-striped table-bordered table-hover table-full-width" id="sample_2">';
		str += '<thead><tr>';
		
		str += '   <th>IP</th>';
		str += '   <th>M/S IP</th>';
		str += '   <th>分类</th>';
		str += '   <th>备份开始时间</th>';
		str += '   <th>备份结束时间</th>';
		str += '   <th>大小(M)</th>';
		str += '   <th>备份目的地</th>';
		str += '   <th>备份所在目录</th>';
		str += '   <th>备份结果</th>';
		str += '</tr></thead>';
		str += '<tbody>';
		for(i in data){
			str += '<tr>';
			str += '<td>'+data[i]['f_ip']+'</td>';
			str += '<td>'+data[i]['f_ms_ip']+'</td>';
			if(data[i]['f_class'] == 1){
				str += '<td>海贼无双</td>';
			}else if(data[i]['f_class'] == 3){
				str += '<td>街机武侠</td>';
			}else if(data[i]['f_class'] == 4){
				str += '<td>绝战海贼王</td>';
			}
			
			str += '<td>'+data[i]['f_bak_begin_time']+'</td>';
			str += '<td>'+data[i]['f_bak_end_time']+'</td>';
			str += '<td>'+data[i]['f_bak_size']+'</td>';
			str += '<td>'+data[i]['f_bin_bak_dest']+'</td>';
			str += '<td></td>';
			str += '<td>'+data[i]['f_bak_remark']+'</td>';
			str += '</tr>';
		}
		str += '</tbody>';
		str += '</table>';
		str += '		</div>';
		str += '		</div>';
		str += '</div>';
		str += '<br>';
		$("#show_data").html(str);
	}
	function countType(f_class){
		var url = "/db/index/getCount";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			success: function(data) {
				drawCount(data);
			},
			error:function() {
				alert("error");
			}
		});
	}
	function drawCount(data){
		var str = '';
		var num = 1;
		str += '<div class="col-md-12">';
		str += '	<div class="portlet box blue">';
		str += '	<div class="portlet-title">';
		str += '		<div class="caption"><i class="fa fa-globe"></i>备份信息查看</div>';
		str += '		<div class="actions">';
		str += '			<div class="btn-group">';
		str += '				<a class="btn default" href="#" data-toggle="dropdown">';
		str += '				Columns';
		str += '				<i class="fa fa-angle-down"></i>';
		str += '				</a>';
		str += '				<div id="sample_2_column_toggler" class="dropdown-menu hold-on-click dropdown-checkboxes pull-right">';
							
		str += '					<label><input type="checkbox" checked data-column="0">序号</label>';
		str += '					<label><input type="checkbox" checked data-column="1">内网IP</label>';
		str += '					<label><input type="checkbox" checked data-column="2">在线人数</label>';
		str += '					<label><input type="checkbox" checked data-column="3">剩余空间</label>';
		str += '					<label><input type="checkbox" checked data-column="4">区服数量</label>';
		str += '					<label><input type="checkbox" checked data-column="5">引擎类型</label>';
		str += '					<label><input type="checkbox" checked data-column="6">监听IP和端口</label>';
		str += '					<label><input type="checkbox" checked data-column="7">M/S</label>';
		str += '					<label><input type="checkbox" checked data-column="8">实例个数</label>';
		str += '					<label><input type="checkbox" checked data-column="8">用途/备注</label>';
		str += '				</div>';
		str += '			</div>';
		str += '		</div>';
		str += '		</div>';
		str += '	<div class="portlet-body">';
		
		str += '<table class="table table-striped table-bordered table-hover table-full-width" id="sample_2">';
		str += '<thead><tr>';
		str += '   <th>序号</th>';
		str += '   <th>内网IP</th>';
		str += '   <th>在线人数</th>';
		str += '   <th>剩余空间</th>';
		str += '   <th>区服数量</th>';
		str += '   <th>引擎类型</th>';
		str += '   <th>监听IP和端口</th>';
		str += '   <th>M/S</th>';
		str += '   <th>实例个数</th>';
		str += '   <th width="7%">用途/备注</th>';
		str += '</tr></thead>';
		str += '<tbody>';
		for(i in data){
			str += '<tr>';
			str += '<td>'+num+'</td>';
			str += '<td>'+data[i]['f_ip']+'</td>';
			str += '<td>'+data[i]['online']+'</td>';
			str += '<td>'+data[i]['left']+'</td>';
			str += '<td>'+data[i]['num']+'</td>';
			str += '<td>'+data[i]['f_engine']+'</td>';
			str += '<td>'+data[i]['f_port']+'</td>';
			str += '<td>'+data[i]['f_role_type']+'</td>';
			str += '<td>'+data[i]['items']+'</td>';
			if(data[i]['f_description'] == null){
				str += '<td></td>';
			}else{
				str += '<td>'+data[i]['f_description']+'</td>';
			}
			
			str += '</tr>';
			num = num + 1;
		}
		str += '</tbody>';
		str += '</table>';
		str += '		</div>';
		str += '		</div>';
		str += '</div>';
		str += '<br>';
		$("#show_data").html(str);
	}
	function getTopInfo(){
		var time_type = $("#time_type").val();
		var value_type = $("#value_type").val();
		var begin = $("#begin").val();
		if(time_type == ''){
			alert('请选择时间类型');
			return false;
		}
		if(value_type == ''){
			alert('请选择取值类型');
			return false;
		}
		if(begin == ''){
			alert('请选择时间');
			return false;
		}
		var f_arr = new Array();
		
		$('input[type="checkbox"][name="f_type"]:checked').each(function(){   
			f_arr.push($(this).val());
		})
		if(f_arr.length == 0){
		    alert('请选择查询类型');
			return false;
		}
		f_arr.join(",");
		
		var url = "/db/index/getTop";	
		$.ajax({
			type:'post',
			url: url,
			data:{
				time_type:time_type,
				value_type:value_type,
				begin:begin,
				f_type:f_arr
			},
			dataType: 'json',
			success: function(data) {
				drawTopInfo(data);
			},
			error:function() {
				alert("error");
			}
		});
	}
	function drawTopInfo(data){
		var str = '';
		for(i in data){
			str += '<div class="col-md-6">';
			str += '<div class="portlet box red">';
			str += '	<div class="portlet-title">';
			str += '		<div class="caption"><i class="fa fa-cogs"></i>'+i+'</div>';
			str += '		<div class="tools">';
			str += '			<a href="javascript:;" class="collapse"></a>';
			str += '			<a href="#portlet-config" data-toggle="modal" class="config"></a>';
			str += '			<a href="javascript:;" class="reload"></a>';
			str += '		</div>';
			str += '	</div>';
			str += '	<div class="portlet-body">';
			str += '		<div class="table-responsive">';
			str += '			<table class="table table-hover">';
			str += '				<thead>';
			str += '				</thead>';
			str += '				<tbody>';
			for(j in data[i]){
				str += '<tr>';
				str += '<td>'+j+'</td>';
				str += '<td>'+data[i][j]+'</td>';
				str += '</tr>';
			}
										
			str += '				</tbody>';
			str += '			</table>';
			str += '		</div>';
			str += '	</div>';
			str += '</div>';
			str += '</div>';
		}
		$("#show_data").html(str);
	}

