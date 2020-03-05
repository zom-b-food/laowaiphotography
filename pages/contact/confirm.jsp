<!DOCTYPE html>
<html lang="en">

<head>
    <title>LaoWai Photography - Web Latimer</title>
    <?php include '../../sitewide/globals.php" %>

    <script type="text/javascript">
        $(function () {
            $('a[href*="/pages/contact.php"]').addClass('selected');
        });


    </script>
</head>

<body>

<!-- Page Content -->
<div class="container wrapper">

    <div class="col-md-3 pl0">
        <img src="/resources/images/ui/name.png" alt="LW">
    </div>
    <div class="col-md-9">
        <?php include '../../sitewide/topnav.php" %>

    </div>


    <div class="col-md-12 nopad">
        <div class="row fadebg2">
            <%--<h2>Lifestyle Photographer<br /><small>Adam Marsh</small></h2>--%>
                <h3>Contact Information<br/><sub>
                    ~ Thoughts or suggestions?</sub></h3>
        </div>
    </div>

    <div class="body row">

        <!-- Blog Entries Column -->

        <div class="col-md-3 sbPic one">
            <img src="${assetPath}/images/ui/sb3.jpg" width="290px" height="1088px" class="img-responsive"/>
        </div>
        <div class="col-md-6">
            <h3>Please confirm your information.</h3>
            <p> <a href="javascript:history.go(-1)">Go Back</a> </p>



            <input type="hidden" class="MEDformField" id="primFirstName" name="primFirstName" value="<%= request.getParameter("primFirstName") %>" />

            <input type="hidden" class="MEDformField" id="primEmail" name="primEmail" value="<%= request.getParameter("primEmail") %>" />
            <input class="LONGformField" type="hidden" id="billCity" name="billCity" value="<%= request.getParameter("billCity") %>" />
            <input type="hidden" class="TINYformField" name="stringType" id="stringType" value="<%= request.getParameter("stringType") %>" />
            <input class="LONGformField" type="hidden" id="primAC" name="primAC" value="<%= request.getParameter("primAC") %>"/>
            <input class="LONGformField" type="hidden" id="primPhone" name="primPhone" value="<%= request.getParameter("primPhone") %>" />
            <input type="hidden" class="MEDformField" name="curURL" id="location" value="<%= request.getParameter("location") %>" >
            <input type="hidden" class="MEDformField" id="notes" name="notes" value="<%= request.getParameter("notes") %>" />
            <div class="box">
                <form action="<%=request.getContextPath()%>/authenticate.authEmail" method="post">

                    <input id="text1" name="text1" type="hidden" value="<%= request.getParameter("primEmail") %>" />
                    <input id="text2" name="text2" type="hidden" value="web@laowaiphotography.com" />
                    <input id="subject" name="subject" type="hidden" value="laowaiphotography.com Confirmation" />
                    <input type="hidden" id="cc" name="cc" value="<%= request.getParameter("primEmail") %>"/>
                    <input id="area1" name="area1" class="email" type="hidden" value="

<table width='612' border='0' cellspacing='0' cellpadding='0'>
  <tr>
    <td colspan='2'><img src='http://www.laowaiphotography.com/images/logoLeftPrint.jpg' alt='LaoWai Photography'></td>
  </tr>
</table>
<table width='612' border='0' cellspacing='0' cellpadding='0'>
  <tr>
    <td colspan='2' valign='top' nowrap><br />
      <br />
      <p style='font-family: verdana; font-size: 11px; padding: 0 0 0 8px; color: #231f1d'>Dear <%= request.getParameter("primFirstName") %>, </p></td>
  </tr>
  <tr>
    <td colspan='2' ><br /><p style='font-family: verdana; font-size: 11px; padding: 0 0 0 8px; color: #231f1d'>This email summarizes the information you submitted with your inquiry, and provides some information on how to setup your photo session with LaoWai photographer, Web Latimer.</p></td>
  <tr>
    <td colspan='2'><br /><table width='100%' border='0' cellspacing='2' cellpadding='2' style='border:1px dotted #312e2a;'>
        <tr>
          <td style='background-color:#a49c75;'><p style='font-family: verdana; font-size: 11px; padding: 0 0 0 8px; color: #000000; text-decoration: underline;'><strong>Contact Email Information</strong></p></td>
        </tr>
        <tr>
          <td style='border-bottom:1px solid #a49c75;'><p style='font-family: verdana; font-size: 11px; padding: 0 0 0 8px; color: #231f1d'>&#9679; Client name: <%= request.getParameter("primFirstName") %></p></td>
        </tr>
        <tr>
          <td style='border-bottom:1px solid #a49c75;'><p style='font-family: verdana; font-size: 11px; padding: 0 0 0 8px; color: #231f1d'>&#9679; Email address: <%= request.getParameter("primEmail") %> </p></td>
        </tr>
        <tr>
          <td style='border-bottom:1px solid #a49c75;'><p style='font-family: verdana; font-size: 11px; padding: 0 0 0 8px; color: #231f1d'>&#9679; City: <%= request.getParameter("billCity") %> </p></td>
        </tr>
        <tr>
          <td style='border-bottom:1px solid #a49c75;'><p style='font-family: verdana; font-size: 11px; padding: 0 0 0 8px; color: #231f1d'>&#9679; Phone: (<%= request.getParameter("primAC") %>) <%= request.getParameter("primPhone") %></p></td>
        </tr>
        <tr>
          <td style='border-bottom:1px solid #a49c75;'><p style='font-family: verdana; font-size: 11px; padding: 0 0 0 8px; color: #231f1d'>&#9679; Session type: <%= request.getParameter("stringType") %> </p></td>
        </tr>
        <tr>
          <td style='border-bottom:1px solid #a49c75;'><p style='font-family: verdana; font-size: 11px; padding: 0 0 0 8px; color: #231f1d'>&#9679; Session located at studio: <%= request.getParameter("studio") %> <%= request.getParameter("location") %> </p></td>
        </tr>
        <tr>
          <td><p style='font-family: verdana; font-size: 11px; padding: 0 0 0 8px; color: #231f1d'>&#9679; Notes: <%= request.getParameter("notes") %></p></td>
        </tr>
      </table></td>
  </tr>
  <tr>
    <td colspan='2' valign='top'><br /><p style='font-family: verdana; font-size: 11px; padding: 0 0 0 8px; color: #231f1d'><strong>WHAT NEXT?</strong> </p>
      <p style='font-family: verdana; font-size: 11px; padding: 0 0 0 8px; color: #231f1d'>Stand by for a call from me within the next 12 hours. We'll want to spend some time discussing your needs and expectations for your session. It is important for me to get to know you a bit so I can guide you through the experience as we work together to satisfy your goals in front of the camera. I'll also be more than happy to answer all your questions about the process and final product, your awesome photos.</p>
      <p style='font-family: verdana; font-size: 11px; padding: 0 0 0 8px; color: #231f1d'>Sincere thanks,<br />
        Web Latimer</p>

      <p style='font-family: verdana; font-size: 10px; padding: 0 0 0 8px; color: #231f1d'>LaoWai Photography<br />
        320 10th Street, Ste 312 <br />
        Oakland, CA 94607<br />
        (510) 877-0763 </p></td>
  </tr>
</table>
<table width='612' border='0' cellspacing='0' cellpadding='0'>
   <tr>
    <td colspan='2' align='right'><img src='http://www.laowaiphotography.com/images/logoRightPrint.jpg' alt='LaoWai Photography'></td>
  </tr>
</table>

			 "/>

                    <h3>Welcome,  <%= request.getParameter("primFirstName") %> </h3>
                    <h4>Here is your information:</h4>
                    <br />

                    <table width="96%" border="0" cellspacing="0" cellpadding="4" bgcolor="#d4cba1" align="center" style="padding:0 8px;">
                        <th>Inquiry Form to LaoWai Photography</th>

                        <tr>
                            <td><span class="confirm">Name:</span><strong> <%= request.getParameter("primFirstName") %> </strong></td>
                        </tr>
                        <tr>
                            <td><span class="confirm">Email:</span><strong> <%= request.getParameter("primEmail") %></strong></td>
                        </tr>
                        <tr>
                            <td><span class="confirm">City:</span><strong> <%= request.getParameter("billCity") %></strong></td>
                        </tr>
                        <tr>
                            <td><span class="confirm">Phone:</span><strong> (<%= request.getParameter("primAC") %>) <%= request.getParameter("primPhone") %></strong></td>
                        </tr>
                        <tr>
                            <td><span class="confirm">Photo purpose or type:</span><strong> <%= request.getParameter("type") %> </strong></td>
                        </tr>
                        <tr>
                            <td><span class="confirm">Session located at studio:</span><strong> <%= request.getParameter("studio") %> <%= request.getParameter("location") %></strong></td>
                        </tr>

                        <tr>
                            <td><span class="confirm">Comments:</span><strong> <%= request.getParameter("notes") %></strong></td>
                        </tr>
                    </table>
                    <br>
                    &nbsp; <br>
                    <input type="submit" value="Send">
                    &nbsp;&nbsp;
                    <input type="button" onClick="window.print()" value="Print">
                </form>
            </div>



        </div>

        <div class="col-md-3">
            <?php include '../../sitewide/fullSidebar.php" %>
        </div>


    </div>
    <!-- /.row -->


    <footer>
        <?php include '../../sitewide/footer.php" %>
    </footer>

</div>
<!-- /.container -->

<!-- Contact Form JavaScript -->
<!-- Do not edit these files! In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
<%--<script src="../resources/js/jqBootstrapValidation.js"></script>--%>
<%--<script src="../resources/js/contact_me.js"></script>--%>

</body>

</html>
