nterface FirstType {
    id: number
    firstName: string
    lastName: string
  }
   
  interface SecondType {
    id: number
    address: string
    city: string
  }
   
  type ExtractType = Extract<keyof FirstType, keyof SecondType>
  // Output: "id"
  