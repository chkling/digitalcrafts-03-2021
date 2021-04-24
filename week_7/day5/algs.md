// What will the output produce? DO NOT RUN IN CONSOLE.

const array1 = [33, 4, 88, 1, 25];
console.log(array1.map((i) => i + 5).filter((i) => i % 2).length);

01100
// Substrings

// Write a function that when given string1 as one parameter and another string2 as a second parameter, checks if string2 is a substring of string1.
const substring = (str1, str2) => {
return result;
};
console.log(substring("concept", "cep")); // true
console.log(substring("aaabbbaabbab", "aba")); // false
console.log(substring("the brown cow jumped over the moon", "moonthe brown cow")); // true
console.log(substring("baananana", "nab")); // true
console.log(substring("this wont work", "r u shore")); // false

// Missing Digit

// Write a function that when given a string equation with one digit as an 'x', return the value of 'x' that makes the equation true.

const findX = (equation) => {
return x;
};
// Part 1
console.log(findX("10 _ x = 20")); // returns 2
console.log(findX("2 + 4 = x")); // returns 6
console.log(findX("x - 11 = 33")); // returns 44
// Part 2
console.log(findX("1x0 _ 2 = 200")); // returns 0
console.log(findX("80 / 2 = x0")); // returns 4
console.log(findX("111 + 11x = 222")); // returns 1
