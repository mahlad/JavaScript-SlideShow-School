window.onload=function  () {
	var smallpart=document.getElementsByClassName('smallPart').item(0);
	var eachBtn=smallpart.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	var slideshow=document.getElementsByClassName('slideshow').item(0);
	var allslide=slideshow.getElementsByClassName('allSLide').item(0);
	changeSlid=function(n){
		allslide.style.left=(-600*n)+'px';
	}
		for(var i=0;i<eachBtn.length;i++){
			(function (j){
					eachBtn.item(j).onclick=function(){
					changeSlid(j);
				}
			})(i);
		}


}