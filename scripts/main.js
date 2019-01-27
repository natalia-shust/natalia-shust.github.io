/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sunshine.png') {
      myImage.setAttribute ('src','images/nice_sun.png');
    } else {
      myImage.setAttribute ('src','images/sunshine.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Riverbed is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Riverbed is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }