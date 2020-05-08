// var message = "Your external javascript is connected";
console.log("Connected!");
//
// // Function Declaration
// function sayHello(name) {
//   alert("Hello " + name );
//   console.log("Hello " + name);
//   document.write("Hello " + name);
// }
//
// // Function Call
// sayHello("Bobby Joe");

var firstDiv = document.getElementById("moveableDiv");

var secondDiv = document.getElementById("animateableDiv");

function moveObject() {
  console.log("move things");
  firstDiv.style.transform = "translateY(200px)";
  secondDiv.style.animation = "quickAnimation 3s linear 3 alternate forwards";
}

function rotateObject() {
  console.log("rotating objects");
  firstDiv.style.transform = "rotate(180deg)";
  secondDiv.style.transform = "rotate(180deg)";
}

var thirdDiv = document.getElementById("div3");

function changeColor() {
  thirdDiv.style.backgroundColor = "orange";
}
