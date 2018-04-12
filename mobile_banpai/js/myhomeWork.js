$(function(){
	/*科目*/
	
	/*模拟科目作业数据*/
	var subjectwork=[{"subname":"语文","subwork":"1.默写离骚。2.完成单元测试卷1"},
	{"subname":"数学","subwork":"1.证明毕达哥斯拉定理"},
	{"subname":"英语","subwork":"1.背诵第一单元单词。2.完成一课一练"},
	{"subname":"化学","subwork":"1.默写碱式碳酸铜生成反应式。"},
	{"subname":"物理","subwork":"1.课后习题1-7"},
	{"subname":"生物","subwork":"1.完成练习册14-18页"}
	]

	var ww=$(window).width();
	var subjectul=$("#subject");
	var subhtml=[];
	for(var i=0;i<subjectwork.length;i++){
		subhtml.push('<li>'+subjectwork[i].subname+'</li>');
	}
	subjectul.html(subhtml.join(''));
	
	var subli=subjectul.find("li");
	var sublen=subli.length;
		subjectul.width(subli.width()*sublen)
	
	/*如果科目的的宽度大于屏幕宽度就出现左右滑动的指示*/
	if(subjectul.width()<ww){
		$(".ea").hide();
	}else{
		$(".ea").show();
	}
	
	
	
	/*作业*/
	var banner=$(".banner");
	var wh=$(window).height()-255;//190包含头尾科目以及间距的高度	
	    banner.height(wh);
	var index=0;
	var ulimg=$("#ulimg");
	var hwHtml=[];
	for(var j=0;j<subjectwork.length;j++){
		hwHtml.push('<li><p class="titCenter">'+subjectwork[j].subname+'</p>'+
					'<p class="homework">'+subjectwork[j].subwork+'</p></li>');
	}
	ulimg.html(hwHtml.join(''));
	
	var len=$("#ulimg li").length;
	var imgli=$("#ulimg li");
		ulimg.width(len*100+"%");
		imgli.width(1/len*100+"%");
	
	function showImg(index){
		var imgWidth=ulimg.find("li").width();
		ulimg.stop().animate({"marginLeft":-imgWidth*index+"px"},1000);
		var imgWidth2=subjectul.find("li").width();
		if(subjectul.width()>ww){
			subjectul.stop().animate({"marginLeft":-imgWidth2*index+"px"},1000);
		}
		subjectul.find("li").eq(index).css({"background":"#eaf7ff","color":"#3CACFE"}).siblings().css({"background":"#fff","color":"#838383"});
		
	}
	//点击左右上一张下一张
	$("#rightear").click(function(){
		$(this).find("img").attr("src","img/pnext.png");
		$("#leftear").find("img").attr("src","img/pprev2.png");
		
		index++;
		if(index==len){
			index=0;
		}
		showImg(index);
	});
	
	
	
	$("#leftear").click(function(){
		$(this).find("img").attr("src","img/pprev.png");
		$("#rightear").find("img").attr("src","img/pnext2.png");
		index--;
		if(index<0){
			index=len-1;
		}
		showImg(index);
	});
	
	/*点击科目出现相应科目作业*/
	subli.click(function(){
		var index=$(this).index();
		$(this).css({"background":"#eaf7ff","color":"#3CACFE"}).siblings().css({"background":"#fff","color":"#838383"});
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
			          showImg(index);
			          
			    }else if(startX-endX < -80){
			    	$("#leftear").find("img").attr("src","img/pprev.png");
					$("#rightear").find("img").attr("src","img/pnext2.png");
					
					index--;
					if(index==-1){
						index=len-1;
						
					}
					showImg(index);
			    }
			}
			$("#ulimg")[0].addEventListener("touchstart", btouchStart,false);
		    $("#ulimg")[0].addEventListener("touchend", btouchEnd,false);
		    if(subjectul.width()>ww){
		    	$(".subjectDiv")[0].addEventListener("touchstart", btouchStart,false);
		   		 $(".subjectDiv")[0].addEventListener("touchend", btouchEnd,false);
		    }
			


});
