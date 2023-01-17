// Named function
function greet(name: string) {
	return 'hello ' + name;
}

// Function expression
let greet2 = function (name: string) {
	return 'hello ' + name;
};

// Arrow function expression
let greet3 = (name: string) => {
	return 'hello ' + name;
};

// Shorthand arrow function expression
let greet4 = (name: string) => 'hello ' + name;

// Function constructor
let greet5 = new Function('name', 'return "hello " + name');

console.log(greet('User 1'));   // evaluates to 'hello User 1'
console.log(greet2('User 2'));  // evaluates to 'hello User 2'
console.log(greet3('User 3'));  // evaluates to 'hello User 3'
console.log(greet4('User 4'));  // evaluates to 'hello User 4'
console.log(greet5('User 5'));  // evaluates to 'hello User 5'
