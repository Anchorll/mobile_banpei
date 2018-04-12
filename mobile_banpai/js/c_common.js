
var base="http://139.224.17.20:8086/school/";
var code="C201702";


/*通用js 弹窗，跳转等*/

/*消除300ms 延时*/
if ('addEventListener' in document) {  
		document.addEventListener('DOMContentLoaded', function() {  
		FastClick.attach(document.body);  
	}, false);  
}  

$(function(){
	/*$("body").append("<script src='js/fastclick.js'></script>");
	FastClick.attach(document.body);*/
	
	//用js创建底部的导航
	//creatNavi();
	naviMenu();
	firstNavi();
	$("#backbefore").click(function(){
		goBack();
	});
});


/*创建页面底部菜单（导航）栏*/
/*function creatNavi(){
	//<!--底部填充-->
	var footernavi='<div class="tianchong"></div>'+
		'<footer class="footer" id="footer"><ul>'+
				'<li><a><img src="img/school.png"/><span>校园信息</span></a></li>'+
				'<li><a><img src="img/kebiao.png"/><span>课表信息</span></a></li>'+
				'<li><a><img src="img/index.png"/><span>主页</span></a></li>'+
				'<li><a><img src="img/lib.png"/><span>智慧图书馆</span></a></li>'+
				'<li><a><img src="img/gonggao.png"/><span>公告信息</span></a></li>'+
		'</ul></footer>'
	$("body").append(footernavi);
}*/

/*底部第一菜单导航点击效果*/
function firstNavi(){
	var footer=$("#footer");
	var naviLi=footer.find("li");
	//初始情况
	naviLi.eq(0).find("a").attr("href","campus.html");
	naviLi.eq(1).find("a").attr("href","kebiao.html");
	naviLi.eq(2).find("a").attr("href","index.html");
	naviLi.eq(3).find("a").attr("href","library.html");
	naviLi.eq(4).find("a").attr("href","gongGao.html");
/*	
	naviLi.click(function(){
		var oldsrc=$(this).find("img").attr("src");
		var newsrc=oldsrc.slice(0,oldsrc.length-4)+"d.png";
		$(this).find("img").attr("src",newsrc);
		$(this).find("span").css("color","#3cacfe");
	});*/
}






function goBack(){
    if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){ // IE
        if(history.length > 0){
            window.history.go( -1 );
        }else{
            window.opener=null;window.close();
        }
    }else{ //非IE浏览器
        if (navigator.userAgent.indexOf('Firefox') >= 0 ||
            navigator.userAgent.indexOf('Opera') >= 0 ||
            navigator.userAgent.indexOf('Safari') >= 0 ||
            navigator.userAgent.indexOf('Chrome') >= 0 ||
            navigator.userAgent.indexOf('WebKit') >= 0){
 
            if(window.history.length > 1){
                window.history.go( -1 );
            }else{
                window.opener=null;window.close();
            }
        }else{ //未知的浏览器
            window.history.go( -1 );
        }
    }
}

/*右上角导航菜单点击效果*/
function naviMenu(){
	
	var menuHtml='<div id="menuboard"><img id="tipimg" src="img/sanjiao.png"/><ul>'+
				 '<li><a href="mycenter.html"><img src="img/menu1.png" /><span>个人中心</span></a></li>'+
				 '<li><a href="changePwd.html"><img src="img/menu2.png" /><span>修改密码</span></a></li>'+
				 '<li><a href="javascript:logOut(cardno,pwd)"><img src="img/menu3.png" /><span>退出</span></a></li>'+
				 '</ul></div>'
	$("#endheader").after(menuHtml);
	
	//$("#menuboard").css({"top":-$("#menuboard").height()-51+"px"});
	
	var menu=$("#menu");
	var flag=true;
	
	menu.click(function(){
		var menuBoard=$("#menuboard");
		if(flag){
			menuBoard.stop().slideDown();
			//menuBoard.stop(true,true).animate({"top":"51px"},500);
			flag=false;
		}else{
			menuBoard.stop().slideUp();
			//menuBoard.stop(true,true).animate({"top":"-100%"},500);
			flag=true;
		}
		
	});
}

/*公司落款在屏幕底部*/
/*function companyBottom(){
	var con=$(".content");
	var height=$(window).height();
	if(con.height()<height){
		con.css("min-height",height-100+"px");
	}
}
*/
function logOut(cardno,pwd){
	 $.ajax({
 		async : false,
 		cache : false,
 		type : 'post',
 		dataType : "json",
 		data:{
 			code:code
 		},
 		url : base + "course/log_out?cardno="+cardno+"&password="+pwd,// 请求的action路径
 		error : function(XMLHttpRequest, textStatus, errorThrown) {
 			layer.msg("请求失败！");
 		},
 		success : function(data) {
 			 if(data.msg=='ok')
				location.href=base+"coursemenu/user?code=";
 		}
	 });
 }


/*14.退出登录  
	http://localhost/school/course/log_out
	参数：cardno
		password
	返回：
		{"msg":"ok"} ：退出成功*/










