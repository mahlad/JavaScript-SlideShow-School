<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Part of Image Slideshow</title>
	<link rel="stylesheet" type="text/css" href="../1style.css">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="../zepto.js"></script>
	<script type="text/javascript" src="script.js"></script>
</head>
<body>
	<div class="container">
		<div class="slideshow relative">
			<div class="partOf">
				<?php 
					$path='../images/partOf';
					$img_arr=scandir($path);
					
					foreach ($img_arr as $each_img) {
						$img_type=explode('.',$each_img);
						$end_type=strtolower(end($img_type));
						if($end_type=='jpg'){
							echo "<div class='left' style=\"background-image:url('$path/$each_img');\">
								<span></span>
							</div>";
						}
					}
				 ?>
			</div>
		</div>
	</div>	
</body>
</html>