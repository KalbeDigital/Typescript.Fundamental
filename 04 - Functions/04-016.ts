function area(radius: number): number | null {
  if (radius < 0) {
    return null
  }

  return Math.PI * (radius ** 2)
}

let r: number = 3
let a = area(r)
if (a !== null) {
  console.log('result: ', a)
}
