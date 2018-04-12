
$(function() {
	
	
	
	var artContent = [];
	var listul = $("#listul");
	var listHtml=[];
	
	var ulimg=$("#ulimg");
	var bannerhtml=[];
	/*模拟文章内容*/
	/*{
			"artp": "班级活动",
			"artcontent": "3.18日全校大扫除，请同学们带上水桶抹布，等清洁用品。",
			"date":"2017.03.12"
	},
	{
			"artp": "班级活动2",
			"artcontent": "3.18日全校大扫除，请同学们带上水桶抹布，等清洁用品。",
			"date":"2017.03.11"
		}*/
  //var content=new Array();
  //var publish_time=new Array();
  var reco=0;
  var nowid=0;
frontPicture();
	function frontPicture()
	{
	
     $.ajax({
            type: "POST",
            url: base+"course/getNotice",
            success: function (data) {
				    var strst="";					
            	for ( var id in data) {
					reco++;
					artContent.push({"artp": "公告标题","artcontent":data[id].content,"date":data[id].publish_time});
            		/* publish_time[id] = data[id].publish_time;
            		 content[id] = data[id].content; */  					
				}				
				reco=reco-1;
                 /* $("#show").html(content[nowid]);
				   $("#time").html(publish_time[nowid]);*/
				  for(var j=0;j<artContent.length;j++){
					listHtml.push('<li><a>'+
					'<p><span class="fl" style="margin-top:15px ;font-size:16px">'+artContent[j].artp+'</span><span class="fr" style="color:#9b9b9b;margin-top:15px;margin-right:5%;font-size:12px;">'+artContent[j].date+'</span></p>'+
								'<p class="titlep sigrow" style="height:30px;line-height:30px;width:98%;margin:0 auto;color:#9b9b9b;font-size:14px">'+artContent[j].artcontent+'</p></a></li>');
					}
				listul.html(listHtml.join(''));	
				
			
				for(var i=0;i<artContent.length;i++){
					bannerhtml.push('<li style="background-image:url(img/ggd.png);background-size:100%;background-position:0 100%;background-repeat:no-repeat"><div class="hd"><label class="fl"></label><span>公告</span><label class="fr"></label></div>'+
									'<p class="artp">'+artContent[i].artp+'</p>'+
									'<div class="artcontent" style="height:75%;padding-bottom:0px;overflow-y:auto">'+artContent[i].artcontent+'</div></li>');
				}
				ulimg.html(bannerhtml.join(''));
				 touchSlide(ulimg,listul);
				  
             }
          })
	
	}
/*function show(type){
	if(type==0){
		if(nowid>=reco){
			nowid=0;
		}else{
			nowid++;
		}
	}else{
		if(nowid<=0){
			nowid=reco;
		}else{
			nowid--;
		}
	}
	$("#show").html(content[nowid]);
	$("#time").html(publish_time[nowid]);
}
*/




	var dateul=$(".dateul");
	var dateli=dateul.find("li");
	dateli.click(function(){
		$(this).css({"background":"#eaf7ff"}).siblings().css({"background":"#fff"});
	})
	
	
	

});



