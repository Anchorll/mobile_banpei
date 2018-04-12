$(function() {
 getPicture(7);
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
			'<div class="imgdiv" style="background-image:url('+base+obj.url+');width:50px"></div>'+
			'<p class="titlep sigrow">'+obj.title+'</p></a></li>');
	
		bannerhtml.push('<li style="overflow-y:auto"><div class="teacherimg" style="background-image:url('+base+obj.url+');" ></div>'+
			'<div class="fr"><p><span>职务:</span><span>'+obj.description+'</span></p>'+
			'<p><span>信息:</span><span>'+obj.description+'</span></p></div><div class="clearfloat"></div>'+
			'<p class="p">'+obj.description+'</p><p class="p">座右铭:'+obj.description+'</p></li>');
		
	}
	ulimg.html(bannerhtml.join(''));
	listul.html(listHtml.join(''));	
	
}
