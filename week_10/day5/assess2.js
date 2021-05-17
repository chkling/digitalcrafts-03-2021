// Create a JS function to transform the object values to an array
const obj = {
	person: {
		name: "Tyler",
		age: 28,
		height: "180cm",
	},
	hobbies: {
		sport: "Football",
		game: "Overwatch",
	},
};

// console.log(obj.person);

// const transformer = (object) => {
// 	let newArray = [];
// 	console.log(newArray.push(object));
// };

function objectToArray(object) {
	let array = [];
	for (let key in object) {
		array.push(object[key]);
	}
	return array;
}
console.log(objectToArray(obj));
