window.onload=function(){
	var menu=document.getElementsByClassName('menu').item(0);
	var eachbtn=menu.getElementsByClassName('small').item(0).getElementsByTagName('li');
	var slideshow=document.getElementsByClassName('slideshow').item(0);
	var train=slideshow.getElementsByClassName('train').item(0);
	changeslid=function(n){
		train.style.left=(-450*n)+'px';
	}

		for (var i = 0; i <eachbtn.length; i++) {
			(function (j){
				eachbtn.item(j).onclick=function(){
					changeslid(j);
				}
			})(i);
		}
			
}
