function Banner(ulimg,listul){
	this.startX=0;
	this.index;
	this.ulimg=ulimg;
	this.listul;
	this.li=listul.find("li");
	this.len=this.li.length;
	this.initbanner();
	this.rightbtn();
	this.leftbtn();
	this.listLi();
	//this.data=data;
}
Banner.prototype={
	initbanner:function(){
		var imgli=this.ulimg.find("li");
		imgli.width(1/this.len*100+"%");
		this.ulimg.width(this.len*100+"%");
		
	},
	showImg:function(index){
		var imgWidth=this.ulimg.find("li").width();
		this.ulimg.stop().animate({"marginLeft":-imgWidth*index+"px"},1000);
	},
	showImg2:function(index){
		var imgWidth=this.ulimg.find("li").width();
		this.ulimg.css({"marginLeft":-imgWidth*index+"px"});
	},
	/*点击左右按钮*/
	leftbtn:function(){
		var self=this;
		$("#leftear").click(function(){
			$(this).find("img").attr("src","img/pprev.png");
			$("#rightear").find("img").attr("src","img/pnext2.png");
			self.index--;
			if(self.index<0){
				self.index=self.len-1;
			}
			self.showImg(self.index);
		});
	},
	rightbtn:function(){
		var self=this;
		$("#rightear").click(function(){
		$(this).find("img").attr("src","img/pnext.png");
		$("#leftear").find("img").attr("src","img/pprev2.png");
		
		self.index++;
		if(self.index==self.len){
			self.index=0;
		}
		self.showImg(self.index);
	});
	},
	/*列表点击*/
	listLi:function(){
		var self=this;
		this.li.click(function() {
		/*避免底层的页面随着弹层滑动而滑动*/
			var aaa=$('html,body');
				aaa.css({"overflow":"hidden","height":"100%"});
			self.index= $(this).index();
			var mengban = $("#mengban");
			var banner = $(".banner");
			mengban.show();
			banner.show();
			self.showImg2(self.index);
			mengban.click(function() {
				banner.hide();
				mengban.hide();
				aaa.css({"overflow":"auto","height":"auto"});
			});
		});

	}
	
}
var startX;
function touchSlide(ulimg,listul){
	var obj=new Banner(ulimg,listul);
	obj.ulimg[0].addEventListener("touchstart", btouchStart, false);
	obj.ulimg[0].addEventListener("touchend",btouchEnd, false);
	function btouchStart(e){
		var touch = e.touches[0];
		startX = touch.pageX;
	};
	function btouchEnd(e){
		var touch = e.changedTouches[0];
		var endX = touch.pageX;
		 if(startX-endX > 20){ 
					  obj.index++;
					 
					   if( obj.index==obj.len){
						 obj.index=0;
					}
					  $("#rightear").find("img").attr("src","img/pnext.png");
					  $("#leftear").find("img").attr("src","img/pprev2.png");
			          obj.showImg(obj.index);
			    }else if(startX-endX < -20){
					obj.index--;
					if(obj.index==-1){
						obj.index=obj.len-1;
					}
					$("#leftear").find("img").attr("src","img/pprev.png");
					$("#rightear").find("img").attr("src","img/pnext2.png");
					obj.showImg(obj.index);
			    }
	}


}

