// type Filter = {
//   (array: number[], f: (item: number) => boolean): number[]
//   (array: string[], f: (item: string) => boolean): string[]
//   (array: object[], f: (item: object) => boolean): object[]
// }

// let names = [
//   {firstName: 'beth'},
//   {firstName: 'caitlyn'},
//   {firstName: 'xin'},
// ]

// let result = filter(
//   names,
//   _ => _.firstname.startWith('b')
// ) // Error TS2339: Property 'firstName' does not exist on type 'object.

// result[0].firstName // Error TS2339: Property 'firstName' does not exist on type 'object'

// type Filter = {
//   <T>(array: T[], f: (item: T) => boolean): T[]
// }

// let filter: Filter = (array, f) => // ...

// // (a) T is bound to number
// filter([1, 2, 3], _ => _ > 2) 

// // (b) T is bound to string
// filter(['a', 'b'], _ => _ !== 'b')

// // (c) T is bound to {firstName: string}
// let names = [ 
//   {firstName: 'beth'}, 
//   {firstName: 'caitlyn'}, 
//   {firstName: 'xin'}
// ]

// filter(names, _ => _.firstName.startsWith('b'))

// type Filter<T> = {
//   (array: T[], f: (item: T) => boolean): T[]
// }

// let filter: Filter = (array, f) => // Error TS2314: Generic type 'Filter' requires 1 type argument(s)
// // ...

// type OtherFilter = Filter // Error TS2314: Generic type 'Filter' requires 1 type argument(s)

// let filter: Filter<number> = (array, f) => 
// // ...

// type StringFilter = Filter<string>
// let stringFilter: StringFilter = (array, f) => 
// // ...


// type Filter = { // 1
//   <T>(array: T[], f: (item: T) => boolean): T[]
// }
// let filter: Filter = // ...

// type Filter<T> = { // 2
//   (array: T[], f: (item: T) => boolean): T[]
// }
// let filter: Filter<number> = // ...

// type Filter = <T>(array: T[], f: (item: T) => boolean) => T[] // 3
// let filter: Filter = // ...

// type Filter<T> = (array: T[], f: (item: T) => boolean) => T[] // 4
// let filter: Filter<string> = // ...

// function filter<T>(array: T[], f: (item: T) => boolean): T[] { // 5
//   // ...
// }

// function map<T, U>(array: T[], f: (item: T) => U): U[] {
//   let result = []
//   for (let i=0; i<array.length; i++) {
//     result[i] = f(array[i])
//   }
//   return result
// }

function map<T, U>(array: T[], f: (item: T) => U): U[] {
  // ...
}

map(
  ['a', 'b', 'c'], // An array of T
  _ => _ === 'a' // A function that returns a U
)

map <string, boolean>(
  ['a', 'b', 'c'],
  _ => _ === 'a'
)

map<string>( // Error TS2558: Expected 2 type arguments, but got 1
  ['a', 'b', 'c'], 
  (_) => _ === 'a'
);


// OK, because boolean is assignable to boolean | string
map <string, boolean | string>(
  ['a', 'b', 'c'],
  _ => _ === 'a'
)

map <string, number>(
  ['a', 'b', 'c'],
  _ => _ === 'a' // Error TS2322: Type 'boolean' is not assignable to type 'number'.
)

// let promise = new Promise(resolve => 
//   resolve(45)
// )
// promise.then(result =>  // Inferred as {}
//   result * 4 // Error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint', or an enum type.
// )

let promise = new Promise<number>(resolve => 
  resolve(45)
)
promise.then(result =>  // number
  result * 4
)

// type MyEvent<T> = {
//   target: T
//   type: string
// }

type ButtonEvent = MyEvent<HTMLButtonElement>

let myEvent: MyEvent<HTMLButtonElement | null> = {
  target: document.querySelector('#myButton'),
  type: 'click'
}

type TimedEvent<T> = {
  event: MyEvent<T>
  from: Date,
  to: Date
}

function triggerEvent<T>(event: MyEvent<T>): void {
  // ...
}

triggerEvent({ // T is Element | null
  target: document.querySelector('#myButton'),
  type: 'mouseover'
})

function map<T, U>(array: T[], f: (item: T) => U): U[] {
  // ...
}

let buttonEvent: MyEvent<HTMLButtonElement> = {
  target: myButton,
  type: string
}

type MyEvent<T = HTMLElement> = {
  target: T
  type: string
}

type MyEvent<T extends HTMLElement = HTMLElement> = {
	target: T;
	type: string;
};

let myEvent: MyEvent = {
  target: myElement,
  type: string
}

// Good Practice
type MyEvent2 <
  Type extends string, 
  Target extends HTMLElement = HTMLElement,
> = {
  target: Target
  type: Type
}

// Bad Practice
type MyEvent3<
  Target extends HTMLElement = HTMLElement,
  Type extends string // Error TS2706: Required type parameters may not follow optional type parameters
> = {
  target: Target
  type: Type
}

// Compare a string and a string 
is('string', 'otherstring') // false

// Compare a boolean and a boolean 
is(true, false) // false

// Compare a number and a number 
is(42, 42) // true

// Comparing two different types should give a compile-time error
is(10, 'foo') // Error TS2345: Argument of type '"foo"' is not assignable to parameter of type 'number'.

// [Hard] I should be able to pass any number of arguments 
is([1], [1, 2], [1, 2, 3]) // false