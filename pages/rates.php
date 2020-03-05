<!DOCTYPE html>
<html lang="en">

<head>
    <title>LaoWai Photography - Adam Marsh</title>
    <?php include '../sitewide/globals.php'; ?>
    <style type="text/css">
        .panel-heading .accordion-toggle:after {
            /* symbol for "opening" panels */
            font-family: 'Glyphicons Halflings';  /* essential for enabling glyphicon */
            content: "\e114";    /* adjust as needed, taken from bootstrap.css */
            float: right;        /* adjust as needed */
            color: #79302E;         /* adjust as needed */
        }
        .panel-heading .accordion-toggle.collapsed:after {
            /* symbol for "collapsed" panels */
            content: "\e080";    /* adjust as needed, taken from bootstrap.css */
        }
    </style>
    <script type="text/javascript">
        $(function () {
            $('a[href*="/pages/rates.php"]').addClass('selected');
        });


    </script>
</head>

<body>
<div id="dvLoading"></div>
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
            <h3>Rates & Services<br/><sub>
                ~ Photographic services fee...</sub></h3>
        </div>
    </div>

    <div class="body row">

        <!-- Blog Entries Column -->

            <div class="col-md-3 sbPic one">
                <img src="/resources/images/ui/sb2.jpg" width="290px" height="1088px" class="img-responsive"/>
            </div>
            <div class="col-md-6">
                <h3>Make Your Own "<span class="italic">package</span>"</h3>

                <h4>Customized services/packages are always negotiable</h4>
                <hr/>
                <h4>Full portrait package ($295) includes:</h4>
                <p>The fee is set for individuals or groups up to 4 people (or other furry loved ones) at my studio or location of their choice. ($25 for
                    each additional person.)</p>
                <ul class="rates">
                    <li> Up to 2-hour photo session (approx 40-50 shots) at a location of your choice.</li>
                    <li> Up to 2 wardrobe changes.</li>
                    <li> Retouching of your favorite 12 photos.</li>
                    <li> One 8x10" high-resolution print and two 5x7" prints.</li>
                    <li> Low-Res (96ppi) USB thumbdrive of your entire session for online sharing/posting.</li>
                    <li> Online photo gallery of your favorite 12 shots for 90 days.</li>
                    <li> On-site make-up artist.</li>
                    <li> Closet of fun props and clothing accessories.</li>
                </ul>
                <hr/>
                <h4>Mini portrait/headshot package ($175) includes:</h4>
                <p>Ideal for business executives and high school seniors; and most of us who are on a budget.</p>
                <ul class="rates">
                    <li> 1-hour photo session (approx 25 shots) at Lao Wai Studio in Oakland Chinatown.</li>
                    <li> 1 wardrobe change.</li>
                    <li> Retouching of your favorite 12 photos.</li>
                    <li> One 8x10" high-resolution print and two 5x7" prints.</li>
                    <li> Low-Res (96ppi) USB thumbdrive of your entire session for online sharing/posting.</li>
                    <li> Online photo gallery of your favorite 12 shots for 90 days.</li>
                    <li> On-site make-up artist.</li>
                    <li> Closet of fun props and clothing accessories.</li>
                </ul>
                <hr/>
                <h4>Weddings, Special Events, Corporate Engagements</h4>
                <ul class="rates">
                    <li>Hourly rate for weddings (and other special services) is $400 which means I can shoot your whole wedding
                        for 1200 bucks (3-hour minimum). After all, it's an event that comes only two or three times in a
                        lifetime ;), and I want to make each one better than the last. Incidentally, go ahead and take $100 off
                        if the bride and groom have 3 or more weddings between them!
                        <h4 class="options">The wedding fee includes:</h4>
                        <ul class="sub">
                            <li> Low-Res (96ppi) USB thumbdrive of the best 50 shots for online sharing/posting.</li>
                            <li> Standard photo retouching of all photos.</li>
                            <li>2 11x16" prints of any two poses.</li>
                            <li>2 8x10" prints of any two poses.</li>
                            <li>2 5x7" prints of any two poses.</li>
                            <li>Additional prints may be purchased separately.</li>
                            <li>Professionally printed photo books available through my printing partners; costs vary.</li>
                        </ul>
                    </li>
                </ul>
                <hr>
                <div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                    Other/Additional Services
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in">
                            <div class="panel-body">
                                <ul class="rates">
                                    <li>Sexy passport photos are $25. Please call ahead.</li>
                                    <li>Location sessions in Oakland/East Bay are included in session fee. Location sessions in San Francisco
                                        and the penisula are an additional $25. Travel to locations beyond the bay area can also be arranged.</li>
                                    <li>Additional hourly rate is $175.</li>
                                    <li>Composites are $75 and includes 2 8x10" prints.</li>
                                    <li>Online photo gallery for 90 days: $60.</li>
                                    <li>Session invoices are generated at time of booking. Partial payment is required upon receipt by mail.
                                        This locks in your time/date. <br/>
                                        <div class="rights"> Rights: LaoWai Photography and Adam Marsh retains copyright of images and usage rights only for
                                            promotional purposes. </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                    High-resolution prints
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse">
                            <div class="panel-body">
                                <ul class="rates">
                                    <li>12x18" prints are $35.</li>
                                    <li>11x16" prints are $30.</li>
                                    <li>8x10" prints are $25.</li>
                                    <li>5x7" prints are $15.</li>
                                    <li>4x6" prints are $10.</li>
                                    <li>2.5x3.5" (8 wallet-sized) prints are $20.</li>
                                    <li>2x2" passport photos (4) are included in the sitting fee of $25.</li>
                                    <li>8x10" and 11x16" composites are $75.</li>
                                    <li>Professionally printed photo books available through my printing partners; costs vary.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>


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


</body>

</html>
