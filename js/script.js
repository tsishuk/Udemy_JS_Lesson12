'use strict';


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'aascslaknsva';

// console.log(newArray);
// console.log(oldArray);


// const video = ['youtube', 'vimeo', 'rutube'],
// 			blogs = ['wordpress', 'livejournal', 'blogger'],
// 			internet = [...video, ...blogs, 'vk', 'fb'];

// // console.log(internet);

// function log(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
	one: 1,
	two: 2
};

const newObj = {...q};


// const number = {
// 	a: 5,
// 	b:7,
// 	c: {
// 		x:10,
// 		y: 15
// 	}
// };

// function copyObj(oldObj){
// 	const newObj = {};

// 	let key;
// 	for (key in oldObj){
// 		newObj[key] = oldObj[key];
// 	}
// 	return newObj;
// }

// const copiedObj = copyObj(number);

// copiedObj.b = 234;
// copiedObj.c.y = 777;

// // console.log(number);
// // console.log(copiedObj);

// const add = {
// 	d: 2222,
// 	e: 333
// };

// const clone = Object.assign({}, add);
// clone.d = 555;

// console.log(add);
// console.log(clone);