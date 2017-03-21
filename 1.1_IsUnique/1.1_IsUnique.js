// 1.1 Is Unique
// Implement an algorithm to determine if a string has all unique characters
// without an additional data structure

// the no-data-structure constraint meant using brute force O(n^2) approach
function isUnique(inputString) {
  for (let i = 0; i < inputString.length - 1; i++) {
    let currentChar = inputString[i];
    for (let j = i + 1; j < inputString.length; j++) {
      if (currentChar === inputString[j]) {
        return false;
      }
    }
  }


  return true;
}

function testCode() {
  console.log('Testing isUnique');
  console.assert(isUnique('once daily') === true);
  console.assert(isUnique('repeating characters') === false);
  console.assert(isUnique('r') === true, 'input: r');  
}

testCode();