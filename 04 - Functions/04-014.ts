function* createNumbers(): IterableIterator<number> {
	let n = 0;
	while (1) {
		yield n++;
	}
}

let numbers = createNumbers();

console.log(numbers.next()); // evaluates to {value: 0, done: false}
console.log(numbers.next()); // evaluates to {value: 1, done: false}
console.log(numbers.next()); // evaluates to {value: 2, done: false}