function sumEvenNumbers(arr) {
  return arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
}

// OR
function sumEvenNumbers2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// Test function 1
console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // Output: 6
console.log(sumEvenNumbers([10, 20, 30, 40])); // Output: 100
console.log(sumEvenNumbers([1, 3, 5, 7])); // Output: 0

console.log("------------Alternative------------");
// Test function 2
console.log(sumEvenNumbers2([1, 2, 3, 4, 5])); // Output: 6
console.log(sumEvenNumbers2([10, 20, 30, 40])); // Output: 100
console.log(sumEvenNumbers2([1, 3, 5, 7])); // Output: 0