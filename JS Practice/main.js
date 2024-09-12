// Javascript creates a document object to represent the HTML structure.
document.title = 'JavaScript Notes';

// get element with an id my-first-div
let element = document.getElementById('my-first-div');

// get all elements with tag div. returns an http collection
element = document.getElementsByTagName('div');
element = document.querySelectorAll('div')

element.style.color = 'red';
console.log(element);