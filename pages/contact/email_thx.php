<!DOCTYPE html>
<html lang="en">

<head>
    <title>LaoWai Photography - Web Latimer</title>
  
<?php include '../../sitewide/globals.php'; ?>
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
        
<?php include '../../sitewide/topnav.php'; ?>
    </div>


    <div class="col-md-12 nopad">
        <div class="row fadebg2">
            <h3>Contact Information<br/><sub>
                ~ Thoughts or suggestions?</sub></h3>
        </div>
    </div>

    <div class="body row">

        <!-- Blog Entries Column -->

        <div class="col-md-4 sbPic">
            <img src="/resources/images/ui/laowaiMEbig.png" width="300px" height="592px" class="img-responsive"/>
        </div>
        <div class="col-md-5">
            <h3>Thank you for your email.</h3>

            <h3></h3>
            <label>LaoWai Photography</label>

            <p>
                12121 Admiralty Way, Q306<br>Everett, WA 98204<br>
            </p>

            <p><i class="fa fa-phone"></i>
                <abbr title="Phone">P</abbr>: (206) 801-0073</p>

            <p><i class="fa fa-envelope-o"></i>
                <abbr title="Email">E</abbr>: <a href="mailto:am@laowaiphotography.com">am@laowaiphotography.com</a>
            </p>

            <p><i class="fa fa-clock-o"></i>
                <abbr title="Hours">H</abbr>: Open 7 days: 10:00 AM to 9:00 PM</p>
            <ul class="list-unstyled list-inline list-social-icons">
                <li>
                    <a href="#"><i class="fa fa-facebook-square fa-2x"></i></a>
                </li>

                <li>
                    <a href="#"><i class="fa fa-twitter-square fa-2x"></i></a>
                </li>

            </ul>

        </div>

        <div class="col-md-3">
           
            <?php include '../../sitewide/fullSidebar.php'; ?>
        </div>


    </div>
    <!-- /.row -->


    <footer>
       
        <?php include '../../sitewide/footer.php'; ?>
    </footer>

</div>
<!-- /.container -->

<!-- Contact Form JavaScript -->
<!-- Do not edit these files! In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
<script src="../resources/js/jqBootstrapValidation.js"></script>
<script src="../resources/js/contact_me.js"></script>

</body>

</html>
