<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Consequtive SlideShow - mahlad JavaScript-SlideShow-School On Github</title>
	<link rel="stylesheet" type="text/css" href="../1style.css">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="../zepto.js"></script>
	<script type="text/javascript" src="script.js"></script>
</head>
<body>
	<div class="container">
		<section class="slideshow relative overhide">
			<div class="allSLide absolute">
			<?php 
			$image_path='../images/consecutive';
			$images=scandir($image_path);
			// print_r($images);
			foreach ($images as $img) {
				$img_arr=explode('.',$img);
				$img_type=strtolower(end($img_arr));
				//echo $img_type.'<br/>';
				$types=array('jpg','png','gif','jpeg');
				if(in_array($img_type, $types)){
					echo "<div class='left' style=\"background-image:url('$image_path/$img');\"></div>";
				}else echo 'array error';
				
			}
			?>
			</div>
			<!-- <div class="allText absolute">
				<span class="left">Food One</span>
				<span class="left">Food Two</span>
				<span class="left">Food Three</span>
				<span class="left">Food Four</span>
				<span class="left">Food Five</span>
				<span class="left">Food Six</span>
			</div> -->
			<div class="next absolute"></div>
			<div class="prev absolute"></div>
		</section>
		<section class="smallPart">
			<ul class="btns absolute">
				<li class="left" style="background-image:url('../images/consecutive/small/pic 01.jpg');"></li>
				<li class="left" style="background-image:url('../images/consecutive/small/pic 02.jpg');"></li>
				<li class="left" style="background-image:url('../images/consecutive/small/pic 03.jpg');"></li>
				<li class="left" style="background-image:url('../images/consecutive/small/pic 04.jpg');"></li>
				<li class="left" style="background-image:url('../images/consecutive/small/pic 05.jpg');"></li>
				<li class="left" style="background-image:url('../images/consecutive/small/pic 06.jpg');"></li>
			</ul>
		</section>

	</div>
</body>
</html>