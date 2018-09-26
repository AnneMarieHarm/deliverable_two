// //Exercise_One

var num = prompt("Enter A Number!"); 

var output = 0;

for(var i = 1; i <= num; i++) {
  output = output + i;
}
console.log(output);	
  
// //Exercise_Two  

var wantPlay = prompt("Do you want to play?");
var string = "";
var word;

if (wantPlay == "yes") {

  do {
    word = prompt ("Enter a Word.");
    string = string + word + " ";
    wantPlay = prompt("Do you want to play again?");
  } while 
    (wantPlay == "yes")
}
console.log(string);

//Exercise_Three

var choice = prompt("Would you like to print your name?");

var userName = prompt("What is your name?");

while (choice == "yes") {
console.log("Hello, my name is " + userName);
userName += "!";
choice = prompt("Would you like to print this again?");
}

//Exercise_Four

var TimeOday = prompt("What time of day is it?");

if (TimeOday == 'morning') { 
  console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.")
} else if (TimeOday == 'noon') {
  console.log("Since it is noon, you should be eating lunch. We suggest a salad.")
} else if (TimeOday == 'evening') {
  console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.")
} else {
console.log("We don't understand; please tell us again.")
}