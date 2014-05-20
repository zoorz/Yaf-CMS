	
	function drawSelect(data,column){
		var str = '';
		for(i in data){
			str = '<option value="'+data[i][column]+'">'+data[i][column]+'</option>';
			$("#server_"+column).append(str);
		}
	}
	function getData(type){
		var app_array = new Array();   
		$('input[type="checkbox"][name="server_app"]:checked').each(function(){   
			app_array.push($(this).val());    
		});
		var app = app_array.join(",");
		var game_id = $("#server_game_id").val(); 
		var ip = $("#server_ip").val();
		var extip = $("#server_extIp").val();
		var mem = $("#server_mem").val();
		var disk = $("#server_disk").val();
		var idc = $("#server_idc").val();
		var cabinet = $("#server_cabinet").val();
		var model = $("#server_model").val();
		var supervisor = $("#server_supervisor").val();
		var status = $("#server_status").val();
		var zones = $("#server_zones").val();
		var remark = $("#server_remark").val();
		var property_right = $("#server_right").val();
		var url = "/server/index/getData";	
		$.ajax({
			type:'post',
			url: url,
			data:{
				game_id:game_id,
				ip:ip,
				extip:extip,
				mem:mem,
				disk:disk,
				idc:idc,
				cabinet:cabinet,
				model:model,
				supervisor:supervisor,
				app:app,
				status:status,
				zones:zones,
				remark:remark,
				property_right:property_right
				},
			dataType: 'json',
			// beforeSend:function() {
			// 	drawLoading();
			// },
			success: function(data) { 
				drawData(data,game_id);
			},
			error:function() {
				alert("error");
			}
		});
		
	}
	function drawLoading(){
		var str = '';
		str += '<div class="progress progress-striped active">';
		str += '	<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">';
		str += '		<span class="sr-only">80% Complete (danger)</span>';
		str += '	</div>';
		str += '</div>';
		$("#show_data").html(str);	
		UIGeneral.init();						
	}
	function selectAll(){
		var is_all = $("input[name='is_all']").get(0).checked;
		var	open_list = $("input[name='f_ip']");
		
		var is_select = open_list.attr("checked");
		if(is_all == true){
			open_list.attr("checked",true);
		}else{
			open_list.attr("checked",false);
		}
	}
	function drawData(data,game_id){
		var str = '';
		var num = 1;
		str += '<div class="col-md-12">';
		str += '	<div class="portlet box blue">';
		str += '	<div class="portlet-title">';
		str += '		<div class="caption"><i class="fa fa-globe"></i>服务器信息查看&nbsp;&nbsp;&nbsp;';
		//str += '			<select id="monitor_game_id" name="monitor_game_id">';

		// if(game_id == 1){
		// 	str += '				<option value="1" selected="selected">海贼无双</option>';
		// }else{
		// 	str += '				<option value="1">海贼无双</option>';
		// }
		// if(game_id == 3){
		// 	str += '				<option value="3" selected="selected">街机武侠</option>';
		// }else{
		// 	str += '				<option value="3">街机武侠</option>';
		// }
		// if(game_id == 4){
		// 	str += '				<option value="4" selected="selected">决战海贼王</option>';
		// }else{
		// 	str += '				<option value="4">决战海贼王</option>';
		// }
		// if(game_id == 5){
		// 	str += '				<option value="5" selected="selected">公共机器</option>';
		// }else{
		// 	str += '				<option value="5">公共机器</option>';
		// }
		
		
		// str += '			</select>';
		// str += '			<input type="button" class="btn btn-success" value="选择" onclick="getData(\'all\');"></input>';
		if(game_id == 5){
			str += '			&nbsp;&nbsp;&nbsp;<a id="check" class="btn default" style="margin-top:5px;" href="#monitor" onclick="doMonitor(\'sync_jj_monitor\',\'c\');" data-toggle="modal">监控版本检查</a>&nbsp;&nbsp;&nbsp;<a id="syn" class="btn default" style="margin-top:5px;" href="#monitor" onclick="doMonitor(\'sync_jj_monitor\',\'r\');" data-toggle="modal">监控同步</a>&nbsp;&nbsp;&nbsp;';
			str += '			&nbsp;&nbsp;&nbsp;<a id="check" class="btn default" style="margin-top:5px;" href="#monitor" onclick="doMonitor(\'sync_jj_area_manage\',\'c\');" data-toggle="modal">区服代码版本检查</a>&nbsp;&nbsp;&nbsp;<a id="syn" class="btn default" style="margin-top:5px;" href="#monitor" onclick="doMonitor(\'sync_jj_area_manage\',\'r\');" data-toggle="modal">区服代码同步</a>&nbsp;&nbsp;&nbsp;';
			str += '			&nbsp;&nbsp;&nbsp;<a id="check" class="btn default" style="margin-top:5px;" href="#server_resourse" onclick="showServerResourse(\'sync_jj_resource\',\'c\');" data-toggle="modal">服务器资源检查</a>&nbsp;&nbsp;&nbsp;<a id="syn" class="btn default" style="margin-top:5px;" href="#server_resourse" onclick="showServerResourse(\'sync_jj_resource\',\'r\');" data-toggle="modal">服务器资源同步</a>&nbsp;&nbsp;&nbsp;';
			str += '			&nbsp;&nbsp;&nbsp;<a id="check" class="btn default" style="margin-top:5px;" href="#monitor" onclick="doMonitor(\'sync_jj_ini\',\'c\');" data-toggle="modal">配置文件版本检查</a>&nbsp;&nbsp;&nbsp;<a id="syn" class="btn default" style="margin-top:5px;" href="#monitor" onclick="doMonitor(\'sync_jj_ini\',\'r\');" data-toggle="modal">配置文件同步</a>&nbsp;&nbsp;&nbsp;';
		}

		str += '		</div>';
		str += '		<div class="actions">';
		str += '			<div class="btn-group">';
		str += '				<a class="btn default" href="#" data-toggle="dropdown">';
		str += '				Columns';
		str += '				<i class="fa fa-angle-down"></i>';
		str += '				</a>';
		str += '				<div id="sample_2_column_toggler" class="dropdown-menu hold-on-click dropdown-checkboxes pull-right">';
							
		str += '					<label><input type="checkbox" data-column="0">序号</label>';
		str += '					<label><input type="checkbox" checked data-column="1">内网IP</label>';
		str += '					<label><input type="checkbox" checked data-column="2">内网IP</label>';
		str += '					<label><input type="checkbox" checked data-column="3">外网IP</label>';
		str += '					<label><input type="checkbox" checked data-column="4">CPU</label>';
		str += '					<label><input type="checkbox" checked data-column="5">内存</label>';
		str += '					<label><input type="checkbox" checked data-column="6">硬盘</label>';
		str += '					<label><input type="checkbox" checked data-column="7">IDC</label>';
		str += '					<label><input type="checkbox" checked data-column="8">机柜</label>';
		str += '					<label><input type="checkbox" checked data-column="9">型号</label>';
		str += '					<label><input type="checkbox" checked data-column="10">负责人</label>';
		str += '					<label><input type="checkbox" checked data-column="11">用途</label>';
		str += '					<label><input type="checkbox" checked data-column="12">硬件产权</label>';
		str += '					<label><input type="checkbox" checked data-column="13">状态</label>';
		str += '					<label><input type="checkbox" checked data-column="14">区服数量</label>';
		str += '					<label><input type="checkbox" checked data-column="15">区服</label>';
		str += '					<label><input type="checkbox" checked data-column="16">启用时间</label>';
		str += '					<label><input type="checkbox" checked data-column="17">最后修改时间</label>';
		str += '					<label><input type="checkbox" checked data-column="18">备注</label>';
		str += '					<label><input type="checkbox" checked data-column="19">操作</label>';
		str += '				</div>';
		str += '			</div>';
		str += '			</div>';
		str += '		</div>';
		str += '	<div class="portlet-body">';
		
		str += '<table class="table table-striped table-bordered table-hover table-full-width" id="sample_2" style="word-break:break-all; word-wrap:break-all;white-space:nowrap;">';
		str += '<thead><tr>';
		str += '   <th><input type="checkbox" name="is_all" onclick="selectAll();"></input></th>';
		str += '   <th>游戏</th>';
		str += '   <th>内网IP</th>';
		str += '   <th>外网IP</th>';
		str += '   <th>CPU</th>';
		str += '   <th>内存</th>';
		str += '   <th>硬盘</th>';
		str += '   <th>IDC</th>';
		str += '   <th>机柜</th>';
		str += '   <th>型号</th>';
		str += '   <th>负责人</th>';
		str += '   <th>用途</th>';
		str += '   <th>硬件产权</th>';
		str += '   <th>单价</th>';
		str += '   <th>状态</th>';
		str += '   <th>区服数量</th>';
		str += '   <th>区服</th>';
		str += '   <th>启用时间</th>';
		str += '   <th>最后修改时间</th>';
		str += '   <th>备注</th>';
		str += '   <th>操作</th>';
		str += '</tr></thead>';
		str += '<tbody>';
		
		//data['all_page'] = null;
		for(i in data){
			var all_page = data['all_page'];
			
			$("div.all_page").html(all_page);
			if(i == 'all_page'){
				continue;
			}
			var all_server = data['all_server'];
			
			$("#server_num").html(all_server);
			if(i == 'all_server'){
				continue;
			}
			var status = '';
			var game = '';
			if(data[i]['game_id'] == 1){
				game = '海贼无双';
			}else if(data[i]['game_id'] == 5){
				game = '街机武侠';
			}else if(data[i]['game_id'] == 4){
				game = '决战海贼王';
			}else if(data[i]['game_id'] == 999){
				game = '公共';
			}
			if(data[i]['status'] == 1){
				status = '在线';
			}
			if(data[i]['status'] == 2){
				status = '闲置';
			}
			if(data[i]['status'] == 3){
				status = '待升级';
			}
			if(data[i]['status'] == 4){
				status = '待下架';
			}
			if(data[i]['status'] == 5){
				status = '已下架';
			}
			var app = '';
			
			if(data[i]['app'] == 1){
				app = '宁波电信服务器';
			}else if(data[i]['app'] == 2){
				app = '宁波网通服务器';
			}else if(data[i]['app'] == 3){
				app = '宁波电信数据库';
			}else if(data[i]['app'] == 4){
				app = '宁波网通数据库';
			}else if(data[i]['app'] == 5){
				app = '鲁谷BGP服务器';
			}else if(data[i]['app'] == 6){
				app = '鲁谷BGP数据库';
			}else if(data[i]['app'] == 7){
				app = '宁波电信公共服务器';
			}else if(data[i]['app'] == 8){
				app = '宁波网通公共服务器';
			}else if(data[i]['app'] == 9){
				app = '鲁谷BGP公共服务器';
			}else if(data[i]['app'] == 10){
				app = '办公机房';
			}
			var property_right = '';
			if(data[i]['property_right'] == 1){
				property_right = '公司自有';
			}else if(data[i]['property_right'] == 2){
				property_right = '租用';
			}
			str += '<tr title="'+data[i]['ip']+'">';
			str += '<td><input type="checkbox" name="f_ip" value="'+data[i]['ip']+'"></input></td>';
			str += '<td>'+game+'</td>';
			str += '<td><a href="javascript:void(0);" onclick="single_data(\''+data[i]['ip']+'\');">'+data[i]['ip']+'</a></td>';
			str += '<td>'+data[i]['extIp']+'</td>';
			str += '<td>'+data[i]['cpu']+'</td>';
			str += '<td>'+data[i]['mem']+'</td>';
			str += '<td>'+data[i]['disk']+'</td>';
			str += '<td>'+data[i]['idc']+'</td>';
			str += '<td>'+data[i]['cabinet']+'</td>';
			str += '<td>'+data[i]['model']+'</td>';
			str += '<td>'+data[i]['supervisor']+'</td>';
			str += '<td>'+app+'</td>';
			str += '<td>'+property_right+'</td>';
			str += '<td>'+data[i]['rent']+'</td>';
			str += '<td>'+status+'</td>';
			str += '<td style="width:50px;">'+data[i]['zones']+'</td>';
			str += '<td>';

			for(m in data[i]['runningAreas']){
				if (data[i]['runningAreas'][m]['game_s_area'] == undefined) {
					str += '';
				}else{
					str += '<a href="javascript:void(0)" onclick="getAreaInfo('+data[i]['game_id']+','+data[i]['runningAreas'][m]['game_s_area']+');"><font color="red">'+data[i]['runningAreas'][m]['game_s_area']+'&nbsp'+'</font></a>';
				}
				
				
			}
			
			for(n in data[i]['stopAreas']){
				if (data[i]['stopAreas'][n]['game_s_area'] == undefined) {
					str += '';
				}else{
					str += '<a href="javascript:void(0)" onclick="getAreaInfo('+data[i]['game_id']+','+data[i]['stopAreas'][n]['game_s_area']+');"><font color="blue">'+data[i]['stopAreas'][n]['game_s_area']+'&nbsp'+'</font></a>';
				}
				
			}
			
			str += '</td>';

			
			str += '<td>'+data[i]['stime']+'</td>';
			str += '<td>'+data[i]['mtime']+'</td>';
			str += '<td>'+data[i]['remark']+'</td>';
			str += '<td><a href="javascript:void(0)" onclick="deleteData(\''+data[i]['id']+'\');">删除</a>&nbsp&nbsp<a href="javascript:void(0)" onclick="giveData(\''+data[i]['static_id']+'\');">修改</a>&nbsp&nbsp<a href="javascript:void(0)" onclick="showCacti(\''+data[i]['ip']+'\');">监控</a></td>';
			str += '</tr>';
			num = num + 1;
		}
		str += '</tbody>';
		str += '</table>';
		str += '		</div>';
		str += '		</div>';
		str += '</div>';
		$("#show_data").html(str);
		TableAdvanced.init();

	}
	function chooseGame(){
		var game_id = $("#monitor_game_id").val();
		$("#server_game_id").val(game_id);
		getData();

		// $("#monitor_game_id").val(game_id);
		// if(game_id == 1){
		// 	$("#check").css('display','none');
		// 	$("#syn").css('display','none');
		// }else if(game_id == 3){
		// 	alert(1);
		// 	$("#check").css('display','inline-block');
		// 	$("#syn").css('display','inline-block');
		// 	return false;
		// }else if(game_id == 4){
		// 	$("#check").css('display','none');
		// 	$("#syn").css('display','none');
		// }

	}
	function doMonitor(type,param){
		var ip_arr = new Array();
		var ip_str = '';
		$('input[type="checkbox"][name="f_ip"]:checked').each(function(){   
			ip_arr.push($(this).val());     
		});
		ip_str = ip_arr.join(',');
		
		var url = "/server/index/doMonitor";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			data:{
				ip:ip_str,
				type:type,
				param:param
			},
			beforeSend:function(){
				$("#show_monitor").html('正在查询中...');
			},
			success: function(data) { 
				var str = '';
				for(i in data){
					str += '<span>'+data[i]+'</span><br>';
				}
				$("#show_monitor").html(str);
			},
			error:function() {
				alert("error");
			}
		});
	}
	function showServerResourse(type,param){
		$("#resource_result").html('');
		var url = "/area/index/getLatestVersion";
		$.ajax({
			type: 'post',
			url: url,
			data: 'type='+'server',
			dataType: 'json',
			success: function(data) {
				if(data == 1) {
					alert("获取版本号失败！");
				}else {
					var str = '';
					for(var i in data) {
						str +='		<option value="'+data[i]+'">'+data[i]+'</option>';
					}
					$("#server_version").html(str);
					$("#shell_type").val(type);
					$("#shell_param").val(param);
				}
			},
			error: function() {
				alert("系统繁忙！");
			}
		});
	}
	function saveData(){
		var game_id = $("#game_id").val();
		var ip = $("#ip").val();
		var extip = $("#extip").val();
		var cpu = $("#cpu").val();
		var mem = $("#mem").val();
		var disk = $("#disk").val();
		var idc = $("#idc").val();
		var cabinet = $("#cabinet").val();
		var model = $("#model").val();
		var supervisor = $("#supervisor").val();
		var app = $("#app").val();
		var status = $("#status").val();
		var stime = $("#datepickerFrom").val();
		var remark = $("#remark").val();
		var property_right = $("#property_right").val();
		if(property_right == ''){
			alert('请选择硬件产权');
			return false;	
		}
		if(ip == ''){
			alert('请输入内网ip');
			return false;	
		}
		if(cpu == ''){
			alert('请输入cpu');
			return false;	
		}
		if(mem == ''){
			alert('请输入内存');
			return false;	
		}
		if(disk == ''){
			alert('请输入硬盘信息');
			return false;	
		}
		if(idc == ''){
			alert('请输入idc信息');
			return false;	
		}
		if(cabinet == ''){
			alert('请输入机柜');
			return false;	
		}
		if(model == ''){
			alert('请输入型号');
			return false;	
		}
		if(supervisor == ''){
			alert('请输入负责人');
			return false;	
		}
		if(app == ''){
			alert('请输入用途');
			return false;	
		}
		if(stime == ''){
			alert('请输入启用时间');
			return false;	
		}
		// if(mtime == ''){
		// 	alert('请输入最后修改时间');
		// 	return false;	
		// }
		var url = "/server/index/saveData";	
		$.ajax({
			type:'post',
			url: url,
			data:{
				game_id:game_id,
				ip:ip,
				extip:extip,
				cpu:cpu,
				mem:mem,
				disk:disk,
				idc:idc,
				cabinet:cabinet,
				model:model,
				supervisor:supervisor,
				app:app,
				status:status,
				stime:stime,
				remark:remark,
				property_right:property_right
				},
			//data:'id='+id+'&yid='+yid+'&status='+status+'&game_start_time='+$('#game_start_time').val()+'&game_end_time='+$('#game_end_time').val()+'&interval_time='+$('#interval_time').val()+'&go_md='+go_md+'&s_area='+s_area+'&content='+$('#content').val()+'&href='+$('#href').val(),
			dataType: 'json',
			success: function(data) { 
				alert(data);
			},
			error:function() {
				alert("error");
			}
		});
	}
	function single_data(ip){
		getDynamic(ip);
	}
	$("#makeExcel").mouseover(function(){
		
		var app_array = new Array();   
		$('input:checkbox[name=server_app][checked]').each(function(){   
			
			//	area += $(this).val()+",";
			app_array.push($(this).val());     
		});
		var app = app_array.join(",");
		$("div.page_at").html(1);
		var game_id = $("#server_game_id").val(); 
		var ip = $("#server_ip").val();
		var extip = $("#server_extIp").val();
		var mem = $("#server_mem").val();
		var disk = $("#server_disk").val();
		var idc = $("#server_idc").val();
		var cabinet = $("#server_cabinet").val();
		var model = $("#server_model").val();
		var supervisor = $("#server_supervisor").val();
		var status = $("#server_status").val();
		var zones = $("#server_zones").val();
		var remark = $("#server_remark").val();
		var property_right = $("#server_right").val();
		$("#makeExcel").attr('href','/server/index/makeExcel?game_id='+game_id+'&ip='+ip+'&mem='+mem+'&disk='+disk+'&idc='+idc+'&cabinet='+cabinet+'&model='+model+'&supervisor='+supervisor+'&status='+status+'&zones='+zones+'&remark='+remark+'&property_right='+property_right+'&app='+app); 
	});
	function getDynamic(ip){
		var url = "/server/index/getDynamic";	
		$.ajax({
			type:'post',
			url: url,
			data:{
				ip:ip
				},
			dataType: 'json',
			success: function(data) { 
				drawDynamic(data);
				if(ip != ''){
					drawOnlinePic(ip);
				}
			},
			error:function() {
				alert("error");
			}
		});
	}
	function drawOnlinePic(ip){
		var url = '/server/index/getOnlineData?ip='+ip;
		$.getScript(url,function(data) {
			if(data != '' && data != null) {
				$.jqplot.config.enablePlugins = true;
				var plot2 = $.jqplot('ip_online', [firstday,yesterday,today], {

					title: {
						show: true,
						text: '在线曲线',
						//fontFamily: "宋体, Arial",
						fontSize: "14px"
						//textColor: "#139c38"
					},

					// series默认配置
					seriesDefaults: {
						lineWidth: 0.5,
						showMarker: true,
						markerOptions: {
							size: 2
						},
						rendererOptions: {
							smooth: true
						}
					},
					
					
						//当多个series, 可分别配置
						series:[
							{label: '前天'},
							{label: '昨天'},
							{label: '今天'},
						],
					

					// 图表说明
					legend: {	
						renderer: $.jqplot.EnhancedLegendRenderer,	// 渲染器
						show:true,									//
						location: 's',								// 位置：nw, n, ne, e, se, s, sw, w
						placement: 'outsideGrid',					// inside, outside, insideGrid, outsideGrid
						fontSize: '9pt',							//
						//rowSpacing: '1em',						//
						//labels: ['今天', '上周'],					// 如果不设置，则显示series中设置内容
						rendererOptions: {numberRows: 1}			// 在同一行显示
					},

					// 
					axesDefaults: {
						tickOptions: {
							showMark: false,
							fontSize: '9pt'
							//showGridline: false,
						},
						labelOptions: {
							fontSize: '9pt'
						}
					},

					axes:{
						xaxis: {
							renderer:$.jqplot.DateAxisRenderer,
							//tickRenderer: $.jqplot.CanvasAxisTickRenderer,
							labelRenderer: $.jqplot.CanvasAxisLabelRenderer, 
							tickInterval: '2 hour',
							tickOptions: {
								formatString: '%H:%M',
								showGridline: false
							},
							min: "00:00",
							max: "23:59"
						},
						yaxis: {
							/*
							renderer: $.jqplot.LogAxisRenderer,
							rendererOptions: {
							},
							tickRenderer: $.jqplot.CanvasAxisTickRenderer,
							*/
							min: 0, 
							tickOptions: {formatString:  '%.0f'}
						}
					},
					highlighter: {
						bringSeriesToFront: true,
						show: true,
						sizeAdjust: 5,
						showTooltip: true,
						tooltipLocation: 'ne',
						tooltipOffset: 9,
						formatString:'<span style="color:red;font-size:12px;" mce_style="color:red;">#serieLabel#&nbsp%s&nbsp %.0f</span>' // IE BUG %d前面必须加上空格
						//useAxesFormatters: false,
						//tooltipFormatString: '<b><i><span style="color:red;" mce_style="color:red;">hello</span></i></b> %.2f'
					},

					/*
					grid: {
						background: 'rgba(57,57,57,0.0)',
						drawBorder: false,
						shadow: false,
						gridLineColor: '#666666',
						gridLineWidth: 1
					},
					*/

					cursor:  {
						show: false
					}
				});
			}else {
				$('#ip_online').text('no data');
			}
		});
	}
	function drawDynamic(data){
		var str = '';
		str += '<div class="col-md-12">';
		str += '	<div class="portlet box blue">';
		str += '	<div class="portlet-title">';
		str += '		<div class="caption"><i class="fa fa-globe"></i>服务器动态信息</div>';
		str += '		<div class="actions">';
		str += '			<div class="btn-group">';
		str += '				<a class="btn default" href="#" data-toggle="dropdown">';
		str += '				Columns';
		str += '				<i class="fa fa-angle-down"></i>';
		str += '				</a>';
		str += '				<div id="sample_2_column_toggler" class="dropdown-menu hold-on-click dropdown-checkboxes pull-right">';
							
		str += '					<label><input type="checkbox" checked data-column="0">IP</label>';
		str += '					<label><input type="checkbox" checked data-column="1">在线人数</label>';
		str += '					<label><input type="checkbox" checked data-column="2">区服个数</label>';
		str += '					<label><input type="checkbox" checked data-column="3">空闲内存(G)</label>';
		str += '					<label><input type="checkbox" checked data-column="4">使用内存(G)</label>';
		str += '					<label><input type="checkbox" checked data-column="5">根分区空闲(G)</label>';
		str += '					<label><input type="checkbox" checked data-column="6">根分区使用(G)</label>';
		str += '					<label><input type="checkbox" checked data-column="7">app空闲(G)</label>';
		str += '					<label><input type="checkbox" checked data-column="8">app使用(G)</label>';
		str += '					<label><input type="checkbox" checked data-column="9">cpuuse</label>';
		str += '					<label><input type="checkbox" checked data-column="10">iowait</label>';
		str += '					<label><input type="checkbox" checked data-column="11">load</label>';
		str += '				</div>';
		str += '			</div>';
		str += '		</div>';
		str += '		</div>';
		str += '	<div class="portlet-body">';
		
		str += '<table class="table table-striped table-bordered table-hover table-full-width" id="sample_2" style="word-break:break-all; word-wrap:break-all;">';
		str += '<thead><tr>';
		str += '   <th>IP</th>';
		str += '   <th>在线人数</th>';
		str += '   <th>区服个数</th>';
		str += '   <th>空闲内存(G)</th>';
		str += '   <th>使用内存(G)</th>';
		str += '   <th>根分区空闲(G)</th>';
		str += '   <th>根分区使用(G)</th>';
		str += '   <th>app空闲(G)</th>';
		str += '   <th>app使用(G)</th>';
		str += '   <th>cpuuse</th>';
		str += '   <th>iowait</th>';
		str += '   <th>load</th>';
		str += '</tr></thead>';
		str += '<tbody>';
		for(i in data){
			str += '<tr>';
			str += '<td>'+data[i]['ip']+'</td>';
			str += '<td>'+data[i]['online']+'</td>';
			str += '<td>'+data[i]['area_num']+'</td>';
			str += '<td>'+data[i]['memfree']+'</td>';
			str += '<td>'+data[i]['memused']+'</td>';
			str += '<td>'+data[i]['diskfreeroot']+'</td>';
			str += '<td>'+data[i]['diskusedroot']+'</td>';
			str += '<td>'+data[i]['diskfreeapp']+'</td>';
			str += '<td>'+data[i]['diskusedapp']+'</td>';
			str += '<td>'+data[i]['cpuuse']+'</td>';
			str += '<td>'+data[i]['iowait']+'</td>';
			str += '<td>'+data[i]['load']+'</td>';
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
	function getAreaInfo(game_id,game_s_area){
		var url = "/server/index/getAreaInfo";	
		$.ajax({
		
			type:'post',
			url: url,
			data:{
				game_id:game_id,
				game_s_area:game_s_area,
				},
			dataType: 'json',
			success: function(data) { 
				drawZones(data);
			},
			error:function() {
				alert("error");
			}
		});
	}
	function drawZones(data){
		var str = '';
		
		
		
		str += '<div class="col-md-12">';
		str += '	<div class="portlet box blue">';
		str += '	<div class="portlet-title">';
		str += '		<div class="caption"><i class="fa fa-globe"></i>区服信息&nbsp;&nbsp;&nbsp;<input type="button" onclick="showTop();" class="btn green" value="在线top10"></input></div>';
		str += '		<div class="actions">';
		str += '			<div class="btn-group">';
		str += '				<a class="btn default" href="#" data-toggle="dropdown">';
		str += '				Columns';
		str += '				<i class="fa fa-angle-down"></i>';
		str += '				</a>';
		str += '				<div id="sample_2_column_toggler" class="dropdown-menu hold-on-click dropdown-checkboxes pull-right">';
							
		str += '					<label><input type="checkbox" checked data-column="0">区号</label>';
		str += '					<label><input type="checkbox" checked data-column="1">IP</label>';
		str += '					<label><input type="checkbox" checked data-column="2">平台id</label>';
		str += '					<label><input type="checkbox" checked data-column="3">online</label>';
		str += '					<label><input type="checkbox" checked data-column="4">数据库大小</label>';
		str += '				</div>';
		str += '			</div>';
		str += '			</div>';
		str += '		</div>';
		str += '	<div class="portlet-body">';
		
		str += '<table class="table table-striped table-bordered table-hover table-full-width" id="sample_2" style="word-break:break-all; word-wrap:break-all;">';
		str += '<thead><tr>';
		
		
		str += '   <th>区号</th>';
		str += '   <th>IP</th>';
		str += '   <th>平台id</th>';
		str += '   <th>online</th>';
		str += '   <th>数据库大小</th>';
		str += '</tr></thead>';
		str += '<tbody>';
		for(i in data){
			
			str += '<tr>';
			str += '<td>'+data[i]['zone']+'</td>';
			str += '<td>'+data[i]['game_inner_ip']+'</td>';
			
			str += '<td>'+data[i]['yid']+'</td>';
			str += '<td>'+data[i]['online']+'</td>';
			str += '<td>'+data[i]['dbsize']+'</td>';
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
	function showTop(){
		var str = '';
		var url = "/server/index/getTopArea";	
		var game_id = $("#topGameId").val();
		$.ajax({
		
			type:'post',
			url: url,
			data:{
				game_id:game_id
				},
			dataType: 'json',
			success: function(data) { 
				str += '<div class="portlet box purple">';
				str += '	<div class="portlet-title">';
				str += '		<div class="caption"><i class="fa fa-cogs"></i>Top-10</div>';
				str += '			<div class="tools">';
				str += '				<a href="javascript:;" class="collapse"></a>';
				str += '			</div>';
				str += '		</div>';
				str += '	<div class="portlet-body">';
				str += '		<div class="table-scrollable">';
				str += '			<table class="table table-striped table-bordered table-hover">';
				
				
				str += '<thead><tr>';
				
				
				str += '   <th>zone</th>';
				str += '   <th>IP</th>';
				str += '   <th>platId</th>';
				str += '   <th>online</th>';
				str += '   <th>dbsize</th>';
				str += '   <th>dbver</th>';
				str += '</tr></thead>';
				str += '<tbody>';
				for(i in data){
					
					str += '<tr>';
					str += '<td>'+data[i]['zone']+'</td>';
					str += '<td>'+data[i]['game_inner_ip']+'</td>';
					str += '<td>'+data[i]['yid']+'</td>';
					str += '<td>'+data[i]['online']+'</td>';
					str += '<td>'+data[i]['dbsize']+'</td>';
					str += '<td>'+data[i]['ver_info']+'</td>';
					str += '</tr>';
					
				}
				str += '</tbody>';
				str += '</table>';
				
				str += '		</div>';
				str += '</div>';
				$("#show_top").html(str);
				//TableAdvanced.init();
			},
			error:function() {
				alert("error");
			}
		});
	}
	function getLog(){
		var datepickerStart = $("#from").val();
		var datepickerEnd = $("#to").val();
		var all_search = $("#all_search").val();
		var url = "/server/index/getLog";	
		$.ajax({
			type:'post',
			url: url,
			data:{
				datepickerStart:datepickerStart,
				datepickerEnd:datepickerEnd,
				all_search:all_search,
				},
			dataType: 'json',
			success: function(data) { 
				drawLog(data);
			},
			error:function() {
				alert("error");
			}
		});
	}
	function drawLog(data){
		var str = '';
		str += '<div class="col-md-12">';
		str += '	<div class="portlet box blue">';
		str += '	<div class="portlet-title">';
		str += '		<div class="caption"><i class="fa fa-globe"></i>日志信息</div>';
		str += '		<div class="actions">';
		str += '			<div class="btn-group">';
		str += '				<a class="btn default" href="#" data-toggle="dropdown">';
		str += '				Columns';
		str += '				<i class="fa fa-angle-down"></i>';
		str += '				</a>';
		str += '				<div id="sample_2_column_toggler" class="dropdown-menu hold-on-click dropdown-checkboxes pull-right">';
							
		str += '					<label><input type="checkbox" checked data-column="0">seq</label>';
		str += '					<label><input type="checkbox" checked data-column="1">用户</label>';
		str += '					<label><input type="checkbox" checked data-column="2">操作</label>';
		str += '					<label><input type="checkbox" checked data-column="3">时间</label>';
		str += '				</div>';
		str += '			</div>';
		str += '			</div>';
		str += '		</div>';
		str += '	<div class="portlet-body">';
		
		str += '<table class="table table-striped table-bordered table-hover table-full-width" id="sample_2">';
		str += '<thead><tr>';
		var seq = 1;
		str += '   <th>seq</th>';
		str += '   <th>用户</th>';
		str += '   <th>操作</th>';
		str += '   <th>时间</th>';
		str += '</tr></thead>';
		str += '<tbody>';
		for(i in data){
			str += '<tr>';
			str += '<td>'+seq+'</td>';
			str += '<td>'+data[i]['user']+'</td>';
			str += '<td>'+data[i]['log']+'</td>';
			str += '<td>'+data[i]['sub_time']+'</td>';
			str += '</tr>';
			seq = seq + 1;
		}
		str += '</tbody>';
		str += '</table>';
		str += '		</div>';
		str += '		</div>';
		str += '</div>';
		$("#show_data").html(str);
		TableAdvanced.init();
	}
	function getAccunts(){
		var url = "/server/index/getAccounts";	
		$.ajax({
			type:'post',
			url: url,
			dataType: 'json',
			success: function(data) { 
				drawAccounts(data);
			},
			error:function() {
				alert("error");
			}
		});
	}
	function drawAccounts(data){
		var str = '';
		
		var str = '';
		str += '	<div class="portlet box blue">';
		str += '	<div class="portlet-title">';
		str += '		<div class="caption"><i class="fa fa-globe"></i>结算信息</div>';
		str += '		<div class="actions">';
		str += '			<div class="btn-group">';
		str += '				<a class="btn default" href="#" data-toggle="dropdown">';
		str += '				Columns';
		str += '				<i class="fa fa-angle-down"></i>';
		str += '				</a>';
		str += '				<div id="sample_2_column_toggler" class="dropdown-menu hold-on-click dropdown-checkboxes pull-right">';
							
		str += '					<label><input type="checkbox" checked data-column="0">月份</label>';
		str += '					<label><input type="checkbox" checked data-column="1">总价</label>';
		str += '					<label><input type="checkbox" checked data-column="2">服务器信息</label>';
		str += '				</div>';
		str += '			</div>';
		str += '			</div>';
		str += '		</div>';
		str += '	<div class="portlet-body">';
		
		str += '<table class="table table-striped table-bordered table-hover table-full-width" id="sample_2" style="word-break:break-all; word-wrap:break-all;">';
		str += '<thead><tr>';
		
		str += '   <th>月份</th>';
		str += '   <th>总价</th>';
		str += '   <th>服务器信息</th>';
		str += '   <th>操作</th>';
		str += '</tr></thead>';
		str += '<tbody>';
		
		for(i in data){
			
			str += '<tr>';
			
			str += '<td>'+data[i]['month']+'</td>';
			str += '<td>'+data[i]['all_price']+'</td>';
			str += '<td>'+data[i]['content']+'</td>';
			str += '<td><a class="btn default" data-toggle="modal" href="#wide" onclick="priceDetail(\''+data[i]['month']+'\');">明细</a></td>';
			str += '</tr>';
			
		}
		str += '</tbody>';
		str += '</table>';
		str += '		</div>';
		str += '		</div>';
		str += '</div>';
		$("#show_data").html(str);
		
        $('#sample_2').dataTable( {           
            "aoColumnDefs": [
                { "aTargets": [ 0 ] }
            ],
            "aaSorting": [[1, 'desc']],
             "aLengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": 10,
        });
        jQuery('#sample_2_wrapper .dataTables_filter input').addClass("form-control input-small"); // modify table search input
        jQuery('#sample_2_wrapper .dataTables_length select').addClass("form-control input-small"); // modify table per page dropdown
        jQuery('#sample_2_wrapper .dataTables_length select').select2(); // initialize select2 dropdown

        $('#sample_2_column_toggler input[type="checkbox"]').change(function(){
            /* Get the DataTables object again - this is not a recreation, just a get of the object */
            var iCol = parseInt($(this).attr("data-column"));
            var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
            oTable.fnSetColumnVis(iCol, (bVis ? false : true));
        });
	}
	function priceDetail(month){
		var url = "/server/index/priceDetail";	
		$.ajax({
			type:'post',
			url: url,
			data:{
				month:month
				},
			dataType: 'json',
			success: function(data) { 
				
			},
			error:function() {
				alert("error");	
			}
		});
	}
	function giveData(id){
		var url = "/server/index/giveData";	
		$.ajax({
			type:'post',
			url: url,
			data:{
				id:id
				},
			dataType: 'json',
			success: function(data) { 
				for(i in data){
					$("#update_id").val(id);
					$("#update_ip").html(data[i]['ip']);
					$("#update_extip").val(data[i]['extip']);
					$("#update_mem").val(data[i]['mem']);
					$("#update_disk").val(data[i]['disk']);
					$("#update_idc").val(data[i]['idc']);
					$("#update_cabinet").val(data[i]['cabinet']);
					$("#update_model").val(data[i]['model']);
					$("#update_supervisor").val(data[i]['supervisor']);
					$("#update_app").val(data[i]['app']);
					$("#update_status").val(data[i]['status']);
					$("#update_remark").val(data[i]['remark']);
					$("#update_game_id").val(data[i]['game_id']);
					$("#update_from").val(data[i]['stime']);
					$("#update_to").val(data[i]['mtime']);
					$("#update_right").val(data[i]['property_right']);
					$("#update_price").val(data[i]['price']);
				}
				$("#update_data").css('display','block');
			},
			error:function() {
				alert("error");	
			}
		});
	}
	function updateData(){
		var id = $("#update_id").val();
		var ip = $("#update_ip").html();
		var extip = $("#update_extip").val();
		var mem = $("#update_mem").val();
		var disk = $("#update_disk").val();
		var idc = $("#update_idc").val();
		var cabinet = $("#update_cabinet").val();
		var model = $("#update_model").val();
		var supervisor = $("#update_supervisor").val();
		var app = $("#update_app").val();
		var status = $("#update_status").val();
		var remark = $("#update_remark").val();
		var game_id = $("#update_game_id").val();
		var stime = $("#update_from").val();
		var mtime = $("#update_to").val();
		var property_right = $("#update_right").val();
		var price = $("#update_price").val();
		var url = "/server/index/updateData";	
		$.ajax({
			type:'post',
			url: url,
			data:{
				id:id,
				ip:ip,
				extip:extip,
				mem:mem,
				disk:disk,
				idc:idc,
				cabinet:cabinet,
				model:model,
				supervisor:supervisor,
				app:app,
				status:status,
				remark:remark,
				game_id:game_id,
				stime:stime,
				mtime:mtime,
				property_right:property_right,
				price:price
				},
			dataType: 'json',
			success: function(data) { 
				$("#update_data").css('display','none');
				alert(data);
				getData();
			},
			error:function() {
				alert("error");
			}
		});
	}
	function deleteData(id){
		var url = "/server/index/deleteData";	
		$.ajax({
			type:'post',
			url: url,
			data:{
				id:id
				},
			dataType: 'json',
			success: function(data) { 
				alert(data);
				getData();
			},
			error:function() {
				alert("error");
			}
		});
	}