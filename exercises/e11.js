// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]
// import { bankAccounts } from "../data/data.js";

export function getAllWithdrawals(array) {
  // Your code goes here...
  let sums = [];
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(i, "Array position", array[i]);
    if (array[i].withdrawals !== undefined) {
      arr.push(array[i].withdrawals);
    } /* (array[i].withdrawals === undefined) */ else {
      arr.push([0.0]);
    }
  }
  for (let n = 0; n < arr.length; n++) {
    // console.log("begin for loop");
    // console.log(n, "arr", arr /*, "second loop position", arr[n] */);
    let sum = arr[n];
    let s = 0;
    // console.log("sum", sum);
    // console.log("sum 1", sum);
    for (let x = 0; x < sum.length; x++) {
      // console.log("sum x", sum[x]);
      s += sum[x];
      // console.log("this is s", s);
    }
    console.log("this is s 2", s);
    sums.push(s);
  }

  // console.log("arr", arr);
  console.log("sums", sums);
  return sums;
}

// getAllWithdrawals(bankAccounts);
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
