function fancyDate(this: Date) {
	return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}

console.log(fancyDate.call(new Date())); // evaluates to "16/1/2023"
console.log(fancyDate()); // Error TS2684: The 'this' context of type 'void' is not assignable to method's 'this' of type 'Date'.
