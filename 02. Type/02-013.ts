const enum Language {
    English,
    Spanish,
    Russian
}
// Accessing a valid enum key
let a = Language.English // Language
// Accessing an invalid enum key
let b = Language.Tagalog // Error TS2339: Property 'Tagalog' does not exist
// on type 'typeof Language'.
// Accessing a valid enum value
let c = Language[0] // Error TS2476: A const enum member can only be
// accessed using a string literal.
// Accessing an invalid enum value
let d = Language[6] // Error TS2476: A const enum member can only be
// accessed using a string literal.