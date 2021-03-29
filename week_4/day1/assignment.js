// Define Variables
let calvin = "Calvin";
let number = 3;
let boolean = true;

// define an array in javascript
let array = ["cheese", "toast", "bacon"];

// define an object in javascript
let object = {
	first: "gold",
	second: "silver",
	third: "bronze",
};
// define an integer
let winner = 1;

// define a string
let cheer = "hooray";

// re-assign the string you defined above to "This is a new string"
cheer = "This is a new string";

// create a new variable that takes your integer above and multiplies it by 5
newNumber = winner * 5;

// Create an array that has the following in it ["swag", 123123, true, false, "boolean"]
let newArray = ["swag", 123123, true, false, "boolean"];

// print out 123123
console.log(123123);
// print out false
console.log(false);
// print out boolean
console.log("boolean");
// bonus: print out the length of the array
console.log(newArray.length);

// -Create an object that has the following structure name: "name", age: 20, height: 7.1, metric: "ft"
newObject = {
	name: "name",
	age: 20,
	height: 7.1,
	metric: "ft",
};

// You will create 5 objects with unique names, with unique ages, height.
let listOfObjects = {
	newObject1: {
		name: "calvin",
		age: 29,
		height: 6.0,
		metric: "ft",
	},
	newObject2: {
		name: "max",
		age: 27,
		height: 6.1,
		metric: "ft",
	},
	newObject3: {
		name: "stefan",
		age: 31,
		height: 5.1,
		metric: "ft",
	},
	newObject4: {
		name: "robin",
		age: 59,
		height: 5.6,
		metric: "ft",
	},
	newObject5: {
		name: "steve",
		age: 62,
		height: 5.1,
		metric: "ft",
	},
};
// Print out the first objects name
console.log(listOfObjects.newObject1.name);
// Print out the last objects age
console.log(listOfObjects.newObject5.age);
// print out the 3rd objects height
console.log(listOfObjects.newObject3.height + listOfObjects.newObject3.metric);
// change the 3rd objects height to be 1.2
listOfObjects.newObject3.height = 1.2;
console.log(listOfObjects.newObject3.height);
// change the 3rd objects metric to be "meters"
listOfObjects.newObject3.metric = "meters";
console.log(listOfObjects.newObject3.metric);
// create a new key on the 2nd object called sport. Assign it your favorite sport
listOfObjects.newObject2.sport = "tennis";
console.log(listOfObjects.newObject2.sport);
