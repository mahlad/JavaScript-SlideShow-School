$(function(){
	var smallpart=$('.smallPart'),
		eachBtn=$('ul.btns li'),
		slideshow=$('section.slideshow'),
		allslide=$('section.slideshow .allSLide'),
		curentSlid=0,
		nextBtn=$('section.slideshow .next'),
		prevBtn=$('section.slideshow .prev'),
		autoplayId=false;
	(changeSlid=function(n){
	if(n>eachBtn.length-1)n=0;
	if(n<0)n=eachBtn.length-1;
	allslide.animate({
		left:-600*n
	},500,'ease-in-out');
	eachBtn.eq(curentSlid).removeClass('active');
	eachBtn.eq(n).addClass('active');
	curentSlid=n;
	})(0);
	eachBtn.click(function(){
		changeSlid($(this).index());
	});
	nextBtn.click(nextSlide=function(){
		changeSlid(curentSlid+1);
	});
	prevBtn.click(prevSlid=function(){
		changeSlid(curentSlid-1);
	});
	(autoPlay=function(){
		if(autoplayId) return;
		autoplayId=setInterval(nextSlide,2000);
	})();
	stopPlay=function(){
		clearInterval(autoplayId);
		autoplayId=false;
	}

});