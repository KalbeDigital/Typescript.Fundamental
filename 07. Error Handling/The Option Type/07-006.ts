interface Opt<T> {
    flatMap<U>(f: (value: T) => None): None;
    flatMap<U>(f: (value: T) => Opt<U>): Opt<U>;
    getOrElse(value: T): T;
}

class Some<T> implements Opt<T> {
    constructor(private value: T) {}
    flatMap<U>(f: (value: T) => None): None;
    flatMap<U>(f: (value: T) => Some<U>): Some<U>;
    flatMap<U>(f: (value: T) => Opt<U>): Opt<U> {
      return f(this.value);
    }
    getOrElse(): T {
      return this.value;
    }
  }
  
  class None implements Opt<never>{
      flatMap(): None {
      return this;
    }
    getOrElse<U>(value: U): U {
        return value;
    }
}

function Opt<T>(value: null | undefined): None
function Opt<T>(value: T): Some<T>
function Opt<T>(value: T): Opt<T> {
 if (value == null) {
 return new None
 }
 return new Some(value)
}

function ask() {
 let result = prompt('When is your birthday?')
 if (result === null) {
 return Opt(null)
 }
 return Opt(result);
}

// Checks if the given date is valid
function isValid(date: Date) {
 return Object.prototype.toString.call(date) === '[object Date]'
 && !Number.isNaN(date.getTime())
}

function parse(birthday: string){
 let date = new Date(birthday)
 if (!isValid(date)) {
 return Opt(null)
 }
 return Opt(date);
}

let result = ask()
.flatMap(parse)
.flatMap(date => new Some(date.toISOString()))
.flatMap(date => new Some('Date is ' + date))
.getOrElse("Error Parsing date for some reason");

// let result = Opt(6) // Some<number>
//  .flatMap(n => Opt(n * 3)) // Some<number>
//  .flatMap(n => new None) // None
//  .getOrElse(7) // 7

console.log(result);

