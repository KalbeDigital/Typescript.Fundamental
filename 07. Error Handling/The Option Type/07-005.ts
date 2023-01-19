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

function parse(birthday: string): Date[] {
  let date = new Date(birthday);
  if (!isValid(date)) {
    return [];
  }
  return [date];
}

let date = parse(ask());
date.map((_) => _.toISOString()).forEach((_) => console.log("Date is", _));
