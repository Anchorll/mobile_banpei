/*无缝轮播*/

$(function(){
	var index=0;
	var ulimg=$("#ulimg");
	var ulcricle=$("#ulcircle");
	
	/*设置无缝轮播*/
	var firstimg = $('#ulimg li').first().clone(); //复制第一张图片
	ulimg.append(firstimg).width($('#ulimg li').length * ($('#ulimg li').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
	
	var len=$("#ulimg li").length;
	var imgli=$("#ulimg li");
		imgli.width(1/len*100+"%");
	var timer;
	ulimg.width(len*100+"%");
	
	var ulchtml=[];
	for(var m=0;m<len-1;m++){
		if(m==0){
			ulchtml.push('<li class="on-color"></li>');
		}else{
			 ulchtml.push('<li></li>');
		}
		   
	}
	/*生成指示小圆点*/
	ulcricle.html(ulchtml.join(''));
	ulcricle.css("margin-left",-(len-1)*25/2+"px");
	
	
	
	function showImg(index){
		var imgWidth=ulimg.find("li").width();
		ulimg.stop().animate({"marginLeft":-imgWidth*index+"px"},1000);
		//ulcricle.find("li").removeClass("on-color").eq(index).addClass("on-color");
		
		if(index == $('#ulcircle li').length) { //设置小圆点指示
				$('#ulcircle li').eq(0).addClass('on-color').siblings().removeClass('on-color');
					} else {
						$('#ulcircle li').eq(index).addClass('on-color').siblings().removeClass('on-color');
					}
		
		
		
	}
	$(".banner").hover(function(){
		$(".banner>a").show();
		clearInterval(timer);
	},function(){
		$(".banner>a").hide();
		autoPlay();
	});
	
	//鼠标悬浮圆点时触发的图片对应显示事件
			ulcricle.find("li").mouseover(function(){
				index=$(this).index();
				showImg(index);
			}).eq(0).mouseover();
	function autoPlay(){
		timer=setInterval(function(){
			index++;
			//console.log(len);
			if(index==len){
				index=1;
				 ulimg.css({"margin-left":"0px"});
			}
			showImg(index);
		},3000);
	}
	autoPlay();
	
	//点击左右上一张下一张
	$("#leftear").click(function(){
		index++;
		if(index==len){
			index=1;
			ulimg.css({"margin-left":"0px"});
		}
		showImg(index);
	});
	$("#rightear").click(function(){
		index--;
		if(index<0){
			index=len-2;
			ulimg.css({ "margin-left": -(len-1)* $('#ulimg li').width()+"px" });
		}
		showImg(index);
	});
	
	
	        //手在手机屏幕上滑动出现下一张图片
			var startX;
			function btouchStart(e){
			    var touch = e.touches[0];
			    startX= touch.pageX;
			    clearInterval(timer);
			}
			function btouchEnd(e){
			    var touch = e.changedTouches[0];
			    var endX= touch.pageX;
			    if(startX-endX > 20){ 
					  index++;
					   if(index==len){
						index=1;
						ulimg.css({"margin-left":"0px"});
					}
			          showImg(index);
			          
			    }else if(startX-endX < -20){
			
					index--;
					if(index==-1){
						index=len-2;
						ulimg.css({ "margin-left": -(len-1)* $('#ulimg li').width()+"px" });
					}
					showImg(index);
			    }
			    autoPlay();
			}
			$("#ulimg")[0].addEventListener("touchstart", btouchStart,false);
		    $("#ulimg")[0].addEventListener("touchend", btouchEnd,false);
	
});


