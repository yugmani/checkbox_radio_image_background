console.log('hello!');

var h1 = document.createElement('h1'); // Create a <h1> element
var t = document.createTextNode('Hello World'); // Create a text node
h1.appendChild(t);
const age = document.getElementById('view-age');

age.innerText = '45';
age.textContent = '54';
