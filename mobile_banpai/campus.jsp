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
		<title>电子班牌-校园信息</title>
		<link rel="stylesheet" type="text/css" href="css/c_common.css"/>
		<link rel="stylesheet" type="text/css" href="css/campus.css"/>
		<script type="text/javascript" src="js/jquery-1.8.0.min.js"></script>
		<script type="text/javascript" src="js/fastclick.js"></script>
		<script type="text/javascript" src="js/c_common.js"></script>
		
	</head>
	<body>
		<div class="content">
			<header class="fontColor2 backColor">
				<a class="topbtn fl" id="backbefore" 
					style="background-image: url(img/backtobefore.png);"></a>
				校园信息
				<a class="topbtn fr" id="menu" 
					style="background-image: url(img/menu.png);"></a>
			</header>
			<div class="tianchong" id="endheader" style="height:51px;"></div>
			<!--以上头部指示以及菜单栏-->
			
			
			<!--校园风景图片或者轮播图-->
			<div class="banner">
				<ul id="ulimg" class="bannerpic">
					<!--<li style="background-image: url(img/banner1.png);"><a></a></li>
					<li style="background-image: url(img/banner2.png);"><a></a></li>
					<li style="background-image: url(img/banner1.png);"><a></a></li>-->
				</ul>
				<ul id="ulcircle">
					<!--<li class="on-color"></li>
					<li></li>
					<li></li>-->
				</ul>
			<!--<a id="leftear"></a>
			<a id="rightear"></a>-->
		    </div>
			
			<!--菜单宫格-->
			<ul class="menuNavi" id="menuNavi">
				<li><a href="campus_intro.jsp"><img src="img/cam1.png"/><p>学校简介</p></a></li>
				<li><a href="campus_fg.jsp"><img src="img/cam2.png"/><p>校园风光</p></a></li>
				<li><a href="campus_teacher.jsp"><img src="img/cam3.png"/><p>教师风采</p></a></li>
				<li><a href="campus_honorC.jsp"><img src="img/cam4.png"/><p>荣誉班级</p></a></li>
				<li><a href="campus_activity.jsp"><img src="img/cam5.png"/><p>活动剪影</p></a></li>
				<li><a href="campus_classactivity.jsp"><img src="img/cam6.png"/><p>班级活动</p></a></li>
				<li><a href="campus_classeva.jsp"><img src="img/cam7.png"/><p>班级评比</p></a></li>
				<li><a href="campus_Chonor.jsp"><img src="img/cam8.png"/><p>班级荣誉</p></a></li>
				<li><a href="campus_Cphoto.jsp"><img src="img/cam9.png"/><p>班级合照</p></a></li>
				<li><a href="campus_homework.jsp"><img src="img/cam10.png"/><p>优秀作业</p></a></li>
				<li><a><img /><p></p></a></li>
				<li><a><img /><p></p></a></li>
			</ul>
			<div class="clearfloat"></div>
			
			
			
			<!--点击列表弹出具体信息-->
			
			
			
			
			
		</div><!--end content-->
		
		
		<!--底部导航-->
		<div class="tianchong"></div><!--用于页面填充导航所占的空间-->
		<footer class="footer" id="footer"><ul>
			<!--当前页面-->
			<li><a><img src="img/schoold.png"/><span style="color:#3CACFE">校园信息</span></a></li>
			<li><a><img src="img/kebiao.png"/><span>课表信息</span></a></li>
			<li><a><img src="img/index.png"/><span>主页</span></a></li>
			<li><a><img src="img/lib.png"/><span>智慧图书馆</span></a></li>
			<li><a><img src="img/gonggao.png"/><span>公告信息</span></a></li>
		</ul></footer>
		<!--底部导航-->
		<script type="text/javascript" src="js/campus.js"></script>
		<script type="text/javascript" src="js/bannerc.js"></script>
	</body>
</html>
