//Create a function called User which has the following properties
//username, email, password, birthday

var User = {
	username: "klewis",
	email: "klewis@gmail.com",
	password: "password",
	birthday: "October 25th"
};


//edit the username to be 'js_slinger'
  
 User.username = "js_slinger"


//Add a property of favoriteBook and set it to 'Mike Tyson learns to Whistle'

 User.favoriteBook = "Mike Tyson learns to Whistle"


//Remove the password property from your object
  
 delete User.password


//Create an array called 'values'. Loop through your object and push every value
//from  your object into your 'values' array. So for example, you'll eventually have
//an array that looks similar to ['js_slinger', 'tm@gmail.com', '5/2/1990'];

  // code here 
var values = {};
for (var i = 0; i < User.length; i++) {
	if (var key in User) {
		values.push(User[key])
	}
};
 