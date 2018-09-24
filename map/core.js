function multiplyBy10(array) {
  return array.map( function (number) {return number*10});
}

//alternatives: 
//use replace to replace all non vowels with empty string
//use match to match the vowels
function formVowelStr(word) {
    const vowel = ['a','e','i','o','u'];
    let vowelonlystr = '';
    for(char of word){
      if(vowel.includes(char)){
        vowelonlystr = vowelonlystr.concat(char);
      }
    }
    return vowelonlystr;
}

function onlyVowels(array) {
  return array.map(function(word){
    return formVowelStr(word);
  });
}

function multiplyBy2(array) {
  return array.map( function (number) {return number*2});
}

function doubleMatrix(array) {
  const matrixoutput = array.map (
    multiplyBy2);
    /**function(entry){
    return entry.map(function(innerentry){
      return innerentry*2;
    });**/
  return matrixoutput;
}

function onlyNames(array) {
  const names = array.map(function(entry){
    return entry.name;
  });
  return names;
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  multiplyBy2: multiplyBy2,
  doubleMatrix: doubleMatrix,
  onlyNames: onlyNames
};


const m10results = multiplyBy10([45, 1, -10, 11, 250]);
console.log(m10results);

const m2results = multiplyBy2([1,2,3]);
console.log(m2results);

const dmResults = doubleMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(dmResults);

var input = [
  {
    name: "homer",
    role: "dad",
    favorite: "donuts"
  },
  {
    name: "marge",
    role: "mom",
    favorite: "family"
  },
  {
    name: "lisa",
    role: "daughter",
    favorite: "school"
  }
];
const onlyNamesResults = onlyNames(input);
console.log(onlyNamesResults);

const vowelResults = onlyVowels(["average", "exceptional", "amazing"]);
console.log(vowelResults);