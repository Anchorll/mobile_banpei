<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<% String path = request.getContextPath(); String basePath =request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+""; %>
<% String code= request.getParameter("code");//用request得到 %>


<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="format-detection" content="telephone=no">
		<meta http-equiv="x-dns-prefetch-control" content="on">
		<title>电子班牌-课表信息</title>
		<link rel="stylesheet" type="text/css" href="css/c_common.css"/>
		<link rel="stylesheet" type="text/css" href="css/kebiao.css"/>
		<script type="text/javascript" src="js/jquery-1.8.0.min.js"></script>
		<script type="text/javascript" src="js/fastclick.js"></script>
		<script type="text/javascript" src="js/c_common.js"></script>
	</head>
	<body>
		<div class="content">
			<header class="fontColor2 backColor">
				<a class="topbtn fl" id="backbefore" style="background-image: url(img/backtobefore.png);"></a>
				课表信息
				<a class="topbtn fr" id="menu" 
					style="background-image: url(img/menu.png);"></a>
			</header>
			<div class="tianchong" id="endheader" style="height:51px;"></div>
			<!--以上头部指示以及菜单栏-->
			<ul id="tab" class="tab">
				<li id="tab1"><img src="img/kebiao1.png"/><span>班级课表</span></li>
				<li id="tab2"><img src="img/kebiao2.png"/><span>个人课表</span></li>
			</ul>
			<div id="week" class="datechose">
				<span id="weekchose" value="1">选择第几周</span><label></label>
				<ul>
					<li value="1">第1周</li>
					<li value="2">第2周</li>
					<li value="3">第3周</li>
					<li value="4">第4周</li>
					<li value="5">第5周</li>
					<li value="3">第3周</li>
					<li value="4">第4周</li>
					<li value="5">第5周</li>
				</ul>					
			</div>
			<div id="table" class="table">
				<table id="table0">
					<tr><th>班级课表</th><th>周一</th><th>周二</th><th>周三</th><th>周四</th><th>周五</th><th>周六</th><th>周日</th></tr>
					<tbody id="lession4class">
						<tr><td>早自习<br/>(00:00-00:00)</td><td>语sdfsdfds文</td><td>建筑工程制图</td><td>数字电子电路</td><td>大学英语</td><td>大学物理</td><td>数学二</td><td>语文</td></tr>
						<tr><td>第一节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td>fsdfdsds</td><td></td><td></td><td></td></tr>
						<tr><td>第二节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>第三节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>第四节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>第五节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>第六节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>第七节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>第八节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>晚自习<br/>	(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
					</tbody>
				</table>
				<table id="table1" style="display: none;">
					<tr><th>个人课表</th><th>周一</th><th>周二</th><th>周三</th><th>周四</th><th>周五</th><th>周六</th><th>周日</th></tr>
					<tbody id="lession4person">
						<tr><td>早自习<br/>(00:00-00:00)</td><td>语sdfsdfds文</td><td>建筑工程制图</td><td>数字电子电路</td><td>大学英语</td><td>大学物理</td><td>数学二</td><td>语文</td></tr>
						<tr><td>第一节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td>fsdfdsds</td><td></td><td></td><td></td></tr>
						<tr><td>第二节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>第三节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>第四节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>第五节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>第六节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>第七节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>第八节<br/>(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
						<tr><td>晚自习<br/>	(00:00-00:00)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
					</tbody>
				</table>
			</div>
			
		</div><!--end content-->
		
		
		<!--底部导航-->
		<div class="tianchong"></div><!--用于页面填充导航所占的空间-->
		<footer class="footer" id="footer"><ul>
			<li><a><img src="img/school.png"/><span>校园信息</span></a></li>
			<!--当前页面-->
			<li><a><img src="img/kebiaod.png"/><span style="color:#3CACFE">课表信息</span></a></li>
			<li><a><img src="img/index.png"/><span>主页</span></a></li>
			<li><a><img src="img/lib.png"/><span>智慧图书馆</span></a></li>
			<li><a><img src="img/gonggao.png"/><span>公告信息</span></a></li>
		</ul></footer>
		<!--底部导航-->
		<script type="text/javascript" src="js/kebiao.js"></script>
	</body>
</html>
