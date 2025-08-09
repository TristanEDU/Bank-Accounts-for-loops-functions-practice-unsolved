function getStringSum(str) {
  let arr = [];
  let sum = 0;
  for (let i = 0; i <= str.length; i++) {
    if (Number(str[i])) {
      arr.push(Number(str[i]));
    }
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

getStringSum("GH2U87A");

// console.log(i);

// console.log(Number(str[i]));
