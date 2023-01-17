function sumVariadic() {
	return Array
    .from(arguments)
    .reduce((total, n) => total + n, 0);
}

console.log(sumVariadic(1, 2, 3)); // evaluates to 6