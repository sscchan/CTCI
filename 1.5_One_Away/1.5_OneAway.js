function oneAway(string1, string2) {

}

function testCode() {
  console.log('Testing One Away');
  console.assert(oneAway('pale', 'ple') === true);
  console.assert(oneAway('pales', 'pale') === true);
  console.assert(oneAway('pale', 'bale') === true);
  console.assert(oneAway('pale', 'bake') === false);
}

testCode();