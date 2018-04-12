$(function(){
	
	$("#login").click(function(){
		var username=$("#card").val();
		var pwd=$("#user-pwd").val();
		if(pwd!==''&&username!==''){
			var url=base+'course/check';
			login(url,username,pwd);
		}else{
			alert("用户名、密码不能为空");
		}
		
	});
	
});
//http://139.224.17.20:8086/school/course/check
/*登录接口*/
function login(url,username,pwd){
	$.ajax({
			 async : false,
			 cache : false,
			 type : 'post',
			 dataType : "json",
			 data:{
				 cardno : username,
				 password : pwd
			 },
			 url : url,
			 error : function(XMLHttpRequest, textStatus, errorThrown) {
				 
			 },
			 success : function(data) {
				 if(data.msg=='ok'){
				 	 location.href=base+"coursemenu/user?code="+code;
				 }else{
				 	alert("用户名或密码错误");
				 }
					
			 }
		 });
	
}
