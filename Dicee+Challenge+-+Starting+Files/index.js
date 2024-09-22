let randomNumber = Math.floor(Math.random()*6);
console.log(randomNumber);

  if (randomNumber === 0) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png"); 
  } else if (randomNumber === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png"); 
  } else if (randomNumber === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png"); 
  } else if (randomNumber === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png"); 
  } else if (randomNumber === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png"); 
  }else if (randomNumber === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png"); 
  }


let randomNumber2 = Math.floor(Math.random()*6);
console.log(randomNumber2);

  if (randomNumber2 === 0) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png"); 
  } else if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png"); 
  } else if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png"); 
  } else if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png"); 
  } else if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png"); 
  }else if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png"); 
  }


  if (randomNumber > randomNumber2) {
    document.querySelector('h1').innerHTML = "🚩 Player 1 wins";
  } else if (randomNumber < randomNumber2) {
    document.querySelector('h1').innerHTML = "🚩 Player 2 wins";
  } else {
    document.querySelector('h1').innerHTML = "Draw";
  }




// // code from Udemy

// let randomNumber1 = Math.floor(Math.random() * 6) + 1; // produce numbers from 1 - 6
// let randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //this will change the source of the image when even the random number is between 1-6,
// document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1); // this will implement the change of image source

// let randomNumber2 = Math.floor(Math.random() * 6) + 1;
// let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerText = "🚩 Player 1 wins!";
// } else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerText = "🚩 Player 2 wins!";
// } else {
//   document.querySelector("h1").innerText = "Draw!"
// }

