$(function() {
 getPicture(6);
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
				'<p class="titlep sigrow">'+obj.description+'</p></a></li>');
	
		bannerhtml.push('<li><img class="titleimg" src="'+base+obj.url+'">'+
						'<p class="artp">活动标题</p>'+
						'<p class="artp">'+obj.time+'</p>'+
						'<div class="artcontent">'+obj.description+'</div></li>');
		
	
	}
	ulimg.html(bannerhtml.join(''));
	listul.html(listHtml.join(''));	
	
}
