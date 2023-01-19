// type Sushi = {
//     calories: number
//     salty: boolean
//     tasty: boolean
//    }
   
//    interface Sushi {
//     calories: number
//     salty: boolean
//     tasty: boolean
//    }
   

//    type Cake = {
//     calories: number
//     sweet: boolean
//     tasty: boolean
//    }

//    type Food = {
//     calories: number
//     tasty: boolean
//    }
//    type Sushi = Food & {
//     salty: boolean
//    }
//    type Cake = Food & {
//     sweet: boolean
//    }
   

   interface Food {
    calories: number
    tasty: boolean
   }
   interface Sushi extends Food {
    salty: boolean
   }
   interface Cake extends Food {
    sweet: boolean
   }
   