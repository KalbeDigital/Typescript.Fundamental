type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
} // 1

let reserve: Reserve = (
  from: Date, 
  toOrDestination: Date | string,
  destination?: string
) => { // 2
  if (toOrDestination instanceof Date && destination !== undefined) {
    // Book a one-way trip
  } else if (typeof toOrDestination === 'string') {
    // Book a round trip
  }
}

// 1. We declare two overloaded function signatures.
// 2. The implementation’s signature is the result of us manually combining the two overload signatures (in other words, we computed Signature1 | Signature2 by hand). Since reserve might be called in either of two ways, when you implement reserve you have to prove to TypeScript that you checked how it was called.