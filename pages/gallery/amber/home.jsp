<!DOCTYPE html>
<%@ page language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<sql:setDataSource dataSource="jdbc/demo"/>
<sql:query var="mop" scope="request">SELECT * FROM login
                                     WHERE userName LIKE ?
                                     ORDER BY userName
	<sql:param value="%${param.userName}%"/>
</sql:query>


<sql:setDataSource dataSource="jdbc/demo"/>

<head>
	<meta name="description" content="LaoWai Photography. Photographer of expressions that tell a story. Oakland, CA photographer Adam Marsh has always longed to tell the stories of people he photographs. And Adam Marsh has always fostered a style and philosophy that endeavors to illuminate the soul of everything he sees. He looks for a person's humanity in their expressions complete with the good, bad, and ugly. And in the end, often discovers a true and soulful beauty that reveals a story about everyday people that we can relate to and perhaps guide us through this journey of life. He truly loves people, and helping them find this beauty behind the camera is his heartfelt legacy.">
	<meta name="keywords" content="Oakland, CA candid documentary photographer, Oakland, CA fine art photographer, Oakland, CA photographer, Oakland, CA photography studio, Oakland, CA portrait photographer, Oakland, CA child photographer, Oakland, CA special events photographer, Oakland, CA lifestyle photographer, personal online photo gallery, family online photo gallery, family online photo album, childrens online photo album, Oakland, CA online photographer, portrait photographer, child photographer, photographer of every day faces, candid photographer, street photographer, documentary photographer, Oakland, CA party photographer, Oakland, CA reunion photographer, Oakland, CA special occasions photographer, Oakland, CA family photographer, Oakland, CA childrens photographer, Oakland, CA acting headshots, Oakland, CA headshots photographer, Adam Marsh">
	<meta name="robots" content="all">
	<meta name="title" content="LaoWai Photography - Photographer, Adam Marsh">

	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
	<link rel="shortcut icon" href="<%=request.getContextPath()%>/favicon.ico" type="image/x-icon">
	<link rel="icon" href="<%=request.getContextPath()%>/favicon.ico" type="image/x-icon">
	<script type="text/javascript" src="<%=request.getContextPath()%>/pages/gallery/dep/jquery-1.6.2.min.js"></script>
	<link rel="stylesheet" href="<%=request.getContextPath()%>/pages/gallery/dep/html5Boilerplate.css" type="text/css">
	<link rel="stylesheet" href="<%=request.getContextPath()%>/pages/gallery/dep/seaArts.css" type="text/css">



	<title>laowaiphoto - your gallery</title>

	<script type="text/javascript" src="<%=request.getContextPath()%>/pages/gallery/dep/jquery.aw-showcase.min.js"></script>

	<link rel="stylesheet" href="<%=request.getContextPath()%>/pages/gallery/ss/overrides.aw-showcase.css"/>
	<script type="text/javascript">

		$(document).ready(function() {
			$("#showcase").awShowcase(
					{
						width:					650,
						height:					566,
						auto:					false,
						interval:				3000,
						continuous:				false,
						loading:				true,
                     	arrows:					true,
						buttons:				false,
						btn_numbers:			true,
						keybord_keys:			true,
						mousetrace:				false,
						pauseonover:			true,
						transition:				'hslide', /* vslide/hslide/fade */
						transition_speed:		500,
						show_caption:			'onhover', /* onload/onhover/show */
						thumbnails:				true,
						thumbnails_position:	'outside-last', /* outside-last/outside-first/inside-last/inside-first */
						thumbnails_direction:	'vertical', /* vertical/horizontal */
						thumbnails_slidex:		0 /* 0 = auto / 1 = slide one thumbnail / 2 = slide two thumbnails / etc. */
					});
		});
	</script>

</head>
<body onload="change()">

<%
	if (request.getSession(false).getAttribute("emailAddress") == null) {
		response.sendRedirect(request.getContextPath() + "/pages/login.php");

	}
%>

<div id="container-page">




	<p>&nbsp;</p>

	<h2>&nbsp;&nbsp;- Amber's Location Shots:</h2>

	<h3>&nbsp;&nbsp;Welcome&nbsp;${fn:escapeXml(param.userName)}.&nbsp;&nbsp;Photos of Amber Gao; 2011 - 2012</h3>

	<!-- Start Advanced Gallery Html Containers -->
	<div id="gallery-page">


		<div id="showcase" class="showcase" style="width:100%;">
			<div>
			<img src="<%=request.getContextPath()%>/pages/gallery/amber/01.jpg" alt="01"/>

			<div class="showcase-thumbnail">
				<img src="<%=request.getContextPath()%>/pages/gallery/amber/01-thumb.jpg" alt="01" width="140px"/>

				<div class="showcase-thumbnail-caption">Amber 01</div>
				<div class="showcase-thumbnail-cover"></div>
			</div>
			<div class="showcase-caption">
				<h3>On location: Kunming China, 2011</h3>
			</div>
		</div>
		<div>
			<img src="<%=request.getContextPath()%>/pages/gallery/amber/02.jpg" alt="02"/>

			<div class="showcase-thumbnail">
				<img src="<%=request.getContextPath()%>/pages/gallery/amber/02-thumb.jpg" alt="01" width="140px"/>

				<div class="showcase-thumbnail-caption">Amber 02</div>
				<div class="showcase-thumbnail-cover"></div>
			</div>
			<div class="showcase-caption">
				<h3>On location: Kunming China, 2011</h3>
			</div>
		</div>
		<div>
			<img src="<%=request.getContextPath()%>/pages/gallery/amber/03.jpg" alt="03"/>

			<div class="showcase-thumbnail">
				<img src="<%=request.getContextPath()%>/pages/gallery/amber/03.jpg" alt="01" width="140px"/>

				<div class="showcase-thumbnail-caption">Amber 03</div>
				<div class="showcase-thumbnail-cover"></div>
			</div>
			<div class="showcase-caption">
				<h3>On location: LiJiang China, 2011</h3>
			</div>
		</div>
		<div>
			<img src="<%=request.getContextPath()%>/pages/gallery/amber/04.jpg" alt="01"/>

			<div class="showcase-thumbnail">
				<img src="<%=request.getContextPath()%>/pages/gallery/amber/04.jpg" alt="01" width="140px"/>

				<div class="showcase-thumbnail-caption">Amber 04</div>
				<div class="showcase-thumbnail-cover"></div>
			</div>
			<div class="showcase-caption">
				<h3>On location: Kunming China, 2011</h3>
			</div>
		</div>

			<div>
				<img src="<%=request.getContextPath()%>/pages/gallery/amber/05.jpg" alt="02"/>

				<div class="showcase-thumbnail">
					<img src="<%=request.getContextPath()%>/pages/gallery/amber/05-thumb.jpg" alt="02" width="140px"/>

					<div class="showcase-thumbnail-caption">Amber 05</div>
					<div class="showcase-thumbnail-cover"></div>
				</div>
				<div class="showcase-caption">
					<h3>On location: Mt Vernon, WA, 2012</h3>
				</div>
			</div>
			<div>
				<img src="<%=request.getContextPath()%>/pages/gallery/amber/06.jpg" alt="02"/>

				<div class="showcase-thumbnail">
					<img src="<%=request.getContextPath()%>/pages/gallery/amber/06-thumb.jpg" alt="02" width="140px"/>

					<div class="showcase-thumbnail-caption">Amber 06</div>
					<div class="showcase-thumbnail-cover"></div>
				</div>
				<div class="showcase-caption">
					<h3>On location: Mt Vernon, WA, 2012</h3>
				</div>
			</div>
			<div>
				<img src="<%=request.getContextPath()%>/pages/gallery/amber/07.jpg" alt="03"/>

				<div class="showcase-thumbnail">
					<img src="<%=request.getContextPath()%>/pages/gallery/amber/07-thumb.jpg" alt="01" width="140px"/>

					<div class="showcase-thumbnail-caption">Amber 07</div>
					<div class="showcase-thumbnail-cover"></div>
				</div>
				<div class="showcase-caption">
					<h3>On location: Mt Vernon, WA, 2012</h3>
				</div>
			</div>
			<div>
				<img src="<%=request.getContextPath()%>/pages/gallery/amber/08.jpg" alt="03"/>

				<div class="showcase-thumbnail">
					<img src="<%=request.getContextPath()%>/pages/gallery/amber/08.jpg" alt="01" width="140px"/>

					<div class="showcase-thumbnail-caption">Amber 08</div>
					<div class="showcase-thumbnail-cover"></div>
				</div>
				<div class="showcase-caption">
					<h3>On location: Mt Vernon, WA, 2012</h3>
				</div>
			</div>


		</div>
	</div>

	<div style="clear: both;">&nbsp;</div>

</div>

</body>
</html>
