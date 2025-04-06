function compute(a, b) {
  return a === b ? a * b : a + b;
}

// OR
function compute2(a, b) {
  if (a === b) {
    return a * b;
  } else {
    return a + b;
  }
}

// Test function 1
console.log(compute(3, 4)); // Output: 7
console.log(compute(5, 5)); // Output: 25
console.log(compute(10, 20)); // Output: 30

// Test function 2
console.log(compute2(3, 4)); // Output: 7
console.log(compute2(5, 5)); // Output: 25
console.log(compute2(10, 20)); // Output: 30