let numberOfDrumBtn = document.querySelectorAll('.drum');

// for(let i = 0; i<numberOfDrumBtn.length; i++) {

//   numberOfDrumBtn[i].addEventListener('click', handleClick)

// }

// function handleClick() {
//   alert('I got clicked!');
// }

// //the above line can also be written like this with an annoymous function

for(let i = 0; i<numberOfDrumBtn.length; i++) {
  numberOfDrumBtn[i].addEventListener('click', function(){
  // console.log(this);  //if we click on the button it will show which item was clicked in the console
  // console.log(this.innerHTML);
    let buttonInnerHTML = this.innerHTML;
    // // created a switch statement to find out if the button click is the case value then it should play a particular sound
    // switch (buttonInnerHTML) {
    //   case "w":
    //       let tom1 = new Audio('./sounds/tom-1.mp3');
    //       tom1.play();
    //     break;
    //   case "a":
    //     let tom2 = new Audio('./sounds/tom-2.mp3');
    //     tom2.play();
    //   break;
    //   case "s":
    //     let tom3 = new Audio('./sounds/tom-3.mp3');
    //     tom3.play();
    //   break;
    //   case "d":
    //     let tom4 = new Audio('./sounds/tom-4.mp3');
    //     tom4.play();
    //   break;
    //   case "j":
    //     let snare = new Audio('./sounds/snare.mp3');
    //     snare.play();
    //   break;
    //   case "k":
    //     let crash = new Audio('./sounds/crash.mp3');
    //     crash.play();
    //   break;
    //   case "l":
    //     let kick = new Audio('./sounds/kick-bass.mp3');
    //     kick.play();
    //   break;
    
    //   default: console.log(buttonInnerHTML)
    //     break;
    // }

    // // we are replace the switch statement with the makeSound function which contains the switch statement but now we get to use it multiple times, here and also in the keydown function
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  })
}

// this method listens to the whole webpage document for and keys that are pressed at any time. 
// note addEventLister is called a higher order function while the ananymous function with the parentheses (event) is called the callback function
document.addEventListener("keydown", function (event) {
  // this.alert("Key was pressed")
  console.log(event)
  makeSound (event.key)
  buttonAnimation(event.key)
})



function makeSound (key) {
  switch (key) {
    case "w":
        let tom1 = new Audio('./sounds/tom-1.mp3');
        tom1.play();
      break;
    case "a":
      let tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
    break;
    case "s":
      let tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
    break;
    case "d":
      let tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
    break;
    case "j":
      let snare = new Audio('./sounds/snare.mp3');
      snare.play();
    break;
    case "k":
      let crash = new Audio('./sounds/crash.mp3');
      crash.play();
    break;
    case "l":
      let kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
    break;
  
    default: console.log(buttonInnerHTML)
      break;
  }
}

// this function applies the flash annimation to the button when its clicked and removes after a set amount of time.
function buttonAnimation(currentkey){
  let activeButton =  document.querySelector(`.${currentkey}`);
  activeButton.classList.add('pressed')

  // this timeout funcion makes the buttons flash, since it removes the pressed class from the classlist.
  setTimeout(() => {
    activeButton.classList.remove('pressed')

  }, 100);

}

    // //the code below tries to change the color to green when clicked and back to red when we click on another button. incomplete, complete later.
    // if(!true){
    //   this.style.color = 'red';
    // } else{
    //   this.style.color ='green'
    // }
   




// // this creates an audio sound in javaScript
// let audio = new Audio('./sounds/tom-1.mp3');
// audio.play();


// // Constructor Function (note the name of constructor functions have to capitalized) that allows us to write less code for multiple objects. so we will use this function. example below
// function BellBoy(name, age, hasWorkPermit, languages) {
//   this.name = name;
//   this.age = age;
//   this.hasWorkPermit = hasWorkPermit;
//   this.languages = languages;
// }

// let bellBoy1 = new BellBoy("Timmy", 19, true, ["English", "French"])


// // creating another Constructor function below
// function HouseKeeper (yearsOfExp, name, cleaningRepertoire) {
//   this.yearsOfExp = yearsOfExp;
//   this.name = name;
//   this.cleaningRepertoire = cleaningRepertoire;
// }

// let houseKeeper1 = new HouseKeeper(9, "Jane", ["bathroom","lobby", "bedroom"]);
// let houseKeeper2 = new HouseKeeper(4,"Angela", ["libary","hall", "bedroom"])

// console.log(houseKeeper1);
// console.log(houseKeeper2.name);

// // these are how methods are created. they are basically functions saved inside an object. example below;
// let bellBoy1 = {
//   name: "Timmy",
//   age: 19,
//   hasWorkPermit: true,
//   languages: ["French", "English"],
//   moveSuitcase: function(){
//     alert("May i move your suitcase?");
//     pickUpSuitcase();
//     move();
//   }
// }

// // to call the method ....
// bellBoy1.moveSuitcase();

// // adding a function to a Constructor Function to create a method is simplar because we dont have to list it in the paratheses but we can just list it in the block of code. as seen below
// function BellBoy(name, age, hasWorkPermit, languages) {
//   this.name = name;
//   this.age = age;
//   this.hasWorkPermit = hasWorkPermit;
//   this.languages = languages;
//   this.moveSuitcase = function(){
//         alert("May i move your suitcase?");
//         pickUpSuitcase();
//         move();
//       }
// }

// // below i am adding a method to the HouseKeeper Constructor function
// function HouseKeeper (yearsOfExp, name, cleaningRepertoire) {
//   this.yearsOfExp = yearsOfExp;
//   this.name = name;
//   this.cleaningRepertoire = cleaningRepertoire;
//   this.clean = function(){
//     alert("I will start cleaning right away, Sir.")
//   }
// }

// let houseKeeper1 = new HouseKeeper(9, "Jane", ["bathroom","lobby", "bedroom"]);

// console.log(houseKeeper1.clean());
