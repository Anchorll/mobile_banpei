 //选择图片，马上预览  
    function setImagePreviews(obj,id,kb) {  
    var dimg=   document.getElementById(id);//放图片的元素
        var fl=obj.files.length;  
        for(var i=0;i<fl;i++){  
            var file=obj.files[i];  
            var reader = new FileReader();  
            reader.onload = function (e) { 
//            	先通过check()判断图片大小是否满足再将图片路劲给相应的元素接收
//            	判断是哪个input点击上传图片
            	if(check(obj,kb)){
            			dimg.style.backgroundImage="url("+e.target.result+")";
            	//console.log(e.target.result);
            	};
            	
            }  
            reader.readAsDataURL(file);  
        }  
  
        
        
//        图片大小的限制
        function check(aaid,kb)
	    {
	  var aa=aaid.value.toLowerCase().split('.');//以“.”分隔上传文件字符串
	   // var aa=document.form1.userfile.value.toLowerCase().split('.');//以“.”分隔上传文件字符串
	       
	    if(aaid.value=="")
	    {
	        alert('图片不能为空！');
	        return false;
	    }
	    else
	    {
	    if(aa[aa.length-1]=='gif'||aa[aa.length-1]=='jpg'||aa[aa.length-1]=='bmp'
	||aa[aa.length-1]=='png'||aa[aa.length-1]=='jpeg')//判断图片格式
	    {
		//	var imagSize =  document.getElementById("userfile").files[0].size;
			var imagSize =aaid.files[0].size;
//			alert("图片大小："+imagSize+"B");
			if(imagSize>1024*1024*kb){
//	        alert("图片大小在0.5M以内，为："+imagSize/(1024*1024)+"M");
		    alert('请选择小于'+1024*1024*kb/1000+'KB的图片');//jpg和jpeg格式是一样的只是系统Windows认jpg，Mac OS认jpeg，

	        return false;
	    }
	   
	    else
		    {
//		        alert('请选择小于500KB的图片');//jpg和jpeg格式是一样的只是系统Windows认jpg，Mac OS认jpeg，
		//二者区别自行百度
		        return true;
		    }
	     }
	   }
	 }
        
        
        
    }  