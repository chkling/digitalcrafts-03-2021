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
	console.log(`This is the key: ${pizza}.`);
	console.log(`This is the value: ${firstPizza[pizza]}.`);
	console.log(Object.keys(firstPizza)); // returns an array, not ideal at this moment
}
// for of is for arrays
