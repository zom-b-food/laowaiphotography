<!DOCTYPE html>
<html lang="en">

<head>
    <title>LaoWai Photography - Web Latimer</title>
    <?php include '../sitewide/globals.php" %>
    <%-- <script type="text/javascript" src="${assetPath}/js/jquery.validate.min.js" charset="utf-8"></script>--%>

    <style type="text/css">

        #login label.error {
            margin-right: 100px;
            text-align: left;
            width: 180px !important;
        }
    </style>
    <script type="text/javascript">
        $(function () {
            $('a[href*="${contextPath}/pages/login.php"]').addClass('selected');
        });


    </script>
</head>

<%--<jsp:useBean id="adduser" scope="session" class="pool.AddUsers"/>
<jsp:setProperty name="addusers" property="*"/>--%>

<body>

<!-- Page Content -->
<div class="container wrapper">

    <div class="col-md-3 pl0">
        <img src="${assetPath}/images/ui/name.png" alt="LW">
    </div>
    <div class="col-md-9">
        <?php include '../sitewide/topnav.php" %>

    </div>


    <div class="col-md-12 nopad">
        <div class="row fadebg2">
            <%--<h2>Lifestyle Photographer<br /><small>Web Latimer</small></h2>--%>
            <h3>View Your Photos<br/><sub>
                ~ Your gallery awaits you</sub></h3>
        </div>
    </div>

    <div class="body row">

        <!-- Blog Entries Column -->

        <div class="col-md-3 sbPic one">
            <img src="${assetPath}/images/ui/sb3.jpg" width="290px" height="1088px" class="img-responsive"/>
        </div>
        <div class="col-md-6">
            <h3>Login here to view your site.</h3>

            <p>Login with your User Name and Site Key. Let me know <a
                    href="mailto:web@laowaiphotography.com">(web@laowaiphotography.com)</a> if you need a login or login
                reset.
            </p>
            <%
                String oops = (String) session.getAttribute("oops");
                if (oops == null)
                    oops = "";
            %>



                <form action="${contextPath}/pool.LoginDatabase" method="get" name="login" id="login">
                    <div class="box login">
                           <span class="oops"><%= oops %></span>
                        <div class="control-group form-group">
                            <div class="controls">
                                <label style="margin-top:10px;">User Name:</label>
                                <input type="text" class="form-control" name="userName" id="userName" value="">
                            </div>
                        </div>
                        <div class="control-group form-group">
                            <div class="controls">
                                <label>Site Key:</label>
                                <input type="text" class="form-control" name="emailAddress" id="emailAddress" value="">
                            </div>
                        </div>
                        <div class="control-group form-group">
                            <div class="controls">
                                <input type="submit" value="Log in" onFocus="blur()"/>
                            </div>
                        </div>
                    </div>
                </form>



        </div>

        <div class="col-md-3">
            <?php include '../sitewide/fullSidebar.php" %>
        </div>


    </div>
    <!-- /.row -->


    <footer>
        <?php include '../sitewide/footer.php" %>
    </footer>

</div>
<!-- /.container -->

<!-- Contact Form JavaScript -->
<!-- Do not edit these files! In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
<%--<script src="../resources/js/jqBootstrapValidation.js"></script>--%>
<%--<script src="../resources/js/contact_me.js"></script>--%>

</body>

</html>
