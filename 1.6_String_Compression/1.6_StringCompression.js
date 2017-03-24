function StringCompression(string) {
  
}

function testCode() {
  console.log('Testing StringCompression Function');
  console.assert(StringCompression('aabcccccaaa') === 'a2b1c5a3');
  console.assert(StringCompression('abcdefg') === 'abcdefg');
  console.assert(stringCompression('aabcdefg') === 'aabcdefg');
}

testCode();