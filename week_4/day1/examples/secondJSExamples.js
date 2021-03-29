// String interpolation
// let height = "6ft";
// let weight = "140lbs";

// method 1 of string interpolation
// let JoesDimensions =
// 	"Joe's height is " + height + " and he weighs " + weight + ".";

// method 2 of string interpolation
// use backticks ` `
// let JoesDimensions = `Joe's height is ${height} and he weighs ${weight}.`;

// for in is for objects, iterates over an object, returns the keys as strings
let firstPizza = {
	crust: "thin",
	toppings: ["cheese", "pepperoni", "pineapple"],
	size: "large",
	sauce: ["marinara", "alfredo"],
};
for (const pizza in firstPizza) {
	// console.log(firstPizza[pizza]);
	// console.log(`This is the key: ${pizza}.`);
	// console.log(`This is the value: ${firstPizza[pizza]}.`);
	// console.log(Object.keys(firstPizza)); // returns an array, not ideal at this moment
}
// prints out just the toppings
for (const topping of firstPizza.toppings) {
	console.log(topping);
}

let cars = ["Suburu", "Audi", "Honda", "BMW"];
// for of is for arrays
console.log(cars[1]);
for (const car of cars) {
	console.log("This is a", car);
}

// while loop
// while (condition) {
// }

// if statements
// if(condition){

// } else {

// }

// taking input
// calculate("multiply", num1, num2)
// print out the message of whatever operation they did and the correct answer is

// calculate("multiply", 23, 84);
// calculate("subtract", 23, 84);
// add
// divide
// console log each to show it works
