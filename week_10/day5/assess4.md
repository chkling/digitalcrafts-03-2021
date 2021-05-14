Explain what a 'callback' function is, and provide a simple example.

a function that calls itself back while running

example:

const factorialGenerator = (number) => {
if (number === 0) {
return 1;
} else {
return number \* factorialGenerator(number - 1);
}
};

console.log(factorialGenerator(5));
