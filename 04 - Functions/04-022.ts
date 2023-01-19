type HasSides = {numberOfSides: number}
type SidesHaveLength = {sideLength: number}

function logPerimeter< // 1
  Shape extends HasSides & SidesHaveLength // 2
>(s: Shape): Shape { // 3
  console.log(s.numberOfSides * s.sideLength)
  return s
}

type Square = HasSides & SidesHaveLength
let square: Square = {numberOfSides: 4, sideLength: 3}
logPerimeter(square) // Square, logs "12"


// 1. logPerimeter is a function that takes a single argument s of type Shape.
// 2. Shape is a generic type that extends both that HasSides type and the SidesHaveLength type. In other words, a Shape has to at least have sides with lengths.
// 3. logPerimeter returns a value of the exact same type you gave it.