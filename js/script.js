'use strict';


// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(String(4 + '')));

const num = 5;

console.log("https://vk.com/" + num);


// To Number

// 1)
console.log(typeof(Number('132')));

// 2)
console.log(typeof((+'4523')));

// 3)
console.log(typeof(parseInt("15px", 10)));


let answer = +prompt("Hello", "");


// To boolean

// 0, '', null, undefined, NaN;

// 1)
let switcher = null;

if (switcher){
	console.log('Working...');
}

switcher = 1;

if (switcher){
	console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"4444"));
