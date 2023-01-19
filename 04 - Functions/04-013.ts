function* createFibonacciGenerator() { // 1
  let a = 0 
  let b = 1
  while (true) { // 2
    yield a; // 3
    [a, b] = [b, a + b] // 4
  }
}

let fibonacciGenerator = createFibonacciGenerator()
console.log(fibonacciGenerator.next()); // evaluates to {value: 0, done: false}
console.log(fibonacciGenerator.next()); // evaluates to {value: 1, done: false}
console.log(fibonacciGenerator.next()); // evaluates to {value: 2, done: false}
console.log(fibonacciGenerator.next()); // evaluates to {value: 3, done: false}
console.log(fibonacciGenerator.next()); // evaluates to {value: 4, done: false} 
console.log(fibonacciGenerator.next()); // evaluates to {value: 5, done: false}

// 1. The asterisk (*) before a function's name makes that function a generator. Calling a generator returns an iterable iterator.
// 2. Our generator can generate values forever.
// 3. Generators use the yield keyword to yield values. When a consumer asks for the generator's next value (for example, by calling next), yield sends a result back to the consumer and pauses execution until the consumer asks for the next value. In this way the while(true) loop doesn't immediately cause the program to run forever and crash.
// 4. To compute the next Fibonacci number, we reassign a to b and b to a + b in a single step.