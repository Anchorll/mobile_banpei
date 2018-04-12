<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<% String path = request.getContextPath(); String basePath =request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+""; %>
<% String code= request.getParameter("code");//用request得到 %>



<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="format-detection" content="telephone=no">
		<meta http-equiv="x-dns-prefetch-control" content="on">
		<title>电子班牌-登录</title>
		<link rel="stylesheet" type="text/css" href="css/c_common.css"/>
		<link rel="stylesheet" type="text/css" href="css/login.css"/>
		<script type="text/javascript" src="js/jquery-1.8.0.min.js"></script>
		<script type="text/javascript" src="js/fastclick.js"></script>
		<script type="text/javascript" src="js/c_common.js"></script>
	
	</head>
	<body>
		<div class="main">
			<div class="content">
				<div class="head">
					<div class="headimg">
						<div id="headimg" style="background-image: url(img/defaulthead.png);"><!--系统头像图片-->
							
						</div>
					</div>
					<p class="titCenter">电子班牌</p>
				</div>
				<form class="loginInfo">
					<ul>
						<li><img src="img/user.png"/><input type="text" name="username" id="card" placeholder="请输入用户名"/></li>
						<li><img src="img/pwd.png"/><input type="password" name="password" id="user-pwd"  placeholder="请输入密码"/></li>
					</ul>
					<a id="login" class="abtnz">登录</a>
				</form>
			</div>
		</div>
		
		
		
		
		<!--<div class="company fontColor">
					©Copyright 厦门信昇达物联科技股份有限公司
		</div>-->
		<script src="js/login.js"></script>
	</body>
</html>
