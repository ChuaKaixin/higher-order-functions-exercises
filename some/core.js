// Check to see if any of the elements in the
// array are numbers greater than 10.
function anyGreaterThan10(array) {
  return array.some(function(num){
    return num >10;
  });
}

// Check to see if any of the strings in
// the array is longer than 10 characters.
function longWord(array) {
  return array.some(function(item){
    return item.length >10;
  });
}

// Check to see if any of the elements in
// the matrix are true.
function hasTrue(array) {
  return array.some(function(item){
    return item;
  });
}

function containsTrue(arrays) {
  return arrays.some(hasTrue);
  //return matrix.some(row => row.some(element => element)); --alternative solution
}

// Check to see if the word 'Carcosa' is in
// the phrase (using some).
function containsCarcosa(arrays) {
  return arrays.some(function(sentence) {
    return sentence.includes("Carcosa");
  });
  //return array.some(phrase => phrase.includes("Carcosa"));
}

module.exports = {
  anyGreaterThan10,
  longWord,
  containsTrue,
  containsCarcosa
};
