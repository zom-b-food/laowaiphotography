<!DOCTYPE html>
<%@ page language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml">


<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<sql:setDataSource dataSource="jdbc/demo"/>

<head>
<title>Process</title>
<script type="text/javascript">
function redir(){
var name = document.getElementById("userName").value;
var email = document.getElementById("emailAddress").value;


		if ((name == "guest" ) && (email == "guest@home.com" ))
		 { document.showGallery.action="<%=request.getContextPath()%>/pages/gallery/amber/home.php"; }

		 else if ((name == "ironic" ) && (email == "adam.marsh@sotto.com" ))
		 {
			{ document.showGallery.action="<%=request.getContextPath()%>/pages/gallery/johnson/home.php"; }
		 }
		  else if ((name == "1" ) && (email == "1@1" ))
		 {
			{ document.showGallery.action="<%=request.getContextPath()%>/pages/gallery/amber/home.php"; }
		 }

		else { document.showGallery.action="<%=request.getContextPath()%>/pages/login.php"; }
		document.showGallery.submit(); 
	}

</script>
</head>
<body onLoad="redir()">
<form action="" name="showGallery" method="post" >
  <input type="hidden" name="userName" id="userName" value="${fn:escapeXml(param.userName)}">
  <input type="hidden" name="emailAddress" id="emailAddress" value="${fn:escapeXml(param.emailAddress)}" />
  <input type="hidden" name="userName" id="userName" value="<%=request.getParameter("userName")%>">
  <input type="hidden" name="emailAddress" id="emailAddress" value="<%=request.getParameter("emailAddress")%>" />
  <!--  <input style="float:right;" class="mbtn" type="submit" value="Confirm" onClick="redir()"> -->
</form> 
</body>
</html>
