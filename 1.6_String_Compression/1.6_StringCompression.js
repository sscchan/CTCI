function StringCompression(inputString) {
  let compressedString = '';
  let currentCharacter = inputString.charAt(0);
  let currentCount = 0;

  for (let i = 0; i < inputString.length; i++) {
    // Count continuous character runs
    if (inputString[i] === currentCharacter) {
      currentCount++;
    } else {
      if (currentCount !== 0) {
        compressedString += currentCharacter + currentCount.toString();
        currentCharacter = inputString[i];
        currentCount = 1;
      }
    }

    // Handle last character in the string
    if (i === inputString.length - 1) {
      compressedString += currentCharacter + currentCount.toString();
    }
  }

  if (compressedString.length < inputString.length) {
    return compressedString;
  } else {
    return inputString;
  }

}

function testCode() {
  console.log('Testing StringCompression Function');
  console.assert(StringCompression('aabcccccaaa') === 'a2b1c5a3');
  console.assert(StringCompression('abcdefg') === 'abcdefg');
  console.assert(StringCompression('aabcdefg') === 'aabcdefg');
}

testCode();