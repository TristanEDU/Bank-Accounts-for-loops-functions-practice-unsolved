// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  let max = -Infinity;
  let lowest = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > max && array[i].balance > 0) {
      max = array[i].balance;
      lowest.push(max);
      console.log(max);
    }
  }

  for (let i = 0; i < array.length; i++) {
    // console.log("I am just trying to see where we are at...");
    if (array[i].balance === max) {
      // console.log("this is a test", array[i]);
      return [array[i]];
    }
  }
  // return [];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
