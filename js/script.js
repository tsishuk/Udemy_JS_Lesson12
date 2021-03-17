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

console.log(btns);
btns[1].style.width = '100px';
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

div.innerHTML = "<h1>Hello there</h1>";
// div.textContent = "Hello";
div.insertAdjacentHTML('afterend', '<h2>Halo from there</h2>');


function sleepMy(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

sleepMy(3000);
btns[1].click();










// let obj = {
//   names: "Aary",
//   age: 45,
//   "big apple" : "Juicyfruit"
// };

// obj.time = 567;

// for (let k in obj){
//   console.log(k + ": " + obj[k]);
//   // console.log(obj[k]);
// }





// let user = {
//   name: "Ivan"
// };

// let perm1 = {
//   can: "yes",
// };

// let perm2 = {
//   just: "fun"
// };
// console.log(user);

// Object.assign(user, perm1, perm2);

// console.log(user);


//
//------------ Addition -----------
//
// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // считаем гостей, некоторые приходят несколько раз
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set хранит только 3 уникальных значения
//  console.log(set.size); // 3

// for (let user of set) {
//    console.log(user.name); // John (потом Pete и Mary)
// }





// let set = new Set(["апельсин", "яблоко", "банан"]);

// for (let value of set) {console.log(value);}

// // то же самое с forEach:
// set.forEach((value, valueAgain, set) => {
//   console.log(value);
// });





// // 0 соответствует 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// console.log( Jan01_1970 );

// // теперь добавим 24 часа и получим 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log( Jan02_1970 );