// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  let Depo100 = [];

  for (let i = 0; i < array.length; i++) {
    let object = array[i];
    if (object.hasOwnProperty("deposits") === true) {
      let plus100 = object.deposits;

      for (let n = 0; n < plus100.length; n++) {
        let x = plus100[n];

        if (x > 100) {
          Depo100.push(x);
        }
      }
    }
  }
  console.log(Depo100);
  return Depo100;
}

// import { bankAccounts } from "../data/data.js";
// getAllDepositsGreaterThanOneHundred(bankAccounts);
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
