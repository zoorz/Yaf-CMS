var area_status = new Array();
area_status[0] 	= '尚未创建服';
area_status[1] 	= '开服';
area_status[2] 	= '停服';
area_status[3] 	= '创建服准备中';
area_status[4] 	= '创建服进行中';
area_status[5] 	= '开服准备中';
area_status[6] 	= '开服进行中';
area_status[7] 	= '停服准备中';
area_status[8] 	= '停服进行中';
area_status[9] 	= '更新准备中';
area_status[10] = '更新进行中';
area_status[11] = '更新完成';	
area_status[12] = '重启准备中';
area_status[13] = '重启进行中';
area_status[14] = '清档准备中';
area_status[15] = '清档进行中';
area_status[16] = '清档已完成';
area_status[17] = '更新开服时间';
area_status[18] = '数据库更新准备中';
area_status[19] = '数据库更新进行中';
area_status[20] = '数据库更新完成';
area_status[21] = '服务器迁移中';
area_status[22] = '服务器迁移完成';
area_status[23] = '维护异常';
area_status[24] = '合区准备中';
area_status[25] = '合区进行中';
area_status[26] = '合区已完成';
area_status[27] = '合区回滚准备中';
area_status[28] = '合区回滚进行中';
area_status[29] = '合区回滚完成';

/**
 * [preDoAction 与判断操作行为]
 * @param  {[type]} action [description]
 * @param  {[type]} type   [description]
 * @return {[type]}        [description]
 */
function preDoAction(action, type, value) {
	//首先清空数组
	args = new Array();
	if(0 === type) {
		//批量操作
		//获取选择的区号
		if(!getMultiArea()) {
			alert("未选择目标！");
			return false;
		};
	}/*else if('null' == type) {
		//不针对区服操作，暂时只有资源预热任务
		args['areaStr'] = type;
		args['num'] = 0;
	}*/else {//资源预热会使用区号字段来作为A,B,C的版本区分
		args['areaStr'] = type;
		args['num'] = 1;
	}

	//开始操作
	switch(action) {
		case 'autocreate':
			args['action'] = 'create';
			args['action_desc'] = '创建服';
			args['refresh'] = false;
			doAction('server');
			break;
		case 'create':
			args['action'] = 'create';
			args['action_desc'] = '创建服';
			args['refresh'] = true;
			doAction('server');
			break;
		case 'start':
			args['action'] = 'start';
			args['action_desc'] = '开服';
			args['refresh'] = true;
			doAction('server');
			break;
		case 'stop':
			args['action'] = 'stop';
			args['action_desc'] = '关服';
			args['refresh'] = true;
			doAction('server');
			break;
		case 'update':
			args['action'] = 'update';
			args['action_desc'] = '更新';
			args['refresh'] = true;
			doAction('server');
			break;
		case 'restart':
			args['action'] = 'restart';
			args['action_desc'] = '重启';
			args['refresh'] = true;
			doAction('server');
			break;
		case 'total':
			args['action'] = 'total';
			args['action_desc'] = '一条龙';
			args['refresh'] = true;
			doAction('server');
			break;
		case 'rsyncServerRes':
			args['action'] = 'rsyncServerRes';
			args['action_desc'] = '服务器上线版本确认';
			args['refresh'] = true;
			doAction('server');
			break;
		case 'rsyncClientRes':
			args['action'] = 'rsyncClientRes';
			args['action_desc'] = '客户端上线版本确认';
			args['refresh'] = true;
			doAction('client');
			break;
		case 'showClientRes':
			args['action'] = 'showClientRes';
			args['action_desc'] = '切换资源';
			args['refresh'] = true;
			showClientRes(value);
			break;
		case 'closeTime':
			args['action'] = 'closeTime';
			args['action_desc'] = '定时关服';
			args['refresh'] = true;
			showCloseTime(value);
			break;
		case 'noticeLink':
			args['action'] = 'noticeLink';
			args['action_desc'] = '修改公告';
			args['refresh'] = true;
			showNoticeLink(value);
			break;
		case 'switchMonitor':
			args['action'] = 'switchMonitor';
			args['action_desc'] = '开关监控';
			args['version'] = '0';
			args['refresh'] = false;
			addTask();
			break;
		case 'initdb':
			if(args['areaStr'] == '' || value == ''){
				return;
			}
			args['action'] = 'initdb';
			args['action_desc'] = '数据库清档';
			args['refresh'] = true;
			promptConfirmDialog('normal',value);
			break;
		default:
			break;
	}
}

/**
 * [doAction ]
 * @param  {[type]} type ['client' or 'server']
 * @return {[type]}      [description]
 */

function doAction(type) {
	//首先获取最新的版本号
	var url = "/area/index/getLatestVersion";
	$.ajax({
		type: 'post',
		url: url,
		data: 'type='+type,
		dataType: 'json',
		success: function(data) {
			if(data == 1) {
				alert("获取版本号失败！");
			}else {
				drawPublicConfirm(data);
			}
		},
		error: function() {
			alert("系统繁忙！");
		}
	});
}

/**
 * [drawPublicConfirm 画出确认信息]
 * @param  {[type]} type [description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
function drawPublicConfirm(data){
	//画出确认信息，并准备添加任务所需参数
	
	args['version'] = data[0];
	var str="";
	str += commonHead('操作确认');
	str +='<div class="rowElem">';
	if(args['action'] == 'update' || args['action'] == 'create' || args['action'] == 'rsyncServerRes' || args['action'] == 'rsyncClientRes') {
		//只有更新和创建服的时候才需要选择版本号, 确认服务器版本时也选择版本号
		str +='	选择：';
		str +='	<select class="form-control input-medium select2me" id="version">';
		for(var i in data) {
			str +='		<option value="'+data[i]+'">'+data[i]+'</option>';
		}
		str +='	</select>';
		str +='	<br>版本号：<font color=red><span id="s_version" >'+data[0]+'</span></font><br>';
	}
	str += commonConfirm();
	str +='	<br><input type="button" class="btn btn-success" onclick="addTask();" value="确定">';
	str +='</div>';
	str +='<div class="fix"></div>';
	$("#public_info").html(str);
	//显示弹层
	foui_dia = foui.dialog.open('#public_info',{overlay : true, width : '357px', height : 'auto', closeHandler : '#close_prom', draggable : true, dragHandler :'.head'});

	//此处监听版本号
	$("#version").change(function(){
		$("#s_version").html(this.value);
		args['version'] = this.value;
	});
}

/**
 * [commonHead 公用头信息]
 * @param  {[type]} head [description]
 * @return {[type]}      [description]
 */

function commonHead(head) {
	var str = '';
	str +='<div class="head">';
	str +='	<h5 class="iChart8">'+head+'</h5>';
	str +='	<div class="num"><a href="#" style="color:black;" class="blueNum" id="close_prom">X</a></div>';
	str +='</div>';
	return str;
}

/**
 * [commonConfirm 公用确认信息]
 * @return {[type]} [description]
 */
function commonConfirm() {
	var str = '';
	str +='	<div>';
	str +='		操作：<font color=red>'+args['action_desc']+'</font>';
	str +='		<div style="white-space: nowrap;text-overflow: ellipsis; overflow: hidden;max-width:330px;max-height:40px">';
	str +='			区服：';
	str +='			<font color=red>'+args['areaStr']+'</font>';
	try {
		args['num'] =args['areaStr'].split(",").length;
	}catch(e) {
		args['num'] =1;
	}
	
	str +='		</div>';
	str +='		总计： <font color=red>'+args['num']+'</font>个';
	str +='	</div>';
	return str;
}

/**
 * [addTask 添加操作到任务队列]
 */
function addTask() {
	var url = "/area/index/addMaintainTask";
	$.ajax({
		type : 'post',
		url : url,
		data : 'action_area_src='+args['areaStr']+'&type='+args['action']+'&version='+args['version']+'&pre_cost_time='+60*args['num'],
		dataType : 'json',
		success : function(data) {
			if(parseInt(data) >= 1) {
				alert('添加成功！');
			}else {
				alert('添加任务失败！！');
			}
			foui.dialog.close(foui_dia);
			if(args['refresh']) {
				getTaskList();
			}
			
		},
		error : function() {
			alert('系统繁忙！');
		}
	});
}

/**
 * [refresh 刷新页面方法]
 * @param  {[type]} action [description]
 * @return {[type]}          [description]
 */
function refresh (action) {
	//根据不同的action 调用不同的刷新方法
	switch(action) {
		case 'rsyncClientRes':
		case 'rsyncServerRes':
			//资源同步页面刷新
			window.location.reload();
			break;
		case 'merge':
		case 'rollBack':
			//合区和回滚
			break;
		default:
			selectPlat();
			break;
	}
}