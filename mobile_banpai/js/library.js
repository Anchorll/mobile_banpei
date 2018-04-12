$(function(){
	var week=$(".select");
	week.click(function(event){
		var ul=$(this).find("ul");
		ul.stop().slideToggle();
		li=ul.find("li");
		/*解绑点击事件，避免事件叠加*/
		li.unbind("click");
		var self=$(this);
		li.click(function(){
			var val=$(this).attr("value");
			var txt=$(this).text();
			self.find("span").text(txt);
			self.find("span").attr("value",val);
		});
	});
	
	
	/*模拟图书数据（library.html页面）*/
	/*var bookdata=[{"bname":"你好，旧时光","author":"八月长安","readnums":"100"},
	{"bname":"哈利波特","author":"JK罗琳","readnums":"100"},
	{"bname":"百年孤独","author":"马尔克斯","readnums":"200"},
	{"bname":"罗密欧与朱丽叶","author":"莎士比亚","readnums":"100"},
	{"bname":"你好，旧时光","author":"八月长安","readnums":"100"}]
	
	var bookhtml=[];
	for(var i=0;i<bookdata.length;i++){
		bookhtml.push('<tr><td>'+bookdata[i].bname+'</td><td>'+bookdata[i].author+'</td><td>'+bookdata[i].readnums+'</td></tr>')
	}
	$("#booklist").html(bookhtml.join(''));*/
	
	

});


getBookRange();//鑾峰彇鍥句功鎺掕姒�
var type,val;
//鎼滅储
$('#search').click(function()
		{
			type = $('#type').attr("value");
			val = $('#value').val();
			getBook(type,val,1,true);
		}
);

/**
 * 娣诲姞鍥句功鍒皌able
 * @param data
 * @returns
 */
function addBooks(data,is_range){
	var count = data.totalPage;
	var pageno=data.pageNumber;
	var list = data.list;
	var html=[];
	for(var i=0;i<list.length;i++)
	{
		var b = list[i];
		html.push('<tr><td>'+((pageno-1)*10+i+1)+'</td>'+
		'<td class="book-name text-overflow" data-barcode="'+b.barcode+'" >'+b.title+'</td>'+
		'<td class="text-overflow">'+b.author+'</td>'+
		'<td>'+b.callno+'</td>');
		if(is_range){
			html.push('<td>'+b.search+'</td>');
		}
		else{
			html.push('<td>'+b.price+'</td>');
		}
		html.push('</tr>');
	}
	if(html.join('')==''){
		html.push('<tr><td colspan="5">抱歉！暂无记录！</td></tr>');
	}
	$('#books').html(html.join(''));
	bookdetail();
}

/**
 * 閲嶇疆椤电爜
 * @param count
 * @param pageno
 * @returns
 */
function resetPage(count,pageno){
	  $(".pageCode").unbind().createPage({
		    pageCount:count,
		    current:pageno,
		    backFn:function(page){
		      //alert(page)
		      getBook(type,val,page,false);
		    }
		  });
}


/**
 * ajax鑾峰彇鍥句功鎺掕姒滃垪琛�
 * @returns
 */
function getBookRange()
{
	$.ajax({
		type:'post',
		url:base+"search/range",
		async:false,
		type:'json',
		success:function(data){
			addBooks(data,true);
		}
	});
	
}




function getBook(tp,val,page,is_reset)
{
	console.log('type:'+tp+'  value:'+val+"  page:"+page);
	$.ajax({
		type:'post',
		url:base+"search/search",
		async:false,
		data:{
			type:tp,
			value:val,
			page:page,
			pagesize:10
		},
		dataType:'json',
		success:function(data){
			addBooks(data,false);
			//console.log('add success');
			if(is_reset){
				resetPage(data.totalPage,data.pageNumber);
			}
		}
	});
	
}


/**
 * 图书详情
 */
function bookdetail(){
	$("#books").find("tr").unbind().click(function () {
		var book = $(this).find(".book-name");
		var barcode = book.attr('data-barcode');
		layer.open({
			type:1,
			title:"图书详情",
			area:["90%","60%"],
			shadeClose:true,
			content:'<ul id="bookdetails"><li><span>书名：</span><span id="bookname"></span></li>'+
			'<li><span>作者：</span><span id="author"></span></li>'+
			'<li><span>索书号：</span><span id="callno"></span></li>'+
			'<li><span>ISBN：</span><span id="isbn"></span></li>'+
			'<li><span>条码号：</span><span id="barcode"></span></li>'+
			'<li><span>丛书名：</span><span id="series"></span></li>'+
			'<li><span>副题名：</span><span id="secondtitle"></span></li>'+
			'<li><span>价格：</span><span id="price"></span></li></ul>'
		});
		getBookByBarcode(barcode);
	});
}

/**
 * 通过条形码获取图书
 * @param barcode
 * @returns
 */
function getBookByBarcode(barcode){
	$.ajax({
		type:'get',
		url:base+"search/barcode?barcode="+barcode,
		async:false,
		/*data:{
		
		},*/
		dataType:'json',
		success:function(data){
			$('#bookname').html(data.title);
			$('#title').html(data.title);
			$('#author').html(data.author);
			$('#callno').html(data.callno);
			$('#isbn').html(data.isbn);
			$('#barcode').html(data.barcode);
			$('#price').html(data.price);
			$('#series').html(data.series);
			$('#secondtitle').html(data.secondtitle);
		}
	
	});
}


$('.returnPage').click(function () {
    $('.lib-table>table').show()
    $('.pageCode').show()
    $('.book-detail').hide()
  });
  
