function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

// OR
function isPalindrome2(word) {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return word === reversed;
}
// Test function 1
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("world")); // Output: false
console.log(isPalindrome("12321")); // Output: true
console.log(isPalindrome("")); // Output: true

// Test function 2
console.log(isPalindrome2("racecar")); // Output: true
console.log(isPalindrome2("hello")); // Output: false
console.log(isPalindrome2("level")); // Output: true
console.log(isPalindrome2("world")); // Output: false
console.log(isPalindrome2("12321")); // Output: true
console.log(isPalindrome2("")); // Output: true