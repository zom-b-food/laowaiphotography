<!DOCTYPE html>
<html lang="en">

<head>
    <title>LaoWai Photography - Adam Marsh</title>
    <?php include '../sitewide/globals.php'; ?>
    <script type="text/javascript">
    $(function() {
        $('a[href*="/pages/contact.php"]').addClass('selected');
    });
    </script>
    <style type="text/css">
    html,
    body {
        background-color: black;
    }

    body {
        opacity: 1;
        transition: 2s opacity;
    }

    body.fade {
        opacity: 0;
        transition: none;
    }
    </style>
</head>

<body>
    <script>
    document.body.className = 'fade';
    </script>
    <!-- Page Content -->
    <div class="container wrapper">
        <div class="col-md-3 pl0">
            <img src="/resources/images/ui/name.png" alt="LW">
        </div>
        <div class="col-md-9">
            <?php include '../sitewide/topnav.php'; ?>
        </div>
        <div class="col-md-12 nopad">
            <div class="row fadebg2">
                <!--<h2>Lifestyle Photographer<br /><small>Adam Marsh</small></h2>-->
                <h3>Contact Information<br /><sub>
                        ~ Thoughts or suggestions?</sub></h3>
            </div>
        </div>
        <div class="body row">
            <!-- Blog Entries Column -->
            <div class="col-md-3">
                <h3>Contact Details</h3>
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
                <hr />
                <div class="sbPic"><img src="/resources/images/ui/laowaiMEbig.png" width="300px" height="592px"
                        class="img-responsive hideSM" /></div>
            </div>
            <div class="col-md-6">
                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0 " width="582" height="500"
                    style="margin-top:20px;"
                    src="https://maps.google.com/maps?hl=en&q=12121 admiralty way, everett, wa 98204&ie=UTF8&t=m&z=15&iwloc=B&output=embed">
                </iframe>
                <hr />

                <iframe id="contact" class="contact-info" width="100%" height="600" src="../contactForm/index.php"
                    overflow="hidden" scrolling="no" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="col-md-3">
                <?php include '../sitewide/fullSidebar.php'; ?>
            </div>
        </div>
        <!-- /.row -->
        <footer>
            <?php include '../sitewide/footer.php'; ?>
        </footer>
    </div>
    <script>
    document.addEventListener("DOMContentLoaded", function(e) {
        document.body.className = '';
    });
    </script>
</body>

</html>