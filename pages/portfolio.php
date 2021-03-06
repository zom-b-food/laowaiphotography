<!DOCTYPE html>
<html lang="en">
<head>
    <title>LaoWai Photography - Adam Marsh</title>
    <?php include '../sitewide/globals.php'; ?>
    <script type="text/javascript">
    $(function() {
        $('a[href*="/pages/portfolio.php"]').addClass('selected');
    });
    </script>
    <!-- <link href='http://fonts.googleapis.com/css?family=PT+Sans+Narrow&v1' rel='stylesheet' type='text/css' />
    <link href='http://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css' />-->
    <noscript>
        <style>
        .es-carousel ul {
            display: block;
        }
        </style>
    </noscript>
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
                <h3>Lifestyle Photographer<br /><sub>Adam Marsh</sub></h3>
                <p>I have always longed to tell the stories of people I photograph. And I have always fostered a style
                    and philosophy that endeavors to illuminate the soul of everything I see. I look for a person's
                    humanity in their expressions complete with the good, bad, but never ugly ;). And in the end, I
                    often discover a true and soulful beauty that reveals a story about everyday people that, hopefully,
                    we can all relate to. I love people, and helping them find this beauty behind the camera is my
                    number one goal.</p>
            </div>
        </div>
        <div class="body row">
            <!-- Blog Entries Column -->
            <div class="col-md-12">
                <hr>
                <!-- Gallery Start -->
                <?php include '../pages/gallery/gallery.html'; ?>
                <!-- Gallery End -->
                <hr>
            </div>
            <div class="col-md-12 nopad">
                <br />
                <img src="/resources/images/ui/strip.png" width="1200px" height="76px" class="img-responsive" />
                <hr>
            </div>
        </div>
        <!-- /.row -->
        <footer>
            <?php include '../sitewide/footer.php'; ?>
        </footer>
    </div>
    <!-- /.container -->
    <script>
    document.addEventListener("DOMContentLoaded", function(e) {
        document.body.className = '';
    });
    </script>
</body>
</html>