$(function(){
	var smallpart=$('.smallPart'),
		btns=$('.btns li'),
		slideshow=$('section.slideshow'),
		allslide=$('section.slideshow .allSLide'),
		per=0,
		autoplayId=false;
  cheng=function(j) {
 	if (j>btns.length-1) {j=0};
 	if (j<0) {j=btns.length-1};
 	allslide.animate({
		left:-600*j
	},2000,'ease-in-out');
 	btns.eq(per).removeClass('active');
 	btns.eq(j).addClass('active');
 	per=j;
 } 
 btns.click(function() {
 	cheng($(this).index());
 })
autoPlay=function(){
		if(autoplayId)return;
		autoplayId=setInterval(cheng,2000);
	}
	stopPlay=function(){
		clearInterval(autoplayId);
		autoplayId=false;
	}


 	
});