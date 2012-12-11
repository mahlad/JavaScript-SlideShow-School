$(function(){
	var partwith=Math.ceil(800/6);
		eachpart=$('div.slideshow div.train>div');
		eachpart.animate({width:partwith+'px'});
		eachpart.last().css({'padding-right':'253px'});
		eachpart.mouseover(function(){
			eachpart.animate({width:'80px'});
			$(this).animate({width:'403px'});
		})
		$('div.slideshow').mouseout(function(){
			eachpart.animate({width:partwith+'px'});
		})
})