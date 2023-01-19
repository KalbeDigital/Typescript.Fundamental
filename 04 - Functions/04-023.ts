function call<T extends unknown[], R>( // 1
	f: (...args: T) => R, // 2
	...args: T // 3
): R { // 4
	return f(...args);
}

function fill(length: number, value: string): string[] {
	return Array.from({ length }, () => value);
}

console.log(call(fill, 10, 'a'));

// 1. call is a variadic function (as a reminder, a variadic function is a function that accepts any number of arguments) that has two type parameters: T and R. T is a subtype of unknown[]; that is, T is an array or tuple of any type.
// 2. call’s first parameter is a function f. f is also variadic, and its arguments share a type with args: whatever type argos is, f arguments have the same exact type.
// 3. In addition to a function f, call has a variable number of additional parameters …args. args is a rest parameter – that is, a parameter that describes a variable number of arguments. args’s type is T, and T has to be an array type (in face, if we forgot to say that T extends an array type, TypeScript would throw an error at us), so TypeScript will infer a tuple type for T based on the specific arguments we passed in for args.
// 4. call returns a value of type R (R is bound to whatever type f returns).