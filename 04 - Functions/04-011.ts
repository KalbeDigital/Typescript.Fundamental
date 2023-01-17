function fancyDate() {
  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
}

fancyDate.call(new Date) // evaluates to "16/1/2023"

fancyDate() // Uncaught TypeError: this.getDate is not a function