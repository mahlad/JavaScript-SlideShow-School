window.onload=function  () {
	var smallpart=document.getElementsByClassName('smallPart').item(0);
	var eachBtn=smallpart.getElementsByClassName('btns').item(0).getElementsByTagName('li');

		for(var i=0;i<eachBtn.length;i++){
			var temp=function (j){
					eachBtn.item(j).onclick=function(){
					alert(j);
				}
			}
			temp(i);
		}


}