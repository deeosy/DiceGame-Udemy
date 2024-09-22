alert("Welcome, i am the love calculate, please input your name and your crush name (after you click ok) to calculate how compactible you are together.")
var name = prompt("What is your name?");
var nameOfCrush =prompt("What is the name of your crush?");
var n = Math.random();
n = n*100;
n = Math.floor(n)+1;
alert("You are " + n + "% compactible.");


// ----------


alert("Welcome, i am the love calculate, please input your name and your crush name (after you click ok) to calculate how compactible you are together.")
var name = prompt("What is your name?");
var nameOfCrush =prompt("What is the name of your crush?");
var loveScore = Math.random();
loveScore = loveScore*100;

loveScore = Math.floor(loveScore)+1;

if (loveScore > 70) {
    alert("You are " + loveScore + "% compactible. You love each other like Kanye loves Kanye");
} 

if (loveScore > 30 && loveScore <= 70) {
    alert("You are " + loveScore + "% compactible. Your love is normal but shaky");
}
    
if (loveScore <= 30) {
    alert ("You are " + loveScore + "% compactible. You go together like oil and water. ");
}



// -------------


alert("Welcome, i am the love calculate, please input your name and your crush name (after you click ok) to calculate how compactible you are together.")
var name = prompt("What is your name?");
var nameOfCrush =prompt("What is the name of your crush?");
var loveScore = Math.random();
loveScore = loveScore*100;
loveScore = Math.floor(loveScore)+1;

if (loveScore > 70) {
    alert("You are " + loveScore + "% compactible. You love each other like Kanye loves Kanye");
} 
else {
    alert ("You are " + loveScore + "% compactible.");

}



// -------------- using the BMI calculator to check the return values


function bmiCalculator (weight, height){
    var heightSquared = Math.pow(height,2);
    var bmiActual = (weight / heightSquared);
    var bmiEstimated = Math.round(bmiActual);
    // return bmiEstimated;
         
  if (bmiEstimated < 18.5) {
      return ("Your BMI is " + bmiEstimated + ", so you are underweight.");
  }
  
  if (bmiEstimated >= 18.5 && bmiEstimated <= 24.9) {
      return ("Your BMI is " + bmiEstimated + ", so you are normal weight.");
  }
  
  if (bmiEstimated > 24.9) {
      return ("Your BMI is " + bmiEstimated + ", so you are overweight.");
  }
  }
  
  bmiCalculator (89, 1.8288);



//   ------------- Leap Year Challenge-------- find out which year is a leap year with the if and else function 


function isLeap(year){
    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 === 0){
                return "Leap year."
            } else {
                return "Not leap year."
            }  
        } else {
            return "Leap year."
        } 
    } else{
        return "Not leap year."
    }
}


isLeap(2024);



// -----------  this is a guest list of people for a party, the people that are on the list are welcomed and those that are not are turned back -----

// Angela
// Jack
// Pam
// James
// Lara
// Jason
var guestName = prompt ("What is your name?");
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
if (guestList.includes(guestName)){
    alert ("welcome");
} else {
    alert ("sorry, another time.");
}

// console.log (guestList);
// console.log (guestList.length);
// guestList[3];
// guestList[0];
// console.log(guestList[1]);

// guestList.includes("Jack");
// console.log (guestList.includes("Jack"));

