// hello = "hello world";
// integer = 2;
// boolean = False;

// while (pizza < 8):
//     print("pizza")

// for slice in pizza:
//     print(slice)

// Define a variable

// var variable - DO NOT USE. has a functional scope, can be changed too easily and by error
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
	let number = 9;
	let array = [1, 2, 3];
	for (let number = 0; number < array.length; number++) {
		// does stuff here
		console.log(number);
	}
	console.log(number);
	return num1 + num2;
}
console.log("This is the sum", sumNumbers(4, 5));

// No longer lists, now called ARRAYS array = []

let numbersInAnArray = [1, 2, 3];
let namesInAnArray = ["calvin", "eric", "kevin", "robin", "steve", "stefan"];
// we access them the same way we do in python
// nameOfTheList[index]
numbersInAnArray[0] = 4;
console.log(numbersInAnArray);
console.log(namesInAnArray[4]);

// python dictionary
// dictionary1 = { key: "value"};

// new syntax, we now call this an object, that has a key value. the key is not in quotation marks and can be whatever value type we want
let object = { key: "value" };
let classObject = {
	name: "calvin",
	name: "eric",
	name: "kevin",
	name: "robin",
	name: "steve",
	name: "stefan",
	name: "max",
};
// trying to reference items with dot notation, cannot access specifics above as it is overwritten
console.log(classObject.name);

let complexObject = {
	calvin: {
		name: "calvin",
	},
	eric: {
		name: "eric",
	},
	kevin: {
		name: "kevin",
	},
	robin: {
		name: "robin",
	},
	name: "steve",
	name: "stefan",
	name: "max",
};
console.log(complexObject.calvin.name);
