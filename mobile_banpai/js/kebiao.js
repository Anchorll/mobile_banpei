$(function(){
	
	/*选择时间*/
	var week=$("#week");
	week.click(function(event){
		
		/*做个判断,避免底层的页面随着滑动选择而滑动*/
		var aaa=$('html,body');
		if(aaa.css("overflow")!=="hidden"){
			aaa.css({"overflow":"hidden","height":"100%"});
		}else{
			aaa.css({"overflow":"auto","height":"auto"});
		}
		
		var ul=$(this).find("ul");
		ul.stop().slideToggle();
		li=ul.find("li");
		
		/*解绑点击事件，避免事件叠加*/
		li.unbind("click");
		var self=$(this);
		li.click(function(){
			var val=$(this).attr("value");
			var txt=$(this).text();
			self.find("span").text(txt);
			self.find("span").attr("value",val);
			
		});
	});
	/*选择时间*/
	
	
	/*选择课表*/
	var tab=$("#tab");
	var tabli=tab.find("li");
	tabli.click(function(){
		$(this).css({"background-color":"#eaf7ff","color":"#40aff7"})
		.siblings().css({"background-color":"#fff","color":"#444"});
		var i=$(this).index();
		$(".table").find("table").hide();
		$("#table"+i).show();
	});
	
	
	
	/*个人成绩页面*/
	/*选择月考*/
	$("#choseyuekao").click(function(){
		var ul=$("#yuekao");
		ul.stop().slideToggle();
		li=ul.find("li");
		/*解绑点击事件，避免事件叠加*/
		li.unbind("click");
		var self=$(this);
		li.click(function(){
			var val=$(this).attr("value");
			var txt=$(this).text();
			self.find("span").text(txt);
			self.find("span").attr("value",val);
			
		});
	});
});

 
str = "";
var time = 0;
function showkey(){
	var display =$('.card').css('display');
	if(display== 'none'){
		return;
	}else{
		asc = event.keyCode;
  key = String.fromCharCode(asc);
  str += key;
  if(time==0){
	  time=1;
	  setTimeout('getCode(str)',3000);
	}
  
  }
}

function showToast() { 
android.readercheck("1");
}

/*一个是生成表格，一个是将数据填充到表格上*/

function getcode(uid){//android方法方法调用js

     $.ajax({
            type: "POST",
            url: base+"course/getLesson",
            success: function (data) {
				var strst="";
            	for ( var time in data) {
            		var id = data[time].id;
            		var end_time_ = data[time].end_time_;
            		var name_ = data[time].name_;
            		var start_time_ = data[time].start_time_;
            		strst+="<tr><td class=\"time4class\" id =\"class0"+id+"\" >"+name_+"<p>("+start_time_+"~"+end_time_+")</p></td>";
            		for(var i=1;i<=7;i++){
            			strst+=" <td id =\"class"+i+id+"\"></td>";
            		}
            		strst+="</tr>"            		
            	}
				     $("#lession4class").html(strst);
					getClassCourse("C201702");
					strst="";
				 for ( var time in data) {
	            		var id = data[time].id;
	            		var end_time_ = data[time].end_time_;
	            		var name_ = data[time].name_;
	            		var start_time_ = data[time].start_time_;
	            		strst+="<tr><td class=\"time4class\" id =\"persion0"+id+"\" >"+name_+"</br>("+start_time_+"~"+end_time_+")</td>";
	            		for(var i=1;i<=7;i++){
	            			strst+=" <td id =\"persion"+i+id+"\"></td>";
	            		}
	            		strst+="</tr>"            		
	            	}
					 $("#lession4person").html(strst);
					 getStudentCourse(uid);
             }
          })
}
function getClassCourse(code)
	{
	
     $.ajax({
            type: "POST",
            url: base+"course/getClassCourse"
            	+"?code="+code,
            success: function (data) {
				var strst="";
            	for ( var time in data) {
            		var id = data[time].id;
            		var wk = data[time].wk;
            		var course_name = data[time].course_name;
            		var teachername = data[time].teachername;
            		var classroom = data[time].classroom;
            		//<td><a href="#"data-toggle="tooltip" title="<h2>'am Header2 </h2>">语文</a></td>
//            		strst="<a href=\"JavaScript:layeraction(\"授课老师："+teachername+" 教室："+classroom+"\")\" >"+course_name+"</a>";
            	//	strst="<a href=\"JavaScript:layeraction('授课老师："+teachername+"</br> 教室："+classroom+"')\" >"+course_name+"</a>";
				 $("#class"+wk+id).html(course_name);
            		
            		         		
            	}
				 
             }
          })
	
	}
    function getStudentCourse(code)
	{
	
     $.ajax({
            type: "POST",
            url: 
            	base+"course/getStudentCourse?student_no_="
            	+code,
            success: function (data) {
				var strst="";
            	for ( var time in data) {
            		var id = data[time].id;
            		var wk = data[time].wk;
            		var course_name = data[time].course_name;
            		var teachername = data[time].teachername;
            		var classroom = data[time].classroom;
            		//<td><a href="#"data-toggle="tooltip" title="<h2>'am Header2 </h2>">语文</a></td>
//            		strst="<a href=\"JavaScript:layeraction(\"授课老师："+teachername+" 教室："+classroom+"\")\" >"+course_name+"</a>";
            		//strst="<a href=\"JavaScript:layeraction('授课老师："+teachername+"</br> 教室："+classroom+"')\" >"+course_name+"</a>";
				 $("#persion"+wk+id).html(course_name);
            		
            		         		
            	}
				 
             }
          })
	
	}
function layeraction(msg1){
    layui.use(['layer', 'laypage', 'element'], function(){
    	  var layer = layui.layer
    	  ,laypage = layui.laypage
    	  ,element = layui.element();
    	  
    	  //向世界问个好
    	  layer.msg(msg1);
    	 
    	  
    	});
    
    }getLesson();
    function getLesson()
	{
	 //alert(document.body.clientWidth+":"+document.body.clientHeight);
     $.ajax({
            type: "POST",
            url: 
            	base+"course/getLesson",
            success: function (data) {
				var strst="";
            	for ( var time in data) {
            		var id = data[time].id;
            		var end_time_ = data[time].end_time_;
            		var name_ = data[time].name_;
            		var start_time_ = data[time].start_time_;
            		strst+="<tr><td class=\"time4class\" id =\"class0"+id+"\" >"+name_+"</br>("+start_time_+"~"+end_time_+")</td>";
            		for(var i=1;i<=7;i++){
            			strst+=" <td id =\"class"+i+id+"\"></td>";
            		}
            		strst+="</tr>"            		
            	}
				     $("#lession4class").html(strst);
				 getClassCourse("C201702");
                                strst="";
				 for ( var time in data) {
	            		var id = data[time].id;
	            		var end_time_ = data[time].end_time_;
	            		var name_ = data[time].name_;
	            		var start_time_ = data[time].start_time_;
	            		strst+="<tr><td class=\"time4class\" id =\"persion0"+id+"\" >"+name_+"</br>("+start_time_+"~"+end_time_+")</td>";
	            		for(var i=1;i<=7;i++){
	            			strst+=" <td id =\"persion"+i+id+"\"></td>";
	            		}
	            		strst+="</tr>"            		
	            	}
					 $("#lession4person").html(strst);
             }
          })
	
	}
