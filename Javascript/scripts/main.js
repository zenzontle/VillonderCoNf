// Alert when clicking anything
/*document.querySelector('html').onclick = function() {
	alert('Ouch!');
}*/

var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute('src', 'images/chrome-icon.png');
	} else {
		myImage.setAttribute('src', 'images/firefox-icon.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

function imgLoad(url) {
	return new Promise(function(resolve, reject) {
		var request = new XMLHttpRequest();
		request.open('GET', url);
		request.responseType = 'blob';
		request.onload = function() {
			if (request.status === 200) {
				resolve(request.response);
			} else {
				reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
			}
		};
		request.onerror = function() {
			reject(Error('There was a network error.'));
		};
		request.send();
	});
}

imgLoad('images/chrome-icon.png').then(function(response) {
	var body = document.querySelector('body');
	var myImage = new Image();
	var imageURL = window.URL.createObjectURL(response);
	myImage.src = imageURL;
	body.appendChild(myImage);
}, function(Error) {
	console.log(Error);
});

function squaresA(param1) {
	function squaresB(param2) {;
		function squaresC(param3) {
			console.log(param1);
			console.log(param2);
			console.log(param3);
		}
		return squaresC(15);
	}
	return squaresB(10)
}
squaresA(5);

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8

function myConcat(separator) {
   var result = "", // initialize list
       i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}

var test = myConcat(", ", "red", "orange", "blue");