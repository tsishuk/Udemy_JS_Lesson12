'use strict';




const arr = [1, 22, 3, 15, 8];

console.log(arr);

arr.sort(compareNum);

function compareNum(a, b) {
	return a - b;
}

console.log(arr);






// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// arr.forEach(function(item, i, arr){
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(777);


// console.log(arr);


// for (let value of arr){
// 	console.log(value);
// }

// for(let i =0; i < arr.length; i++){
// 	console.log(arr[i]);
// 	console.log();
// }