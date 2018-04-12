$(function() {
	getPicture(33);
	touchSlide($("#ulimg"),$("#listul"));
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
	var listul = $("#listul");
	var listHtml=[];
	var ulimg=$("#ulimg");
	var bannerhtml=[];
	for(var i=0;i<data.length;i++)
	{
		var obj = data[i];
		listHtml.push('<li><a>'+
				'<div class="imgdiv" style="background-image:url('+base+obj.url+')"></div>'+
				'<p class="titlep sigrow">'+obj.description+obj.time+'</p></a></li>');
		bannerhtml.push('<li><img class="titleimg" src="'+base+obj.url+'">'+
						'<p class="artp">'+obj.title+'</p>'+
						'<div class="artcontent">'+obj.description+'</div></li>');
	}
	listul.html(listHtml.join(''));	
	ulimg.html(bannerhtml.join(''));
}