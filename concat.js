var a = "Hello";
var b = "World";

var c = function(msg){
	console.log(msg);
}

c(a.concat(b));

String.prototype.concat = function(b){
      return b + this;
}

c(a.concat(b));
