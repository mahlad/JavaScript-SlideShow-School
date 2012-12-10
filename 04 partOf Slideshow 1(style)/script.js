$(function(){
	var partWith=Math.ceil(800/6),
		eachPart=$('div.slideshow div.partOf > div');
		eachPart.animate({width:partWith+'px'},800);
		eachPart.last().css({'padding-right':'440px'})
		eachPart.mouseover(function(){
			eachPart.animate({width:'60px'},800);
			$(this).animate({
				width:'500px',
				opacity:1
			},800)
			$('div.slideshow').mouseout(function(){
				eachPart.animate({
					width:partWith+'px',
					opacity:0.5
				},800);
			})
		})

})