// 1.2 Check Permutation
// Given two strings, check if one is a permutation of another
function checkPermutation(string1, string2) {

  // Split - O(n)
  // Sort - O(n log n)
  // Join - O(n)
  // === Compare - O(n)
  // ----------------------
  // Actual: O(n log n)

  return (string1.split('').sort().join('') === string2.split('').sort().join(''));
}

function checkPermutationOptimised(string1, string2) {
  var string1CharacterCount = {};
  var string2CharacterCount = {};

  countStringCharacters(string1, string1CharacterCount); // O(n of string1)
  countStringCharacters(string2, string2CharacterCount); // O(n of string2)

  // Test to see if both strings has the same number of different "characters" // O(1)
  if (Object.keys(string1CharacterCount).length !== Object.keys(string2CharacterCount).length) {
    return false;
  }

  // Test to see if both string has the same number of each "characters" // O(n)
  for (key in string1CharacterCount) {
    if (string1CharacterCount[key] !== string2CharacterCount[key]) {
      return false;
    }
  }

  // Time complexity O(n)
  return true;

  function countStringCharacters(string, counts) {
    for (let i = 0; i < string.length; i++) {
      let currentChar = string.charAt(i);
      if (counts[currentChar] === undefined) {
        counts[currentChar] = 0;
      }

      counts[currentChar]++;
    }
  }
}

function testCode() {
  console.log('Testing checkPermutation');
  console.assert(checkPermutation('abc', 'abc') === true);
  console.assert(checkPermutation('bcd', 'bdc') === true);
  console.assert(checkPermutation('abc', 'def') === false);

  console.assert(checkPermutationOptimised('abc', 'abc') === true);
  console.assert(checkPermutationOptimised('bcd', 'bdc') === true);
  console.assert(checkPermutationOptimised('abc', 'def') === false);  
}

testCode();