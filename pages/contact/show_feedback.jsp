<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.sql.*" errorPage="" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<META http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
	<title>laowaiphoto - contact</title>
	<link rel="stylesheet" href="<%=request.getContextPath()%>/styles/seaArts.css" type="text/css">

</head>
<body>
<div id="container-page">
    <?php include '../inc/topNav.php" %>
    <section>
        <h1>Feedback</h1>

        <h2>~ Feedback confirmation page</h2>
    </section>
    <div id="BodyContentDiv">
        <h3>Thank you for your feedback.</h3>
        <p><a href="javascript:history.go(-1)">Back</a></p>
    </div>
    <div class="Right">
        <?php include '../inc/loginSidebar.php" %>
    </div>
    <br clear="all"/>
    <div id="foot">
        <?php include '../inc/footer1.php" %>
    </div>
</div>

</body>
</html>
