function getPlat(){
	var url = "/monitor/index/getPlat";	
	$.ajax({
		type:'post',
		url: url,
		
		dataType: 'json',
		success: function(data) { 
			drawPlat(data);
		},
		error:function() {
			alert("error");
		}
	});
}
function drawPlat(data){
	str = '';
	for(i in data){
		str += '<option value="'+data[i]['yid']+'">'+data[i]['y_plat_name']+'</option>';
	}
	$("#yid").html(str);
	getArea();
}
function getArea(){
	var yid = $("#yid").val();
	var url = "/monitor/index/getArea";	
	$.ajax({
		type:'post',
		url: url,
		data:'yid='+yid,
		dataType: 'json',
		success: function(data) { 
			drawArea(data);
		},
		error:function() {
			alert("error");
		}
	});
}
function drawArea(data){
	str = '';
	for(i in data){
		str += '<option value="'+data[i]['game_s_area']+'">'+data[i]['game_s_name']+'</option>';
	}
	$("#game_s_area").html(str);
}