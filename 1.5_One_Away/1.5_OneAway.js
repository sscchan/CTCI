function oneAway(string1, string2) {

  // Check if the difference between the lengths of the string
  // is no more than 1
  if (Math.abs(string1.length - string2.length) > 2) {
    return false;
  }

  // Check for equality with a character swap
  for (let i = 0; i < string1.length; i++) {
    let charSwappedString = string1.slice(0, i) + string2.charAt(i) + string1.slice(i + 1);
    if (charSwappedString === string2) {
      return true;
    }
  }

  // Check for equality when one character is drop from the string
  if (string1.length > string2.length) {
    for (let i = 0; i < string1.length; i++) {
      if (string1.slice(0, i) + string1.slice(i + 1) === string2) {
        return true;
      }
    }
  }

  if (string2.length > string1.length) {
    for (let i = 0; i < string2.length; i++) {
      if (string2.slice(0, i) + string2.slice(i + 1) === string1) {
        return true;
      }
    }
  }

  return false;
}

function testCode() {
  console.log('Testing One Away');
  console.assert(oneAway('pale', 'ple') === true);
  console.assert(oneAway('pales', 'pale') === true);
  console.assert(oneAway('pale', 'bale') === true);
  console.assert(oneAway('pale', 'palc') === true);  
  console.assert(oneAway('pale', 'bake') === false);
}

testCode();