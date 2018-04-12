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
		<title>电子班牌-首页</title>
		<link rel="stylesheet" type="text/css" href="css/c_common.css"/>
		<link rel="stylesheet" type="text/css" href="css/index.css"/>
		<script type="text/javascript" src="js/jquery-1.8.0.min.js"></script>
		<script type="text/javascript" src="js/fastclick.js"></script>
		<script type="text/javascript" src="js/c_common.js"></script>
	</head>
	<body>
		<div class="content">
			<header class="fontColor2 backColor">
				<a class="topbtn fl" id="backbefore"></a>
				电子班牌
				<a class="topbtn fr" id="menu" 
					style="background-image: url(img/menu.png);"></a>
			</header>
			<div class="tianchong" id="endheader" style="height:51px;"></div>
			<!--以上头部指示以及菜单栏-->
			
			
			<!--个人信息-->
			<div class="userinfo">
				<div class="div1">
					<a class="borderBot infoa" href="mycenter.html">
						<div id="headimg" style="background-image: url(img/defaulehead2.png);"></div>	
						<p id="teName" class="sigrow">韓梅梅</p>
						<span id="teinfo" class="sigrow">厦门双十中学<label id="classname"></label></span>
						<img src="img/enter.png"/>
					</a>
					<ul>
						<li><a><img src="img/index_student.png"/><p class="p1">学生</p><p class="p2" id="num">60人</p></a></li>
						<li><a><img src="img/index_teacher.png"/><p class="p1">班主任</p><p class="p2" id="teacher">欧阳老师</p></a></li>
						<li><a><img src="img/index_class.png"/><p class="p1">教室</p><p class="p2" id="room">501</p></a></li>
					</ul>
						<div class="clearfloat"></div>
				</div><!--end div1-->
			</div>	<!--end userinfo-->
			
			<!--值日信息-->
			<div class="zhiriinfo">
				<div class="fl title">
					<img src="img/index_zhiri.png"/>
					<p>值日信息</p>
				</div>
				<div class="fl zhiri borderR">
					<p class="pdate" id="today">11月30日</p>
					<p class="stuname" id="student1">韓梅梅</p>
					<p class="stuname" id="student2">张磊</p>
				</div>
				<div class="fl zhiri">
					<p class="pdate" id="tomorrow">12月1日</p>
					<p class="stuname" id="student3">李华</p>
					<p class="stuname" id="student4">麦克儿</p>
				</div>
			</div><!--end zhiriinfo-->
			
				
			<!--班级评比-->
			<div class="cCompare">
				<div class="title">
					<img src="img/index_redstar.png"/>
					<p>班级评比</p>
				</div>
				<ul id="compare">
					<li><span class="cname">初一1班</span>
						<span class="star">
							<img src="img/index_stary.png"/>
							<img src="img/index_stary.png"/>
							<img src="img/index_stary.png"/>
							<img src="img/index_stary.png"/>
							<img src="img/index_stary.png"/>
						</span>
						<span class="grade">100分</span>
					</li>
					<li><span class="cname">初一2班</span>
						<span class="star">
							<img src="img/index_stary.png"/>
							<img src="img/index_stary.png"/>
							<img src="img/index_stary.png"/>
							<img src="img/index_stary.png"/>
						</span>
						<span class="grade">80分</span>
					</li>
					<li><span class="cname">初一3班</span>
						<span class="star">
							<img src="img/index_stary.png"/>
							<img src="img/index_stary.png"/>
							<img src="img/index_stary.png"/>
						</span>
						<span class="grade">60分</span>
					</li>
					<li><span class="cname">初一5班</span>
						<span class="star">
							<img src="img/index_stary.png"/>
							<img src="img/index_stary.png"/>
						</span>
						<span class="grade">40分</span>
					</li>
					<li><span class="cname">初一7班</span>
						<span class="star"><img src="img/index_stary.png"/></span>
						<span class="grade">20分</span>
					</li>
				</ul>
			</div><!--end cCompare-->
		</div><!--end content-->
		
		
		<!--底部导航-->
		<div class="tianchong"></div><!--用于页面填充导航所占的空间-->
		<footer class="footer" id="footer"><ul>
			<li><a><img src="img/school.png"/><span>校园信息</span></a></li>
			<li><a><img src="img/kebiao.png"/><span>课表信息</span></a></li>
			<!--当前页面-->
			<li><a><img src="img/indexd.png"/><span style="color:#3CACFE">主页</span></a></li>
			<li><a><img src="img/lib.png"/><span>智慧图书馆</span></a></li>
			<li><a><img src="img/gonggao.png"/><span>公告信息</span></a></li>
		</ul></footer>
		<!--底部导航-->
			<script src="js/index.js"></script>
	</body>
</html>
