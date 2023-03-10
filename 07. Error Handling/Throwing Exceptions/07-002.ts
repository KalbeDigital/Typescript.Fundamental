function ask() {
    return prompt('When is your birthday?')
   }
   
   function parse(birthday: string): Date {
    let date = new Date(birthday)
    if (!isValid(date)) {
    throw new RangeError('Enter a date in the form YYYY/MM/DD')
    }
    return date
   }
   
   // Checks if the given date is valid
   function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTime())
   }
   
   try {
    let date = parse(ask())
    console.log('Date is', date.toISOString())
   } catch (e) {
    console.error(e.message)
   }