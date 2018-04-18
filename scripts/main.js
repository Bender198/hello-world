var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');
myHeading.textContent = 'Hello world!';
var myP = document.querySelector("p");

var myImage = document.querySelector("img");

var localName = 'Pepe';

document.querySelector("html").onmousemove = function(e) {
	
	myP.textContent = "Mouse over Coords X: " + e.clientX + " Y: " + e.clientY;

}
function setUserName() {
  var myName = prompt('Please enter your name.',localName);
  localName = myName;
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localName) {
  setUserName();
} else {
  var storedName = localName;
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {   
   setUserName()
}