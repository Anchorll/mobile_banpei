$(function(){
	
	/*模拟数据*/
	var data=[{"xueqi":"第1学期",
	"tea":"老师寄语老师寄语老师寄语老师寄语老师寄语老师寄语老师寄语",
	"stu":"自我评价自我评价自我评价自我评价自我评价"},
	{"xueqi":"第2学期",
	"tea":"老师寄语老师寄语老师寄语老师寄语老师寄语老师寄语老师寄语",
	"stu":"自我评价自我评价自我评价自我评价自我评价"},
	{"xueqi":"第3学期",
	"tea":"老师寄语老师寄语老师寄语老师寄语老师寄语老师寄语老师寄语",
	"stu":"自我评价自我评价自我评价自我评价自我评价"},
	{"xueqi":"第4学期",
	"tea":"老师寄语老师寄语老师寄语老师寄语老师寄语老师寄语老师寄语",
	"stu":"自我评价自我评价自我评价自我评价自我评价"}
	];
	
	
	var banner=$(".banner");
	var wh=$(window).height()-190;//190包含头尾以及间距的高度	
	    banner.height(wh);
	var index=0;
	var ulimg=$("#ulimg");
	var ulihtml=[];
	for(var j=0;j<data.length;j++){
		 ulihtml.push('<li><div class="eva"><p class="evarol"><span>老师评价</span></p>'+
						'<div class="evacontent">'+data[j].tea+'</div></div><div class="eva">'+
							'<p class="evarol"><span>自我评价</span></p>'+
							'<div class="evacontent">'+data[j].stu+'</div></div></li>');
	}
	ulimg.html(ulihtml.join(''));
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
	/*生成学期*/
	var teremhtml=[];
	for(var i=0;i<data.length;i++){
		teremhtml.push('<li value="'+i+'">'+data[i].xueqi+'</li>')
	}
	wul.html(teremhtml.join(''));
	var wuli=wul.find("li");
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
		li.click(function(){
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
