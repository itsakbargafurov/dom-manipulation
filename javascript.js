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