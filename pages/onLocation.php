<!DOCTYPE html>
<html lang="en">
<head>
    <title>LaoWai Photography - Adam Marsh</title>
    <?php include '../sitewide/globals.php'; ?>
    <script type="text/javascript">
    $(function() {
        $('a[href*="/pages/onLocation.php"]').addClass('selected');
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
                <h3>Have Camera Will Travel<br /><sub>
                        ~ LaoWai Studio or on Location</sub></h3>
            </div>
        </div>
        <div class="body row">
            <!-- Blog Entries Column -->
            <div class="col-md-3 sbPic one">
                <img src="/resources/images/ui/sb1.jpg" width="290px" height="1088px" class="img-responsive" />
            </div>
            <div class="col-md-6">
                <h3>Making the Most of Your Photo Session</h3>
                <h4>Location Shoots~</h4>
                <p>Your photo session should be all about YOU. You are the star and my job is to help you shine and
                    capture
                    those moments of you at your best.
                    I believe that people shine the brightest in an environment that can showcase their style and
                    personality.
                    And to be quite candid, I'm not the
                    kind of photographer who'd stand you up in his studio with a fake light post or phoney backdrop.
                    Let's plan
                    your photo shoot together and come up
                    with a location that will show off the best part of you while giving you an experience I'm sure
                    you'll love.
                </p>
                <h4>Studio Sessions~</h4>
                <p>Well, in spite of what I just said about location shoots, there is definitely an advantage for having
                    your
                    portraits done in a studio. First of all, for executive portraits
                    and acting headshots, there's no better place than the controlled environment of a professional
                    photography
                    studio. The
                    studio offers the ability to fine-tune every aspect of a photographic composition. The art of studio
                    lighting is truly a science that can be exploited best under optimally controlled
                    conditions that are inherent to studio photography. Not to mention, studio shots are intended on
                    focusing
                    completely on the subject which means you won't have to worry
                    about getting lost in the scenery.
                </p>
                <p><img src="/resources/images/ui/camera.jpg" alt="Nikon D800" class="img-responsive"></p>
            </div>
            <!-- <div class="col-md-7">
             <h3>~ Lifestyle/Portrait Photographer, Adam Marsh</h3>
             <p>I don't remember wanting to be a photographer growing up. I was a kid who wanted to be a kangaroo. But
                 later in life, as those particular dreams failed to pan out,
                 I studied to be a writer and set to work on the next great American novel. I got a second BA in English
                 and wrote tech manuals before moving full-time
                 into graphic design and development throughout the '90's. Since then, I have focused on building myself
                 as an artist, writer, and photographer in electronic publishing primarily in Seattle and San Francisco.
                 Known professionally as a "lifestyle photographer" I use my photojournalistic skills documenting people,
                 places, and events that have enriched me spiritually/personally as well as experiences that give me on a
                 regular basis <span class="italic">cultural perspectives</span> of life that I will always cherish.</p>
             <p>Located in the heart of Chinatown (Oakland), I'm known in the neighborhood as the lao wai photographer.
                 It's a moniker that's stuck with me as even my wife calls me her laowai laogong (foreign husband).</p>
             <p>Please feel free to look around the site and call or drop me an email if you'd like to talk shop or just
                 say hello. :)</p>
             <div>
                 <p style="padding-left:36px;"><br/>
                     Adam Marsh<br/>
                     LaoWai Photography<br/>
                     320 10th Street,<br/>Suite 312<br/>
                     Oakland, CA 94607<br/>
                     ***<br/>
                     (510) 877-0763<br/>
                     <a href="mailto:web@laowaiphotography.com">web@laowaiphotography.com</a></p>
             </div>
         </div>-->
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