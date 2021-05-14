// #1 Write a function that accepts a number as an argument. The function should
// then return the factorial of that number. A factorial of a number means to
// multiply all whole numbers between that number in one. Example: 5! => 5 * 4 * 3
// * 2 * 1 = 120.

const factorialGenerator = (number) => {
	if (number === 0) {
		return 1;
	} else {
		return number * factorialGenerator(number - 1);
	}
};

console.log(factorialGenerator(5));
