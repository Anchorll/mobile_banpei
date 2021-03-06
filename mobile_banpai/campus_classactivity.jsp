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
		<title>电子班牌-班级活动</title>
		<link rel="stylesheet" type="text/css" href="css/c_common.css"/>
		<link rel="stylesheet" type="text/css" href="css/kebiao.css"/>
		<script type="text/javascript" src="js/jquery-1.8.0.min.js"></script>
		<script type="text/javascript" src="js/fastclick.js"></script>
		<script type="text/javascript" src="js/c_common.js"></script>
	</head>
	<body>
		<div class="content">
			<header class="fontColor2 backColor">
				<a class="topbtn fl" id="backbefore" 
					 style="background-image: url(img/backtobefore.png);"></a>
				班级活动
				<a class="topbtn fr" id="menu" 
					style="background-image: url(img/menu.png);"></a>
			</header>
			<div class="tianchong" id="endheader" style="height:51px;"></div>
			<!--以上头部指示以及菜单栏-->
			
			<div id="week" class="teremchose">
				<span id="weekchose" value="1">选择日期</span><label></label>
				<ul>
					<!--js根据banner的li来生成⇣	-->
				</ul>					
			</div>
			
			
			<!--评价-->
			<div class="banner">
				<div class="bdiv">
					<ul id="ulimg">
						
					</ul>
				</div>
				
				<a id="leftear" class="eara"><img src="img/pprev2.png"></a>
				<a id="rightear" class="eara"><img src="img/pnext2.png"></a>
			
			</div>
			
			
			
			
			
			
		</div><!--end content-->
		
		
		<!--底部导航-->
		<div class="tianchong"></div><!--用于页面填充导航所占的空间-->
		<footer class="footer" id="footer"><ul>
			<li><a><img src="img/school.png"/><span>校园信息</span></a></li>
			<li><a><img src="img/kebiao.png"/><span>课表信息</span></a></li>
			<li><a><img src="img/index.png"/><span>主页</span></a></li>
			<li><a><img src="img/lib.png"/><span>智慧图书馆</span></a></li>
			<li><a><img src="img/gonggao.png"/><span>公告信息</span></a></li>
		</ul></footer>
		<!--底部导航-->
		<script type="text/javascript" src="js/campus_classactivity.js"></script>
	</body>
</html>
