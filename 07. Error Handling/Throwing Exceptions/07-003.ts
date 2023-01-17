function ask() {
  return prompt("When is your birthday?");
}

// Checks if the given date is valid
function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === "[object Date]" &&
    !Number.isNaN(date.getTime())
  );
}

// Custom error types
class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}
function parse(birthday: string): Date {
  let date = new Date(birthday);
  if (!isValid(date)) {
    throw new InvalidDateFormatError("Enter a date in the form YYYY/MM/DD");
  }
  if (date.getTime() > Date.now()) {
    throw new DateIsInTheFutureError("Are you a timelord?");
  }
  return date;
}

try {
  let date = parse(ask());
  console.log("Date is", date.toISOString());
} catch (e) {
  if (e instanceof InvalidDateFormatError) {
    console.error(e.message);
  } else if (e instanceof DateIsInTheFutureError) {
    console.log(e.message);
  } else {
    throw e;
  }
}
