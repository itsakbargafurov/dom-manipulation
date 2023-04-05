// targets div container with id 'container'
const container = document.querySelector('#container');

// adds a new div container
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// adds a new paragraph
const para = document.createElement('p');
para.style.color = 'red';
para.classList.add('content');
para.textContent = "Hey I'm red!";

container.appendChild(para);

// adds a new heading
const heading3 = document.createElement('h3');
heading3.style.color = 'blue';
heading3.classList.add('content');
heading3.textContent = "I'm a blue h3";

container.appendChild(heading3);

// adds a new div container
const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.border = 'black';
div.classList.add('container1');

container.appendChild(div);

// adds a new heading
const heading1 = document.createElement('h1');
heading1.classList.add('text');
heading1.textContent = "I'm in a div";

div.appendChild(heading1);

// adds a new paragraph

const para1 = document.createElement('p');
para1.classList.add('para');
para1.textContent = "ME TOO!";

div.appendChild(para1);

// adds an event to button
const btn = document.querySelector('#btn');
btn.onclick = () => alert('hey everybody');

// adds an event listener to button
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    alert('hey everybody');
});

// named function for events
function alertFunction() {
    alert("yay! you did it");
}

// adds an event to button: method 2
const btn2 = document.querySelector('#btn2');
btn2.onlick = alertFunction;

// adds an event listener to button: method 3
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', alertFunction);