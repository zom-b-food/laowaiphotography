<!DOCTYPE html>
<html lang="en">

<head>
    <?php include 'sitewide/globals.php'; ?>
    <script>
    $(window).load(function() {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");
    });
    </script>
    <style type="text/css">
    .se-pre-con {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        background: url(/resources/images/ui/loading.svg) center no-repeat #000000;
    }
    </style>
</head>

<body>
    <div id="preloader" class="se-pre-con"></div>
</body>
<script type="text/javascript">
$(window).load(function() {
    window.setTimeout(function() {
        window.location.href = "./pages/home.php";
    }, 500)
});
</script>

</html>