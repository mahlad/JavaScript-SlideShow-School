window.onload=function  () {
	var smallpart=document.getElementsByClassName('smallPart').item(0);
	var eachBtn=smallpart.getElementsByClassName('btns').item(0).getElementsByTagName('li');

		for(var i=0;i<eachBtn.length;i++){
			eachBtn.item(i).onclick=function(){
				alert(i);
			}
		}


}