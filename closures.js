//  closure should be use when static things are concern
//  to achieve the private variable concept for a function object


var sum = (function(){
	
	var counter = 0;
	return function(){
	    counter+=1; 
	    console.log(counter);
	}

})();


sum(); // 1
sum(); // 2
sum(); // 3

// hack to make counter a static variable


