// console.log("Hello there");

// console.log(this);

// var b = 30;
// let c = 90;

// this.a = 37;
// console.log(window.a);
// console.log(this.b, this.c);


//EXAMPLE 1 = CALL SITE AND CALL STACK

// var fubar = "42";

// function baz() {
// 	console.log("baz");
// 	bar();
// }

// function bar() {
// 	console.log("bar");
// 	foo();
// }

// function foo() {
// 	var fubar = "13";
// 	console.log("foo");
// 	console.log("this", this); // window
// 	console.log("this", this.fubar); // 42
// }

// baz();


// EVENT LISTENER EXAMPLE

// var eventFxn = function(event) {}
// 	console.log("event", event);
// 	console.log("event.target", event.target);
// 	console.log("this", this);
// };




// $("#my-button").click(function(eventFxn);


// //old way still works
// document.getElementById("my-button").addEventListener("click", eventFxn);


//EXAMPLE 2


// function foo(){
// 	console.log("this", this);
// 	console.log("this.a", this.a);
// };

// var obj = {
// 	a: 2,
// 	monkey: foo
// };


// obj.monkey();


// EXample 3

// function foo() {
// 	console.log("this", this);
// 	console.log("this.a", this.a);
// };

// var obj2 = {
// 	a: 42,
// 	foo: foo
// };


// var obj1 = {
// 	a: 2,
// 	obj2: obj2
// };

// obj1.obj2.foo();

// EXAMPLE 4

// function foo() {
// 	console.log("this", this);
// 	console.log("this.a", this.a);
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };


// var bar = obj.foo;

// var a = "global warming";

// obj.foo()

// bar();

// EXAMPLE 5

function foo() {
	console.log("this", this);
	console.log("this.a", this.a);
};


function doFoo(fn){
	return fn();
};

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global";

doFoo(obj.foo);












