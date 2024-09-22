alert("Hello");
alert("I am Google Chrome, Chrome for short.");
prompt("What is your number?");
var myName = "Derrode";
var myName="Walter";
alert(myName);
var yourName=prompt("What is your name?");
alert("My name is " + myName + ", Welcome to my class " + yourName + " ! ");
var gameLevel = 1;
var gameLevel = 2;
var gameLevel = 3;
alert("Your level is currently: " + gameLevel);

// ---------------- different work


var message = "Hello";
var fullName = "Derrode";
alert(message + " there, "+ fullName + ".");
fullName.length;
 
// ---------------- different work

var tweet = prompt("Write Tweet Here!");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have" + (120 - tweetCount) +
     " characters left.");

//    or you can also write it like this as well

var tweet = prompt("Write Tweet Here!");
alert("You have written " + tweet.length + "characters, you have" + (120 - tweet.length) +
     "characters left.");


// ---------------- different work


var tweet = prompt("Write Tweet Here!");
alert("You have written " + tweet.length + "characters, you have" + (14 - tweet.length) +
     "characters left.");
alert(tweet.slice(0,14));

// Or you can write it like this 

var tweet = prompt ("Write Tweet Here!");
var tweetUnder14 = tweet.slice(0,14);
alert(tweetUnder14);

// Or you can write it like this 

alert(prompt("Write Tweet Here!") .slice(0,14));


// ---------------- different work


var name = "Derrode";
name = name.toUpperCase();
name = name.toLowerCase();


// Or you can write it like this 


var name = prompt("What is your name?");
name = name.toUpperCase();
alert("Hello, " + name.toUpperCase().slice(0,1) + 
      name.toLowerCase().slice(1,name.length) );


// Or you can write it like this 


var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);
restOfName = restOfName.toLowerCase;
var capitalisedName = upperCaseFirstChar + restOfName;
alert("Hello, " + capitalisedName);


// ---------------- different work



var dogAge = prompt("How old is your dog?");
humanAge = ((dogAge-2)*4)+21;
alert("This is the equivilent human age of your dog: " + humanAge);
