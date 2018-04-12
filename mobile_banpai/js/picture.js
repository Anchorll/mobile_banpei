
/**
 * id:
 * 		picture1:校园风光
 * 		picture2:教师风采
 * 		picture3:活动剪影
 * 		picture4:班级荣誉
 * 		picture5:班级合影
 * 		activity：活动主题
 * 
 */

getPicture('');

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
	var picture1='';
	var picture2='';
	var picture3='';
	var picture4='';
	var picture5='';
	for(var i=0;i<data.length;i++)
	{
		var obj = data[i];
	
		if(obj.type==4)//校园风光
		{
			picture1+='<li class="fl clear bt">';
			picture1+='<img class="fl" src="'+base+obj.url+'" alt="">';
			picture1+='<span></span>';
			picture1+='<p class="fr">'+obj.description+'</p>';
			picture1+='</li>';
			
		}
		if(obj.type==7)//教师风采
		{
			picture2+='<li  class="clear bt">';
			picture2+='<div class="teacher-pic fl">';
			picture2+='<img src="'+base+obj.url+'" alt=""><br>';
			picture2+='<span>'+obj.title+'</span>';
			picture2+=' </div>';
			picture2+='<div class="teacher-info fr">';
			picture2+='<p>'+obj.description+'</p>';
			picture2+='</div>';
			picture2+='</li>';
		}
		if(obj.type==6)//活动剪影
		{
			picture3+='<li  class="fl bt clear">';
			picture3+='<img  class="fl" src="'+base+obj.url+'" alt="">';
			picture3+='<span></span>';
			picture3+='<p class="fr">'+obj.description+'</br>';
			picture3+=obj.time+'</p>';
			picture3+='</li>';
		}
		if(obj.type==31)//班级活动
		{
			if(obj.code==code)
			{
				$('#activity').html(obj.title);
				
			}
		}
		if(obj.type==32)//班级荣誉
		{
			if(obj.code==code)
			{
				picture4+='<li class="fl clear">';
				picture4+='<img class="fl" src="'+base+obj.url+'" alt="">';
				picture4+='<span></span>';
				picture4+='<p class="fr">'+obj.title+'<br>'+obj.time+'</p>';
				picture4+='</li>';
				
			}
		}
		if(obj.type==33)//班级合影
		{
			if(obj.code==code)
			{
				picture5+='<li class="fl clear">';
				picture5+='<img class="fl" src="'+base+obj.url+'" alt="">';
				picture5+='<span></span>';
				picture5+='<p class="fr">'+obj.title+'<br>'+obj.time+'</p>';
				picture5+='</li>';
			}
		}
		
	}
	
	$('#picture1').html(picture1);
	$('#picture2').html(picture2);
	$('#picture3').html(picture3);
	$('#picture4').html(picture4);
	$('#picture5').html(picture5);
	
}