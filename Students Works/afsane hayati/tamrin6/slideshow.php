<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8"/>
	<title>..::slideshow::..</title>
	<link rel="stylesheet" href="1style.css">
	<link rel="stylesheet" href="style.css">
	<script type="text/javascript" src="zepto.js"></script>
	<script type="text/javascript" src="script.js"></script>
</head>
<body>
	<div class="container">
		<div class="slideshow relative">
			<div class="train">
				<?php 
					$img_path=('img');
					$img_arr=scandir($img_path);

					foreach ($img_arr as $each_img) {
						$img_part=explode('.', $each_img);
						$img_type=strtolower(end($img_part));
						if ($img_type=='jpg') {
							echo "<div class='left' style=\"background-image:url('$img_path/$each_img');\"></div>";
						}
					}
				 ?>
			</div>
		</div>
	</div>
</body>
</html>