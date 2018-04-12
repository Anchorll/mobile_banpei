$(function(){
	getClassInfo();
	getDuty();
	var d = new Date();
	 $("#today").html((d.getMonth()+1)+"月"+d.getDate()+"日");
	 var seconds = d.getTime()+24*60*60*1000;
	d.setTime(seconds); 
	$("#tomorrow").html((d.getMonth()+1)+"月"+d.getDate()+"日");
	
	
	
});

/*var base="http://139.224.17.20:8086/school/";
var code="C201702";*/

/*获取班级信息*/
function getClassInfo(){
	$.ajax({
			async : false,
			cache : false,
			type : 'post',
			dataType :"json",
			data:{
				code:code
			},
			url : base+"course/getClasses",// 璇锋眰鐨刟ction璺緞
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				layer.msg("出错！");
			},
			success : function(data) {
				var r = data.classroom;
				$('#classname').text(r.classname);
				$('#teacher').text(r.teacher);
				$('#num').text(r.num);
				$('#room').text(r.room);
				room = r.room;
			}
		});	
}

/*获取值日信息*/
function getDuty(){
    	
    	$.ajax({
    		async : false,
    		cache : false,
    		type : 'post',
    		dataType : "json",
    		data:{
    			code:code
    		},
    		url : base + "course/getDuty",//
    		error : function(XMLHttpRequest, textStatus, errorThrown) {
    			layer.msg("出错");
    		},
    		success : function(data) {
    			$('#student1').html(data.today_one);
    			$('#student2').html(data.today_two);
    			$('#student3').html(data.tomorrow_one);
    			$('#student4').html(data.tomorrow_two);
    			
    			
    		}
    	});
 }