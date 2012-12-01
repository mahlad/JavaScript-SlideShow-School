window.onload=function  () {
	var smallpart=document.getElementsByClassName('smallPart').item(0),
		eachBtn=smallpart.getElementsByClassName('btns').item(0).getElementsByTagName('li'),
		slideshow=document.getElementsByClassName('slideshow').item(0),
		allslide=slideshow.getElementsByClassName('allSLide').item(0),
		curentSlid=0;

	changeSlid=function(n){
		if(n>eachBtn.length-1)n=0;
		allslide.style.left=(-600*n)+'px';
		eachBtn.item(curentSlid).className='left';
		eachBtn.item(n).className='active left';
		curentSlid=n;
	}

	nextSlide=function(){
		changeSlid(curentSlid+1);
	}
		for(var i=0;i<eachBtn.length;i++){
			(function (j){
					eachBtn.item(j).onclick=function(){
					changeSlid(j);
				}
			})(i);
		}
	changeSlid(0);
	setInterval(nextSlide,2000);

}