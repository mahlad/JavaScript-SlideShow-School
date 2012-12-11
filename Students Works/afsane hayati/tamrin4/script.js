window.onload=function(){
	var menu=document.getElementsByClassName('menu').item(0);
	var	eachbtns=menu.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	var	slideshow=document.getElementsByClassName('slideshow').item(0);
	var	train=slideshow.getElementsByClassName('train').item(0);
		curentslide=0;
	var nextbtn=slideshow.getElementsByClassName('next').item(0);
	var	prevbtn=slideshow.getElementsByClassName('prev').item(0);
		changslide=function(n){
			if(n>eachbtns.length-1)n=0;
			if (n<0)n=eachbtns.length-1;
			train.style.left=(-650*n)+'px';
			eachbtns.item(curentslide).className='left';
			eachbtns.item(n).className='active left ';
			curentslide=n;
		}
		nextslide=function(){
			changslide(curentslide+1);
		}
		prevslide=function(){
			changslide(curentslide-1);
		}
		var autoplayId=false;
		autoplay=slideshow.onmouseout=function(){
			autoplayId=setInterval(nextslide,2000);
		}
		stopplay=slideshow.onmouseover=function(){
			clearInterval(autoplayId);
		}
		nextbtn.onclick=nextslide;
		prevbtn.onclick=prevslide;
		for (var i=0; i<eachbtns.length;i++) {
			(function (j){
				eachbtns.item(j).onclick=function(){
					changslide(j);
				}
			})(i);
		}

		changslide(0);
		autoplay();
		
}