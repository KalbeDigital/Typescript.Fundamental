let user: {
    readonly firstName: string
    } = {
    firstName: 'abby'
}

user.firstName // string
user.firstName = 'abbey with an e' 
    // Error TS2540: Cannot assign to 'firstName' because it
    // is a read-only property.