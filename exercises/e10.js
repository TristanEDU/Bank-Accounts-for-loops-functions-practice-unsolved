// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]
// import { bankAccounts } from "../data/data.js";

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let arr = [];
  let arry = array.length;

  for (let i = 0; i < arry; i++) {
    let name = array[i].name;
    for (let x = 0; x < name.length; x++) {
      let l = name[x];
      if (letter === l || l === letter.toUpperCase()) {
        arr.push(name);
      }
    }
  }
  console.log(arr);
  return arr;
}

// getClientsWithLetterInName(bankAccounts, "s");
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
