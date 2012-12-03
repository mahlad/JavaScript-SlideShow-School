window.onload=function  () {
	var smallpart=document.getElementsByClassName('smallPart').item(0),
		eachBtn=smallpart.getElementsByClassName('btns').item(0).getElementsByTagName('li'),
		slideshow=document.getElementsByClassName('slideshow').item(0),
		allslide=slideshow.getElementsByClassName('allSLide').item(0),
		curentSlid=0,
		nextBtn=slideshow.getElementsByClassName('next').item(0),
		prevBtn=slideshow.getElementsByClassName('prev').item(0);
	(changeSlid=function(n){
		if(n>eachBtn.length-1)n=0;
		if(n<0)n=eachBtn.length-1;
		allslide.style.left=(-600*n)+'px';
		eachBtn.item(curentSlid).className='left';
		eachBtn.item(n).className='active left';
		curentSlid=n;
	})(0);

	nextSlide=function(){
		changeSlid(curentSlid+1);
	}
	prevSlid=function(){
		changeSlid(curentSlid-1);
	}
	var autoplayId=false;
	(autoPlay=slideshow.onmouseout=function(){
		autoplayId=setInterval(nextSlide,2000);
	})();
	stopPlay=slideshow.onmouseover=function(){
		clearInterval(autoplayId);
	}

	nextBtn.onclick=nextSlide;
	prevBtn.onclick=prevSlid;
	for(var i=0;i<eachBtn.length;i++){
		(function (j){
				eachBtn.item(j).onclick=function(){
				changeSlid(j);
			}
		})(i);
	}

}