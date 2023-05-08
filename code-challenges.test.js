// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
 //Pseudo Code:
 //input number greater than 2
 //output array of numbers from fibonacci series.
 //Create a function named fibFunction that will take a number, create an array through iteration equal to that number, and return a series of numbers from the fibonacci sequence


// a) Create a test with expect statements for each of the variables provided.

describe("fibFunction", () => {
  it("takes in a number (greater than 2) and returns an array", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    expect(fibFunction(fibLength1)).toStrictEqual([1, 1, 2, 3, 5, 8])
    const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibFunction(fibLength2)).toStrictEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
}) 

// FAIL  ./code-challenges.test.js
// fibFunction
//   ✕ takes in a number (greater than 2) and returns an array

// ● fibFunction › takes in a number (greater than 2) and returns an array

//   ReferenceError: fibFunction is not defined


// b) Create the function that makes the test pass.



const fibFunction = (input) =>{
  if (input < 3) {
      return "Input must be larger than 2";
    }
    let fibFuncArray = [1, 1];
    for (let i = 2; i < input; i++) {
      fibFuncArray[i] = fibFuncArray[i-1] + fibFuncArray[i-2];
    }
    return fibFuncArray;
  }

// console.log(fibFunction(fibLength1))
 // output: [1, 1, 2, 3, 5, 8]
// console.log(fibFunction(fibLength2))
// output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// PASS  ./code-challenges.test.js
// fibFunction
//   ✓ takes in a number (greater than 2) and returns an array (1 ms)


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

//Pseudo Code: 
//input is an object
//return an array of values from least to greatest    
//Create a function named leastToGreatest that sorts an object to create an array 
//of values from least to greatest and return that array.

// a) Create a test with expect statements for each of the variables provided.

  describe("leastToGreatest", () => {
    it("takes in an object and returns an array of the values from least to greatest", () => {
      const studyMinutesWeek1 = {
        sunday: 90,
        monday: 30,
        tuesday: 20,
        wednesday: 15,
        thursday: 30,
        friday: 15,
        saturday: 60
      }
      // Expected output: [15, 15, 20, 30, 30, 60, 90]
     expect(leastToGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
      const studyMinutesWeek2 = {
       sunday: 100,
       monday: 10,
       tuesday: 45,
       wednesday: 60,
       thursday: 20,
       friday: 15,
       saturday: 65
     }
      // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(leastToGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
  })
  // FAIL  ./code-challenges.test.js
  // fibFunction
  //   ✓ takes in a number (greater than 2) and returns an array (1 ms)
  // leastToGreatest
  //   ✕ takes in an object and returns an array of the values from least to greatest

  // ● leastToGreatest › takes in an object and returns an array of the values from least to greatest

  //   ReferenceError: leastToGreatest is not defined



// b) Create the function that makes the test pass.

const leastToGreatest = (input) => {
  const minsArray = Object.values(input) 
  minsArray.sort((a,b) => a - b)
  return minsArray
}
//console.log(leastToGreatest(studyMinutesWeek1))
// output: [15, 15, 20, 30, 30, 60, 90]
//console.log(leastToGreatest(studyMinutesWeek2))
// output: [10, 15, 20, 45, 60, 65, 100]

// PASS  ./code-challenges.test.js
// fibFunction
//   ✓ takes in a number (greater than 2) and returns an array (1 ms)
// leastToGreatest
//   ✓ takes in an object and returns an array of the values from least to greatest

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.15 s
// Ran all test suites.
// ✨  Done in 0.73s.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

//input: is an array
//output: is an array of the sum of all the numbers in the array
//Create a function named accumulateSum that takes in an array and returns an array of the sum of all the numbers in the array. If array “empty” then return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumulateSum", () => {
  it("takes in an array and returns an array", () => {
    // a)
    expect(accumulateSum(accountTransactions1)).toEqual([100,  83, 60, 51])
    // const accountTransactions1 = [100, -17, -23, -9]
                 // Expected output: [100, 83, 60, 51]

    expect(accumulateSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    // const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    expect(accumulateSum(accountTransactions3)).toEqual([]);
    // const accountTransactions3 = []
    // Expected output: []

  })
  })

  // FAIL  ./code-challenges.test.js
  // fibFunction
  //   ✓ takes in a number (greater than 2) and returns an array (1 ms)
  // leastToGreatest
  //   ✓ takes in an object and returns an array of the values from least to greatest (1 ms)
  // accumulateSum
  //   ✕ takes in an array and returns an array

  // ● accumulateSum › takes in an array and returns an array

  //   ReferenceError: accumulateSum is not defined

  const accountTransactions1 = [100, -17, -23, -9]
  const accountTransactions2 = [250, -89, 100, -96]
  const accountTransactions3 = []
// b) Create the function that makes the test pass

const accumulateSum = (array) => {
  if(array.length === 0)
   return []
   let sum = 0  
   return array.map((value) => {
    sum += value
    return sum    
   })
  }

  // console.log(accumulateSum(accountTransactions1))
  // // output: [100, 83, 60, 51]
  // console.log(accumulateSum(accountTransactions2))
  // //output: [250, 161, 261, 165]
  // console.log(accumulateSum(accountTransactions3))
  // //output: []

// PASS  ./code-challenges.test.js
// fibFunction
//   ✓ takes in a number (greater than 2) and returns an array (2 ms)
// leastToGreatest
//   ✓ takes in an object and returns an array of the values from least to greatest
// accumulateSum
//   ✓ takes in an array and returns an array (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.144 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.63s.