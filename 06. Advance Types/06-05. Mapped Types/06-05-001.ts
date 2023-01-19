type StringMap<T> = {
    [P in keyof T]: string
  }
   
  function showType(arg: StringMap<{ id: number; name: string }>) {
    console.log(arg)
  }
   
  showType({ id: 1, name: "Test" })
  // Error: Type 'number' is not assignable to type 'string'.
   
  showType({ id: "testId", name: "This is a Test" })
  // Output: {id: "testId", name: "This is a Test"}
  