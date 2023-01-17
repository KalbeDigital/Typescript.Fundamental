enum Color {
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = 0xc10050, // A hexadecimal literal
    White = 255 // A decimal literal
}

let red = Color.Red // Color
let pink = Color.Pink // Color


let a = Color.Red // Color
let b = Color.Green // Error TS2339: Property 'Green' does not exist
// on type 'typeof Color'.
let c = Color[0] // string
let d = Color[6] // string (!!!)