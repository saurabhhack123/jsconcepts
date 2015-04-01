// 1.

(function(){

	var foo =1 ;
	function bar(){
	 var foo=2;
	}
	bar();
	console.log(foo);
	if(true){
		var foo=3;
	}
	console.log(foo);
}());

// output:
// 1
// 3

// 2.

(function(){

	var a =1 ;
	function test(){
		console.log(a);
		var a=2;
		console.log(a);
	}
	console.log(a);
	test();
}());

// output: 
// 1
// Undefined declaration is present but after using the variable
// 2 

// 3.

(function(){

	var a =1 ;
	function test(){
		console.log(a);
		a=2;
		console.log(a);
	}
	console.log(a);
	test();
}());


// out:  1 1 2 
// reason: 
// 1 => simple
// 1 => it will look up for declaration , and woohh , find it , so its 1
// 2 => a definition is there , so a is 2



// 4.

(function(){

	baz=5;
	var bar=10;
}());



console.log(baz); // 5
console.log(bar); // error : bar is not defined , since we are limiting the scope of bar

