type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat
let a: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true
}
// Dog
a = {
    name: 'Domino',
    barks: true,
    wags: true
}
// Both
a = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
}