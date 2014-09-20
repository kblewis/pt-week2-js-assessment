//Make the following function calls work
  
var giveItName = function(name, cb){
	var name = prompt("What is your name?");
	cb(name);
}


  giveItName('name', function(){
    alert('Your name is ' + name);
  });

  var nums = [2,4,5,6];
  //returns true if all items in the array are evens.
  areEvens(nums, function(item){
    return item % 2 === 0; 
  });

