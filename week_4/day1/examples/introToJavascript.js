// hello = "hello world";
// integer = 2;
// boolean = False;

// while (pizza < 8):
//     print("pizza")

// for slice in pizza:
//     print(slice)

// Define a variable

// var variable - DO NOT USE. has a functional scope
var hello = "hello world";
// ES6 - let has a block scope
let integer = 2;
// constant - cannot/should not be reassigned, has a block scope
const boolean = false;

// def sum(num1, num2):
//     return num1 + num2;

function sumNumbers(num1, num2) {
	// function body, aka inside the curlies
	//for loop syntax
	// for (first arg: variable we define we initialize to 0)
	// for (second arg: our loop condition, is your loop container)
	// for (third arg: incrementer)
	const pizza = 8;
	for (let slice = 0; slice < pizza.length; slice++) {
		const element = pizza[slice];
	}
	return num1 + num2;
}
