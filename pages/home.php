<!DOCTYPE html>
<html lang="en">
<head>
    <title>LaoWai Photography - Adam Marsh</title>
    <?php include '../sitewide/globals.php'; ?>
    <script type="text/javascript">
    $(function() {
        $('a[href*="/pages/home.php"]').addClass('selected');
    });
    /*window.addEventListener('load', function () {
     var
     img = new Image,
     ctx = document.getElementById('myCanvas').getContext('2d');
     img.src = '../resources/images/ui/strip.jpg';
     img.addEventListener('load', function () {
     var interval = setInterval(function() {
     var x = 0, y = 0;
     return function () {
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
     ctx.drawImage(img, x, y);
     x += 1;
     if (x > ctx.canvas.width) {
     x = 0;
     }
     };
     }(), 1000/40);
     }, false);
     }, false);*/
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
            <a class="navbar-brand" href="home.php"><img src="/resources/images/ui/leftLogo.png" alt="LW"></a>
            <div class="pl20">
                <h1>~Lifestyle Photographer,<br />
                    <sub>Adam Marsh</sub>
                </h1>
            </div>
        </div>
        <div class="col-md-9">
            <?php include '../sitewide/topnav.php'; ?>
        </div>
        <div class="col-md-9 pr0">
            <div class="row fadebg">
                <p>LaoWai Photography "captures people with a sensitive eye and a photojournalistic style that is
                    organic, artistic and reverently sublime..."</p>
            </div>
            <!-- Projects Row -->
            <div class="row summary-quad-wrapper">
                <div class="summary-quad">
                    <h4>Portraits (Individuals, Couples, Groups) -</h4>
                    <p>portraits for everyone: every day faces and expressions that tell a story.</p>
                </div>
                <div class="summary-quad">
                    <h4>Special Occasions -</h4>
                    <p>weddings, engagements, reunions, special events, places and occasions to remember.</p>
                </div>
                <div class="summary-quad">
                    <h4>Seniors/Children -</h4>
                    <p>captured in their own environment is an experience they'll enjoy.</p>
                </div>
                <div class="summary-quad">
                    <h4>Corporate/Business -</h4>
                    <p>lifestyle photos or composites for brochures, mailers, posters, and other marketing/PR
                        collateral.</p>
                </div>
            </div>
            <!-- /.row -->
        </div>
        <div class="body row">
            <!--  <div class="col-md-2 hideSM"><img src="/resources/images/ui/laowaiME.png"/></div>-->
            <!-- Blog Entries Column -->
            <div class="col-md-12">
                <?php include '../pages/slider/bootstrap-slider.html'; ?>
                <hr>
            </div>
        </div>
        <span>&nbsp;
            sesid=lwp.v2:&nbsp; <?php
/* counter */
/* opens countlog.txt to read the number of hits */
$data = fopen("../counter.txt", "r");
$count = fgets($data,1000);
fclose($data);
$count = $count + 1;
echo "$count";
echo "\n";
/* opens countlog.txt to change new hit number */
$data = fopen("../counter.txt", "w");
fwrite($data, $count);
fclose($data);
?> &nbsp;.030320
        </span>
        <footer>
            <?php include '../sitewide/footer.php'; ?>
        </footer>
    </div>
    <script>
    document.addEventListener("DOMContentLoaded", function(e) {
        document.body.className = '';
    });
    </script>
    <!-- Script to Activate the Carousel -->
    <script>
    $.support.transition = (function() {
        var thisBody = document.body || document.documentElement,
            thisStyle = thisBody.style,
            support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined ||
            thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle
            .OTransition !== undefined;
        return support;
    })();
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
    </script>
</body>
</html>