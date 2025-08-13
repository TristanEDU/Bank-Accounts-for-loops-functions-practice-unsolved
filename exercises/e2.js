// EXERCISE 2
// for every number between 0 and max find all numbers that have square roots that are integers
// getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]

export function getNumbersWithSquareRoots(max) {
  // Your code goes here...
  let numArray = [];
  for (let i = 0; i * i < max; i++) {
    numArray.push(i * i);
  }

  return numArray;
}

// console.log(getNumbersWithSquareRoots(50));
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

/* for (let i = 0; i < max; i++) {
    let n = 0;
    if (n < i && n * n === i) {
      return i;
    } else {
      n++;
    }
  } */

/*     export function getNumbersWithSquareRoots(max) {
  // Your code goes here...
  let numArray = [0, 1];
  for (let i = 0; i < max; i++) {
   
    console.log("outer loop", i);
    console.log(max);
    for (let n = 0; n < i; n++) {
   
      console.log("2nd loop i", i);
      console.log("2nd loop n", n);
      if (n * n === i) {
        
        console.log("3rd loop i", i);
        console.log("3rd loop n", n);
        numArray.push(i);
      }
    }
  }
  return numArray;
} */
