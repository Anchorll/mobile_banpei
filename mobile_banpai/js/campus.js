
/**
 * id:
 * 		picture1:校园风光
 * 		picture2:教师风采
 * 		picture3:活动剪影
 * 		picture4:班级荣誉
 * 		picture5:班级合影
 * 		
 * 		activity：活动主题
 * 
 */
$(function(){
	getPicture(1);
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
	var bannerpic=[]
	for(var i=0;i<data.length;i++)
	{
		var obj = data[i];
			bannerpic.push('<li style="background-image: url('+base+obj.url+');"><a></a></li>');
	}
		$(".bannerpic").html(bannerpic.join(''));
}
