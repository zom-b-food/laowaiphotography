<!DOCTYPE html>
<html lang="en">
<head>
    <title>LaoWai Photography - Adam Marsh</title>
    <?php include '../sitewide/globals.php'; ?>
    <script type="text/javascript">
    $(function() {
        $('a[href*="/pages/about.php"]').addClass('selected');
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
                <h3>About LaoWai Photography<br /><sub>
                        ~ "LaoWai" (The Chinese vernacular for foreigner)</sub> </h3>
            </div>
        </div>
        <div class="body row">
            <!-- Blog Entries Column -->
            <div class="col-md-9">
                <h3>"A photograph is a <span class="italic">meditation</span>..."</h3>
                <p>A photograph is a meditation. Through photographs, we reflect and re-celibrate events, places, and
                    people in
                    our lives.</p>
                <p>Nothing illustrates the collaboration of art and science better than the art and science of
                    photography. It
                    employs the art of observation and the science of communication. One must see the sublime in the
                    mundane and
                    the extraordinary in the midst of ordinary. And one must communicate through pictures a context of
                    time that
                    can be preserved and remembered forever.</p>
                <div class="col-md-4 sbPic">
                    <img src="/resources/images/ui/laowaiMEbig.png" width="300px" height="592px"
                        class="img-responsive" />
                </div>
                <div class="col-md-7">
                    <h3>~ Lifestyle/Portrait Photographer, Adam Marsh</h3>
                    <p>I don't remember wanting to be a photographer growing up. I was a kid who wanted to be a
                        kangaroo. But
                        later in life, as those particular dreams failed to pan out,
                        I studied to be a writer and set to work on the next great American novel. I got a second BA in
                        English
                        and wrote tech manuals before moving full-time
                        into graphic design and development throughout the '90's. Since then, I have focused on building
                        myself
                        as an artist, writer, and photographer in electronic publishing primarily in Seattle and San
                        Francisco.
                        Known professionally as a "lifestyle photographer" I use my photojournalistic skills documenting
                        people,
                        places, and events that have enriched me spiritually/personally as well as experiences that give
                        me on a
                        regular basis <span class="italic">cultural perspectives</span> of life that I will always
                        cherish.</p>
                    <p>Founded in the heart of Chinatown (Oakland), I'm known in the neighborhood as the lao wai
                        photographer.
                        It's a moniker that's stuck with me as even my wife calls me her laowai laogong (foreign
                        husband). Recently, however, I have returned to my roots, here in Seattle, WA.</p>
                    <p>Please feel free to look around the site and call or drop me an email if you'd like to talk shop
                        or just
                        say hello. :)</p>
                    <div>
                        <p style="padding-left:36px;"><br />
                            Adam Marsh<br />
                            LaoWai Photography<br />
                            12121 Admiralty Way, #Q306<br />
                            Everett, WA 98204<br />
                            ***<br />
                            (206) 801-0073<br />
                            <a href="mailto:am@laowaiphotography.com">am@laowaiphotography.com</a></p>
                    </div>
                </div>
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
    <!-- /.container -->
    <script>
    document.addEventListener("DOMContentLoaded", function(e) {
        document.body.className = '';
    });
    </script>
</body>
</html>