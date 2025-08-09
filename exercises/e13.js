// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let sumLess2000 = [];

  for (let i = 0; i < array.length; i++) {
    let object = array[i];
    object.depositSums = 0;
    if (object.hasOwnProperty("deposits") === true) {
      let deposits = object.deposits;
      for (let x = 0; x < deposits.length; x++) {
        let deposit = deposits[x];
        object.depositSums += deposit;
      }
    } else {
      object.depositSums = 0;
    }
  }
  for (let n = 0; n < array.length; n++) {
    let sum = array[n];
    console.log("This is the sum", sum.depositSums);
    if (sum.depositSums < 2000 || sum.depositSums === 0) {
      delete sum.depositSums;
      sumLess2000.push(sum);
    }
  }
  console.log(sumLess2000);
  return sumLess2000;
}

// import { bankAccounts } from "../data/data.js";
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts);
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
