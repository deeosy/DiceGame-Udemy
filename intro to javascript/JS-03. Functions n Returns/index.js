function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var bottles = Math.floor(money / 1.5);
    console.log("buy " + bottles + " bottles of Milk" )
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  
  
  getMilk(11);


  // ------------------  excecise   ---------
  

  // Life in Weeks Coding Exercise
  // I was reading this article by Tim Urban - Your Life in Weeks and realised just how little time we actually have.
  
  // In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
  
  // It will take your current age as the input and console.logs a message with our time left in this format:
  
  // You have x days, y weeks, and z months left.
  
  // Where x, y and z are replaced with the actual calculated numbers.
  
  // For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.
  
  // IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.
  
  // Example Input
  
  // e.g. If you are 56 years old:
  
  // lifeInWeeks(56)
  // Example Output
  
  // You have 12410 days, 1768 weeks, and 408 months left.

// ----------------  code below   -------------

function lifeInWeeks (age){
  var daysLeft = Math.floor((90-age)*365);
  var weeksLeft = Math.floor((90-age)*52);
  var monthsLeft = Math.floor((90-age)*12);
  console.log("You have " + daysLeft + " days, " +weeksLeft+ " weeks, and " +monthsLeft+ " months left.");
}
    
lifeInWeeks(45);



// ------ -- ------  learning return or output  --- ---- ---

function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var bottles = Math.floor(money / 1.5);
  console.log("buy " + bottles + " bottles of Milk");  
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft"); 
  console.log("moveLeft");
  console.log("enterHouse");
  return money % 1.5; 
}

var change = getMilk(11);
console.log("Master, here is your change of " +change+ " dollors.");


// -----------   -- -- or we can also write it as this ----- --- 


function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight"); 
  console.log("buy " + calBottles (money, 1.5) + " bottles of Milk");  
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft"); 
  console.log("moveLeft");
  console.log("enterHouse");
  return calChange (money, 1.5);
}

function calBottles (startingMoney, costPerBottle) {
  var bottles = Math.floor(startingMoney / costPerBottle);
  return bottles;
}

function calChange (startingMoney, costPerBottle) {
  var change = startingMoney % costPerBottle;
  return change;
}

console.log ("Master, here is your change of " + getMilk(5,) + " dollors.");



// -------- we can also use this incase price changes ------

function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + calBottles (money, costPerBottle) + " bottles of Milk");  
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft"); 
  console.log("moveLeft");
  console.log("enterHouse");
  return calChange (money, 1.5);
}

function calBottles (startingMoney, costPerBottle) {
  var bottles = Math.floor(startingMoney / costPerBottle);
  return bottles;
}

function calChange (startingMoney, costPerBottle) {
  var change = startingMoney % costPerBottle;
  return change;
}

console.log ("Master, here is your change of " + getMilk(5, 2) + " dollors.");



// ---------- --- -- excesice on return -- -- -------

// BMI Calculator Challenge
// Create a BMI calculator using JavaScript functions. 

// The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.

// You can calculate it using the formula below, where weight divided by height squared. or BMI= weight/ height squared.

// Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. 
// The output should be rounded to the nearest whole number.

// The first parameter should be the weight and the second should be the height.

// NOTE: You do not need to write any alerts or prompts or console logs. Your code should only contain the function, 
// the result has to be returned by the function. You do not need to call the function.

function bmiCalculator (weight, height){
  var heightSquared = (height*height);
  var bmiActual = (weight / heightSquared);
  var bmiEstimated = Math.round(bmiActual);
  return bmiEstimated;
}

bmiCalculator (65, 1.8);

// ------- - - or we can write it like this --- -- -----

function bmiCalculator (weight, height){
  var heightSquared = Math.pow(height,2);
  var bmiActual = (weight / heightSquared);
  var bmiEstimated = Math.round(bmiActual);
  return bmiEstimated;
}

bmiCalculator (65, 1.8);


