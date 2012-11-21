//tartibe ejra
/*
document.write('Hello');
alert('welcome');
*/
//tarife array & object
/*
var arr = new Array(1,2,5,4,12);

var arr = [6,8,9,3,8];

var arr = new Array();
arr[0] = "Mahla";
arr[1] = "Mina";
arr[2] = "Zahra";

alert(arr);
*/
//farakhani functions
/*


function test(){
	alert(1);
}
test.call();
*/
/*
var test = function (){
	// document.write(676);
	alert(1);
}
test.call();
*/
/*
var test = function (){
	alert(1);
}
test();

*/
/*
(test = function (){
	alert(1);
}).call();
*/
/*
(test = function (){
	alert(1);
})();
*/
/*
(function (){
	alert(1);
})();
*/
/*
test = function(){
	return 5;
}

var a=test(); // 5
alert(a);
//alert(test);
*/
/*
double = function(n){
	return n*2;
}

var a=double(5); // 10
alert(a);
*/
/*
var a=5;
(function(){
	a=10;
})();
alert(a);
*/
/*
var a=5;
(function(){
	var a=10;
})();
alert(a);
*/
/*
whenLoad = function(){
	alert("welcome");
}
window.onload=whenLoad;
*/
/*
window.onload=function(){
	alert("welcome");
}
*/

/*
var obj = new Object();
obj.a=1;
obj.b=2;
obj.c=3;

var obj2 = {a:1,b:2,c:3};
alert(obj2.a)
*/
/*
obj1={fname:'Mahla',lname:'Delpak'}

//alert(obj1.fname); // Mahla

obj2 = obj1; // copy byRef;
obj1.fname='Zahra';

//alert(obj2.fname); // Zahra

obj2.lname = 'Minaii';

//alert(obj1.lname) // Minaii

obj1.age=10;

//alert(obj2.age); // 10
*/
/*
function person(fn,ln,age){
	this.fname = fn;
	this.lname = ln;
	this.age=age;
}

var obj1 = new person('Mahla','Delpak',15);

var obj2 = new person('Zahra','Minaii',40);

alert(obj1.fname); // Mahla
alert(obj2.fname); // Zahra
*/
/*
function person(fn,ln,age){
	this.fname = fn;
	this.lname = ln;
	this.age=age;

	this.sayHello = function(){
		alert("Hello, i'm "+this.fname+" "+this.lname);
	}
}

var obj1 = new person('Mahla','Delpak',15);

obj1.sayHello();
*/
/*
function person(fn,ln,age){
	this.fname = fn;
	this.lname = ln;
	this.age=age;

	this.sayHello = function(){
		alert("Hello, i'm "+this.fname+" "+this.lname);
	}
}

var obj1 = new person('Mahla','Delpak',15);

obj1.from = 'mashad';

alert(obj1.from); // mashad
*/
/*
iQueryFn = function (id){
	this.elm = document.getElementById(id);

	this.html = function(str){
		this.elm.innerHTML = str;
	}

	this.append = function(str){
		this.html(this.elm.innerHTML+str);
	}

	this.prepend = function(str){
		this.html(str+this.elm.innerHTML);
	}
}

var box = new iQueryFn('box');
box.html('Changed Value');
box.append(' Appended Value');
box.prepend('Prepended Value ');
*/