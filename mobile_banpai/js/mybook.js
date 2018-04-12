
hold(1);


function resetPage(count,pageno){
	  $(".pageCode").unbind().createPage({
		    pageCount:count,
		    current:pageno,
		    backFn:function(page){
		      hold(page);
		    }
		  });
}

//resetPage(100,1);
hold(1);

function hold(page){
	$.ajax({
		type:'post',
		url:base+"search/hold?page="+page,
		async:false,
		type:'json',
		success:function(data){
			console.log(data);
			addBooks(data,page);
		}
	});
}

/**
 * 添加图书
 * @param data
 * @returns
 */
function addBooks(data,page){
	var books = data.list;
	var html=[];
	for(var i=0;i<books.length;i++)
	{
		var bk = books[i];
	
	html.push('<li><p><span>序号</span>：'+(page*10-9+i)+'</p>'+
					'<p><span>书名</span>：'+bk.title+'</p>'+
					'<p><span>作者</span>：'+bk.author+'</p>'+
					'<p><span>应还时间</span>：'+bk.returntime+'</p>'+
					'<a class="abtnz" onclick="renew(\''+bk.barcode+'\','+page+')" >续借</a></li>');
	
	}
	
	$("#buyList").html(html.join(''));
	//$('#holding').html(html);
	
	resetPage(data.totalPage,data.pageNumber);
}




function renew(barcode,page){
	$.ajax({
		type:'post',
		url:base+"search/renew?barcode="+barcode,
		async:false,
		type:'json',
		success:function(data){
			if(data.msg>0){
				layer.msg('续借成功', {
					time: 1000 //2s后自动关闭
				});
				hold(page);
			}
		}
	});
}
	




