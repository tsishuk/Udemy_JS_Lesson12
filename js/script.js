'use strict';

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function(){
		console.log("Hello from soldier Object");
	}
};

const john = Object.create(soldier);
// const john = {
// 	health: 100
// };

// john.__proto__ = soldier;
// console.log(john);

// Object.setPrototypeOf(john, soldier);

john.sayHello();

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));