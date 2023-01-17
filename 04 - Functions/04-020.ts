type Filter = {
	(array: unknown, f: unknown);
};

function filter(array, f) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		let item = array[i];
		if (f(item)) {
			result.push(item);
		}
	}

	return result;
}

console.log(filter([1, 2, 3, 4], (_) => _ < 3));
