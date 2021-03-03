'use strict';




const number = {
	a: 5,
	b:7,
	c: {
		x:10,
		y: 15
	}
};

function copyObj(oldObj){
	const newObj = {};

	let key;
	for (key in oldObj){
		newObj[key] = oldObj[key];
	}
	return newObj;
}

const copiedObj = copyObj(number);

copiedObj.b = 234;
copiedObj.c.y = 777;

// console.log(number);
// console.log(copiedObj);

const add = {
	d: 2222,
	e: 333
};

const clone = Object.assign({}, add);
clone.d = 555;

console.log(add);
console.log(clone);