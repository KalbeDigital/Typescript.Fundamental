let c: {
    firstName: string
    lastName: string
    } = {
    firstName: 'john',
    lastName: 'barrowman'
}
class Person {
    constructor(
        public firstName: string, // public is shorthand for
        // this.firstName = firstName
        public lastName: string
    ) {}
}
c = new Person('matt', 'smith') // OK