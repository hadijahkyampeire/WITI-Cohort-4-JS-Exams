function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
console.log(reverseString("12345")); // Output: "54321"
console.log(reverseString("")); // Output: ""