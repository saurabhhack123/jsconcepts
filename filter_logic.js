
function _each(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

/*

Hidden logic :

action = function(element){
   	       if(context(element))
   	           res.push(element);
        }

context = function(num){
	return num%2==0;
}

*/

var _filter = function(a,context){
   var res = [];

   _each(a,function(element){
   	  if(context(element))
   	     res.push(element);
   });
   return res;
}

// context even 
var e_cntx = function(num){
	return num%2==0;
}

var o_cntx = function(num){
	return num%2!=0;
}

// output
even_ele = _filter([1,2,3,4,5,6],e_cntx);
console.log(even_ele);

odd_ele = _filter([1,2,3,4,5,6],o_cntx);
console.log(odd_ele);
