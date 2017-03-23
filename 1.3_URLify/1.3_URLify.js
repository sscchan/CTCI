
function URLify(inputString) {
  var URLString = inputString.replace(/[ ]/g, '%20');
  return URLString;
}

function testCode() {
  console.log('Testing URLify');
  console.assert(URLify('Doo') === 'Doo');   
  console.assert(URLify('Mr John Smith') === 'Mr%20John%20Smith'); 
}

testCode();