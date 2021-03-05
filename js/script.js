'use strict';


const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'green';
// box.style.width = "300px";

box.style.cssText = 'background-color: green; width: 200px';

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'yellow';
// }

// hearts.forEach((item) => {
//     item.style.backgroundColor = 'orange';
// });

const div = document.createElement('div');
// const text = document.createTextNode("This is text");
div.classList.add('black');

wrapper.append(div);

// wrapper.insertBefore(div, hearts[2]);

// document.body.append(div);
// document.querySelector('.wrapper').prepend(div);
// hearts[0].after(div);
// hearts[0].before(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[1]);
// wrapper.replaceChild(circles[0], hearts[0]);

// wrapper.appendChild(div);

div.innerHTML = "<h1>Hello</h1>" ;
// div.textContent = "Hello";
div.insertAdjacentHTML('afterend', '<h2>Halo</h2>');
