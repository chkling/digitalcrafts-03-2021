function addNumbers(num1, num2) {
	result = num1 + num2;
	return console.log(
		`You chose addition and the result of your numbers is ${result}.`
	);
}
function subtractNumbers(num1, num2) {
	result = num1 - num2;
	return console.log(
		`You chose subtraction and the result of your numbers is ${result}.`
	);
}
function multiplyNumbers(num1, num2) {
	result = num1 * num2;
	return console.log(
		`You chose multiplication and the result of your numbers is ${result}.`
	);
}
function divideNumbers(num1, num2) {
	result = num1 / num2;
	return console.log(
		`You chose division and the result of your numbers is ${result}.`
	);
}

function calculate(choice, num1, num2) {
	if (choice == "add") {
		return addNumbers(num1, num2);
	} else if (choice == "subtract") {
		return subtractNumbers(num1, num2);
	} else if (choice == "multiply") {
		return multiplyNumbers(num1, num2);
	} else if (choice == "divide") {
		return divideNumbers(num1, num2);
	} else {
		console.log("Invalid input. Program terminated.");
	}
}
calculate("add", 10, 5);
calculate("subtract", 10, 5);
calculate("multiply", 10, 5);
calculate("divide", 10, 5);
