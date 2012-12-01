window.onload=function  () {
	var smallpart=document.getElementsByClassName('smallPart').item(0),
		eachBtn=smallpart.getElementsByClassName('btns').item(0).getElementsByTagName('li'),
		slideshow=document.getElementsByClassName('slideshow').item(0),
		allslide=slideshow.getElementsByClassName('allSLide').item(0),
		curentSlid=0;

	changeSlid=function(n){
		allslide.style.left=(-600*n)+'px';
		eachBtn.item(curentSlid).className='left';
		eachBtn.item(n).className='active left';
		curentSlid=n;
	}
		for(var i=0;i<eachBtn.length;i++){
			(function (j){
					eachBtn.item(j).onclick=function(){
					changeSlid(j);
				}
			})(i);
		}
	changeSlid(0);

}