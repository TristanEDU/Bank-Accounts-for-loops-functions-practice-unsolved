// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let badAccounts = [];
  for (let i = 0; i < array.length; i++) {
    let account = array[i];
    let deposit = account.deposits;
    let depositSum = 0;
    let withdrawals = account.withdrawals;
    let withdrawalsSum = 0;
    let balance = 0;

    if (
      account.hasOwnProperty("deposits") &&
      account.hasOwnProperty("withdrawals")
    ) {
      for (let n = 0; n < deposit.length; n++) {
        depositSum += deposit[n];
      }

      for (let n = 0; n < withdrawals.length; n++) {
        withdrawalsSum += withdrawals[n];
      }
    } else if (account.hasOwnProperty("deposits")) {
      for (let n = 0; n < deposit.length; n++) {
        depositSum += deposit[n];
      }
    } else if (account.hasOwnProperty("withdrawals")) {
      for (let n = 0; n < withdrawals.length; n++) {
        withdrawalsSum += withdrawals[n];
      }
    } /* else {
        balance = 0;
      } */

    if (depositSum >= withdrawalsSum) {
      balance = depositSum - withdrawalsSum;
      console.log(
        account.id,
        "deposits greater then withdrawals.",
        "Account ballance:",
        account.balance,
        "Array ballance:",
        balance,
        "Sum of the deposits:",
        depositSum,
        "Sum of the withdrawals:",
        withdrawalsSum
      );
    } else if (depositSum <= withdrawalsSum) {
      balance = withdrawalsSum - depositSum;
      console.log(
        account.id,
        "deposits greater then withdrawals.",
        "Account ballance:",
        account.balance,
        "Array ballance:",
        balance,
        "Sum of the deposits:",
        depositSum,
        "Sum of the withdrawals:",
        withdrawalsSum
      );
    } else {
      balance = 0;
      console.log(
        account.id,
        "Else",
        "account ballance",
        account.balance,
        "Array ballance",
        balance,
        "sum of the deposits",
        depositSum,
        "sum of the withdrawals",
        withdrawalsSum
      );
    }

    if (
      account.balance ===
      balance /* || (balance === 0 && account.balance === 0) */
    ) {
      // console.log(account.id, "hurray! Your account makes sense!");
    } else {
      badAccounts.push(account);
    }
  }
  console.log(badAccounts);
  return badAccounts;
}

// import { bankAccounts } from "../data/data.js";
// getClientsWithWrongBalance(bankAccounts);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
