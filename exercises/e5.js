// EXERCISE 5
// Return an array of all bank account holders names
// Array example: bankAccounts in /data/data.js
// getAllClientNames(bankAccounts) => ['Kevin', 'Spenser']
// import { bankAccounts } from "../data/data.js";

export function getAllClientNames(array) {
  // Your code goes here...
  let name = [];
  for (let i = 0; i < array.length; i++) {
    let value = array[i].name;
    name.push(value);
    console.log(name);
  }
  return name;
}

// getAllClientNames(bankAccounts);
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
