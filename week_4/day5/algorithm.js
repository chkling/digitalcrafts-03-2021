// String Reversal
// Write a function that reverses a given string.
// - Do not use .reverse()!

const reverseString = (word) => {
	let newWord = "";
	for (i = word.length - 1; i >= 0; i--) {
		newWord += word[i];
	}
	return console.log(newWord);
};
reverseString("hello");

// 2. Integer Reversal
//  Write a function that reverses a given integer.
// Caveats:
// - Remove trailing and beginning zeros.
// - Keep floats floats and numbers numbers.
// - Negative numbers should be kept negative
// 485 = 584
// 0076 = 67
// -756.65 = -56.657
// 7560.00 = 657

const integerReversal = (num) => {
	let newNum = 0;
	let lastDigit = 0;
	while (num !== 0) {
		lastDigit = num % 10;
		num = parseInt(num / 10);
		newNum = newNum * 10 + lastDigit;
	}
	return console.log(newNum);
};
integerReversal(1234);
