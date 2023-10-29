// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.







/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a = new String(x)
  const arr = a.split('')
  let flag = 1;

  for (let i = 0; i < arr.length / 2; i++) {
      if (arr[i] !== arr[(arr.length - 1) - i]) {
          flag = 0
      }
  }
  if (flag === 0) {
      return false
  } else {
      return true
  }
};