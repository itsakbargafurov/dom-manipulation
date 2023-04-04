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

// add a new heading
const heading3 = document.createElement('h3');
heading3.style.color = 'blue';
heading3.classList.add('content');
heading3.textContent = "I'm a blue h3";

container.appendChild(heading3);

// add a new div container
const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.border = 'black';
div.classList.add('content');

container.appendChild(div);