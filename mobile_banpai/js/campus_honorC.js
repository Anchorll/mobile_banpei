$(function() {
	
	/*模拟文章内容*/
	var artContent = [{
			"artp": "荣誉班级1",
			"artcontent": "1111111111111111111111111111111111",
			"img":"img/banner1.png"
		},
		{
			"artp": "荣誉班级2",
			"artcontent": "1111111111111111111111111111111111",
			"img":"img/banner1.png"
		},
		{
			"artp": "荣誉班级3",
			"artcontent": "1111111111111111111111111111111111",
			"img":"img/banner2.png"
		},
		{
			"artp": "荣誉班级4",
			"artcontent": "1111111111111111111111111111111111",
			"img":"img/banner1.png"
		}
	]
	
	var listul = $("#listul");
	var listHtml=[];
	for(var j=0;j<artContent.length;j++){
				listHtml.push('<li><a>'+
				'<div class="imgdiv" style="background-image:url('+artContent[j].img+')"></div>'+
				'<p class="titlep sigrow">'+artContent[j].artp+'</p></a></li>');
	}
	listul.html(listHtml.join(''));	
	
	var ulimg=$("#ulimg");
	var bannerhtml=[];
	for(var i=0;i<artContent.length;i++){
		bannerhtml.push('<li><img class="titleimg" src="'+artContent[i].img+'">'+
						'<p class="artp">'+artContent[i].artp+'</p>'+
						'<div class="artcontent">'+artContent[i].artcontent+'</div></li>');
		
	}
	ulimg.html(bannerhtml.join(''));
	
	
	touchSlide(ulimg,listul);
});
