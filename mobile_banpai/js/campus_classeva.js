/**
 * 
 * id:
		 * var rangeno;//本周排名
		var week_total;//上周总分
		var week_range;//上周排名
		var month_range;//上月排名
		
		
		weektable:周评比id
 * 
 */



/**
 * 查询班级评分：
	 * 接口地址：
	 * http://localhost/school/course/compete?type=3
	 * 参数
	 * 		type://1本周，2上周，3本月，4上月
	 * 返回
	 * total:总分
	 * rangeno：排名
	 * class_:班级编号
	 * 格式：
	 * [{"total":3.00,"rangeno":3,"class_":"5107"},{"total":6.00,"rangeno":2,"class_":"C201701"},{"total":9.00,"rangeno":1,"class_":"C201702"}]
	 * 
 * @returns
 */
var rangeno;//本周排名
var week_total;//上周总分
var week_range;//上周排名
var month_range;//上月排名

getRange(1);
getRange(2);
getRange(4);
getItem();//获取评比的项目；
getWeekCompete();//获取项目评比的分数；



function getRange(type){
	$.ajax({
		url:base+"course/compete?type="+type,
		type:"get",
		dataType:"json",
		async:true,
		success:function(data){
			if(data.length>0)
			{
				for(var i=0;i<data.length;i++)
				{
					var obj = data[i];
					if(obj.class_==code)
					{
						console.log('code'+code);
						if(type==1)
						{
							rangeno=obj.rangeno;
							$('#rangeno').html(rangeno);
						}
						else if(type==2)
						{
							week_total=obj.total;
							week_range = obj.rangeno;
							$('#week_total').html(week_total);
							$('#week_range').html(week_range);
						}
						else if(type==4)
						{
							month_range=obj.rangeno;
							$('#month_range').html(month_range);
						}
						return;
					}
				}
			}
		}
	});
}


/**
 * 
 * 获取评比项的内容
 * 接口地址：http://localhost/school/course/getItem
 */
function getItem(){
	$.ajax({
		url:base+"course/getItem",
		type:"get",
		dataType:"json",
		async:true,
		success:function(data){
			var  th=[];
			th.push('<th>项目</th>');
			for(var i=0;i<data.length;i++){
				th.push('<th>'+data[i].title+'</th>');
			}
			th.push('<th>统计</th>');
			$("#item").html(th.join(''));
		}
	});
}

/**
 *  * 获取每周的分数
	 * 接口地址：http://localhost/school/course/getWeekCompete?code=C201702
	 * 
	 * 参数：
	 * 		code班级编号
	 * 返回：
	 * XG:校规
	 * wd：星期几，周一为0
	 * [{"XG":4.00,"WS":4.00,"CQ":4.00,"wd":0,"ZC":4.00,"GRMM":4.00},
	 * {"XG":5.00,"WS":2.00,"CQ":2.00,"wd":1,"ZC":1.00,"GRMM":5.00},
	 * {"XG":1.00,"WS":1.00,"CQ":1.00,"wd":2,"ZC":1.00,"GRMM":1.00},
	 * {"XG":3.00,"WS":5.00,"CQ":3.00,"wd":3,"ZC":3.00,"GRMM":3.00}]
	 * 
 * @returns
 */
function getWeekCompete(){
	$.ajax({
		url:base+"course/getWeekCompete?code="+code,
		type:"get",
		dataType:"json",
		async:true,
		success:function(data){
			console.log(data);
			addTable(data);
		}
	});
}

function addTable(data){
	var trs = '';
	var ws_total=0,cq_total=0,xg_total=0,grmm_total=0,zc_total=0;
	for(var i=0;i<data.length;i++)
	{
		var obj = data[i];
		trs+='<tr>';
		var wk;
		switch(obj.wd){
		case 0:
			wk="星期一";
			break;
		case 1:
			wk="星期二";
			break;
		case 2:
			wk="星期三";
			break;
		case 3:
			wk="星期四";
			break;
		case 4:
			wk="星期五";
			break;
		case 5:
			wk="星期六";
			break;
		case 6:
			wk="星期日";
			break;
		}
		ws_total+=obj.WS;
		cq_total+=obj.CQ;
		zc_total+=obj.ZC;
		xg_total+=obj.XG;
		grmm_total+=obj.GRMM
		
		trs+='<td>'+wk+'</td>';
		trs+='<td class="WS">'+obj.WS+'</td>';
		trs+='<td class="CQ">'+obj.CQ+'</td>';
		trs+='<td class="ZC">'+obj.ZC+'</td>';
		trs+='<td class="XG">'+obj.XG+'</td>';
		trs+='<td class="GRMM">'+obj.GRMM+'</td>';
		trs+='<td class="total">'+(obj.GRMM+obj.WS+obj.CQ+obj.ZC+obj.XG)+'</td>';
		trs+='</tr>';
	}
	
	trs+='<tr>';
	trs+='<td>统计</td>';
	trs+='<td>'+ws_total+'</td>';
	trs+='<td>'+cq_total+'</td>';
	trs+='<td>'+zc_total+'</td>';
	trs+='<td>'+xg_total+'</td>';
	trs+='<td>'+grmm_total+'</td>';
	trs+='<td>'+(ws_total+cq_total+zc_total+xg_total+grmm_total)+'</td>';
	trs+='</tr>';
	
	$('#weektable').html(trs);
	
}

