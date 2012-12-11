window.onload=function(){
	var menu=document.getElementsByClassName('menu').item(0);
	var eachbtn=menu.getElementsByClassName('small').item(0).getElementsByTagName('li');
	var slideshow=document.getElementsByClassName('slideshow').item(0);
	var train=slideshow.getElementsByClassName('train').item(0);
	var nextbtn=slideshow.getElementsByClassName('next').item(0);
	var prevbtn=slideshow.getElementsByClassName('prev').item(0);
	currentslid=0;
	(changeslide=function(n){
		if(n>eachbtn.length-1)n=0;
		if(n<0)n=eachbtn.length-1;
		train.style.left=(-450*n)+'px';
		eachbtn.item(currentslid).className='left';
		eachbtn.item(n).className='active left';
		currentslid=n;
	})(0);
	nextslide=function(){
		changeslide(currentslid+1);
	}
	prevslide=function(){
		changeslide(currentslid-1);
	}
	var autoplayId=false;
	autoplay=slideshow.onmouseout=function(){
		autoplayId=setInterval(nextslide,2000);
	}
	stoppaly=slideshow.onmouseover=function(){
		clearInterval(autoplayId);
	}
	nextbtn.onclick=nextslide;
	prevbtn.onclick=prevslide;
	for (var i = 0; i <eachbtn.length; i++) {
		(function(j){
			eachbtn.item(j).onclick=function(){
				changeslide(j);
			}
		})(i);

	}
	changeslide(0);
	autoplay();
}