$(function(){
	getPicture(31);
	
	
	var banner=$(".banner");
	var wh=$(window).height()-190;//190包含头尾以及间距的高度	
	    banner.height(wh);
	var index=0;
	var ulimg=$("#ulimg");
	var len=$("#ulimg li").length;
	var imgli=$("#ulimg li");
		ulimg.width(len*100+"%");
		imgli.width(1/len*100+"%");
		
		
	function showImg(index){
		var imgWidth=ulimg.find("li").width();
		ulimg.stop().animate({"marginLeft":-imgWidth*index+"px"},1000);
	}
	
	
	/*选择时间*/
	var week=$("#week");
	var wul=week.find("ul");
	var wspan=week.find("span");
	var wuli=wul.find("li");
	week.click(function(event){
		/*做个判断,避免底层的页面随着滑动选择而滑动*/
		var aaa=$('html,body');
		if(aaa.css("overflow")!=="hidden"){
			aaa.css({"overflow":"hidden","height":"100%"});
		}else{
			aaa.css({"overflow":"auto","height":"auto"});
		}
		wul.stop().slideToggle();
		/*解绑点击事件，避免事件叠加*/
		wuli.unbind("click");
		wuli.click(function(){
			var val=$(this).attr("value");
			var txt=$(this).text();
			wspan.text(txt);
			wspan.attr("value",val);
			showImg($(this).index());
		});
	});
	/*选择时间*/

	
	
	
	//点击左右上一张下一张
	$("#rightear").click(function(){
		$(this).find("img").attr("src","img/pnext.png");
		$("#leftear").find("img").attr("src","img/pprev2.png");
		
		index++;
		if(index==len){
			index=0;
		}
		wspan.text(wuli.eq(index).text());
		wspan.attr("value",wuli.eq(index).attr("value"));
		showImg(index);
	});
	$("#leftear").click(function(){
		$(this).find("img").attr("src","img/pprev.png");
		$("#rightear").find("img").attr("src","img/pnext2.png");
		index--;
		if(index<0){
			index=len-1;
		}
		wspan.text(wuli.eq(index).text());
		wspan.attr("value",wuli.eq(index).attr("value"));
		showImg(index);
	});
	//手在手机屏幕上滑动出现下一张图片
			var startX;
			function btouchStart(e){
			    var touch = e.touches[0];
			    startX= touch.pageX;
			}
			function btouchEnd(e){
			    var touch = e.changedTouches[0];
			    var endX= touch.pageX;
			    if(startX-endX >80){ 
			    	$("#leftear").find("img").attr("src","img/pprev2.png");
					$("#rightear").find("img").attr("src","img/pnext.png");
		
					  index++;
					   if(index==len){
						index=0;
					}
					  wspan.text(wuli.eq(index).text());
					  wspan.attr("value",wuli.eq(index).attr("value"));
			          showImg(index);
			          
			    }else if(startX-endX < -80){
			    	$("#leftear").find("img").attr("src","img/pprev.png");
					$("#rightear").find("img").attr("src","img/pnext2.png");
					
					index--;
					if(index==-1){
						index=len-1;
					}
					wspan.text(wuli.eq(index).text());
					wspan.attr("value",wuli.eq(index).attr("value"));
					showImg(index);
			    }
			}
			$("#ulimg")[0].addEventListener("touchstart", btouchStart,false);
		    $("#ulimg")[0].addEventListener("touchend", btouchEnd,false);
});

function getPicture(type){
	 $.ajax({
 		async : false,
 		cache : false,
 		type : 'post',
 		dataType : "json",
 		data:{
 			code:code
 		},
 		url : base + "course/frontPicture?type="+type,// 请求的action路径
 		error : function(XMLHttpRequest, textStatus, errorThrown) {
 			layer.msg("请求失败！");
 		},
 		success : function(data) {
 			addPicture(data);
 		}
	 });
 }
 
function addPicture(data){
	var ulimg=$("#ulimg");
	var bannerhtml=[];
	var week=$("#week");
	var wul=week.find("ul");
	var teremhtml=[];
	
	for(var i=0;i<data.length;i++)
	{
		var obj = data[i];
		teremhtml.push('<li value="'+obj.time+'">'+obj.time+'</li>');
		 bannerhtml.push('<li style="background-image:url(img/hdd.png);background-size:100%;background-position:0 100%;background-repeat:no-repeat">'+
		 '<div class="eva"><div class="hd">'+
		 '<label class="fl"></label><span>活动通知</span><label class="fr"></label><p style="border:none;height:20px;line-height:20px">'+obj.title+'</p></div>'+
		 '<div class="evacontent" style="height:62%">'+obj.description+'</div></div><div class="eva">'+
		 '<div class="hd"><label class="fl"></label><span>教师寄语</span><label class="fr"></label></div>'+
		 '<div class="evacontent">'+obj.description+'</div></div></li>');
	
	}
	ulimg.html(bannerhtml.join(''));
	wul.html(teremhtml.join(''));
}


