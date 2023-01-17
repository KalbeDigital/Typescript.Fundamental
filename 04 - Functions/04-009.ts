function sumVariadicSafe(...numbers: number[]): number {
	return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumVariadicSafe(1, 2, 3)); // evaluates to 6
