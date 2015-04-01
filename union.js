
function union_arr(a,b){
   var res = [];
   var temp = {};
   
   for(var i=a.length-1;i>=0;i--)
      temp[a[i]]=a[i];
   
   for(var i=b.length-1;i>=0;i--)
     	temp[b[i]]=b[i];
    
   for(var key in temp)
      {    
        res.push(key);
      }
    return res;   
}

var a = [-1, 2, 0, 3];
var b = [0, 3, 1];
console.log(union_arr(a,b));
// union without preserving the order
