window.onload=function() {
	var smallPart=document.getElementsByClassName('smallPart').item(0);
	var btns=smallPart.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	var slideshow=document.getElementsByClassName('slideshow').item(0);
	var allSLide=slideshow.getElementsByClassName('allSLide').item(0);
 var zero=0;
	var temp=function(j) {
			btns.item(zero).className='left';
			allSLide.style.left=(-600*j)+'px';
			btns.item(j).className='active left';
			zero=j;
		}
		var next=function() {
			temp(zero+1);
		}
	for(var i=0 ;i<btns.length;i++){
		(function (j){
					btns.item(j).onclick=function(){
					temp(j);
				}
			})(i);
		
	}
setInterval(next,2000);
}	