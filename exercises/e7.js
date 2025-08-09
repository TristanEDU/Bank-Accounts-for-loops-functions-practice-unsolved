// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]
// import { bankAccounts } from "../data/data.js";
// import { bankAccountsNoPositiveBalance } from "../data/data.js";

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  let min = Infinity;
  let lowest = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance < min && array[i].balance > 0) {
      min = array[i].balance;
      lowest.push(min);
      console.log(min);
    } /* else {
      return [];
    } */
  }
  /*  if (i == array.length && min !== Array) {
      console.log("This is min 1", min);
      // let min = [];
      console.log("This is min 2", min);
      return [];
    } */

  for (let i = 0; i < array.length; i++) {
    // console.log("I am just trying to see where we are at...");
    if (array[i].balance === min) {
      // console.log("this is a test", array[i]);
      return [array[i]];
    }
  }
  return [];
  // console.log("second min", min);
  // return lowest;
}

// console.log(getClientWithLeastPositiveBalance(bankAccounts));
// console.log(getClientWithLeastPositiveBalance(bankAccountsNoPositiveBalance));
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
