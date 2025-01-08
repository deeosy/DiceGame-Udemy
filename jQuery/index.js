// javascript code below
// document.querySelector("h1")

// j Query code below for the same code above
// $("h1")

$("h1").css("color", "red")
// selecting a h1 by its class and how its written below
$("h1.title").css("color", "blue")
// selecting a h1 nested in a div with an id of header and how its written below
$("#header h1").css("color", "green")

// note jQuery selects all the element just like document.querySelectorAll but you will now have specify which element you want with either a class or an id
$("button").css("backgroundColor", "pink")

console.log($("h1.title").css("color"))
console.log($("h1.title").css("fontSize"))

// adding CSS style to html via jQuery
$("h1.solo").addClass("big-title")
$("h1.solo").removeClass("big-title")

// adding CSS style classes to html via jQuery
$("h1.solo").addClass("big-title margin-50")

// using jQuery to see if an element has a class or not
console.log($("h1").hasClass("margin-50")) //ans: "true" in this case

// how to change the text of an element using jQuery
$("h1.change").text("Text changed")
// how to change the .innerHTML of an element using jQuery
$("button.01").html(`<a href="">Don't Click Me</a>`)

// how to use jQuery to set attributes of an elements. attributes like src="" for the img element.
console.log($("img").attr("src")); //getting the attribute value
$("a.01").attr("href", "https://mail.yahoo.com/")

// how to addEventListeners using jQuery
$("h2.mouse-over").on("mouseover", function() {
  $("h2").css("color", "rgb(175, 175, 72)")
})
$("h2.mouse-over").on("click", function() {
  $("h2").css("color", "rgb(175, 175, 72)")
})

// how to use click in jQuery
$("h1.changeColor, button.changeColor").click(function() {
  $("h1.changeColor").css("color", "purple")
})

// how to use keypress/ keydown in jQuery
$("body, input").keydown(function(event) {
  console.log(event.key);
  $("h1.change-text").text(event.key)

})

//some jQuery methods for inserting elements into html
$("h1.01").before("<button>click Me</button>")  //before() places the button in front of the h1 Hello element
$("h1.title").after("<button>don't click Me</button>") //after() places the button behind or after the h1 Hello element
$("#header h1").prepend("<button>old</button>") // prepend() places the button inside the h1 Hello element after the opening opening tag
$("h1.solo").append("<button>new</button>")  // append() places the button inside the h1 Hello element before the closing tag
//using jQuery to remove an element or class  or id
$(".remove").remove(); //this looks for the button with the class "remove" and romoves that element

// using jQuery to run some animation methods on html
$(".hide").on("click", function() {
  $(".animation").hide();
})

$(".show").on("click", function() {
  $(".animation").show();
})

$(".toggle").on("click", function() {
  $(".animation").toggle();
})

$(".fOut").on("click", function() {
  $(".animation").fadeOut();
})

$(".fadeIn").on("click", function() {
  $(".animation").fadeIn();
})

$(".fToggle").on("click", function(){
  $(".animation").fadeToggle();
})

$(".slide-up").on("click", function(){
  $(".animation").slideUp()
})

$(".slide-down").on("click", function(){
  $(".animation").slideDown()
})

$(".slide-toggle").on("click", function(){
  $(".animation").slideToggle()
})  // very good for a drop down menu

$(".animateYourSelf").on("click", function(){
  // the animate() method can only take properties with numeric values.
  $(".animation").animate({
    opacity: 0.5,
    marginLeft: 40,
    fontSize: "310%"
  })
})

//chaining jQuery animation methods to use multiply animtions at once.
$(".chaining-animations").on("click", function(){
  $(".animation").animate({opacity:0.2}).slideUp().slideDown().animate({opacity: 1,})
})
