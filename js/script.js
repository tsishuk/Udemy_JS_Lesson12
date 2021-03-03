'use strict';



const parametr = {
	aname: "Tool",
	aweight: 12345,
	aobject: {
		sfirst: "abcd",
		ssecond: "gert",
		sthird: 777
	},
	alast: "theend",
	makeTest: function(){
		console.log("Test");
	}
};


parametr.makeTest();

const {sfirst, ssecond, sthird} = parametr.aobject;

console.log(sfirst);
// console.log(Object.keys(parametr).length);





//	--------------------------------------------------------------
// for (let key in parametr){
// 	if (typeof(parametr[key]) == 'object'){
// 		console.log(`key = ${key}, - insight object: -`);
// 		for (let inkey in parametr[key]){
// 			console.log(`\tinkey = ${inkey}, value = ${parametr[key][inkey]}`);
// 		}
// 	}
// 	else {
// 		console.log(`key = ${key}, value = ${parametr[key]}`);
// 	}
// }
//	--------------------------------------------------------------