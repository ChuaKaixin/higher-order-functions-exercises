// Check to see if all elements in an array
// are even numbers.
function allEven(array) {
  return array.every(function(num) {
    return num%2==0;
  });
}


// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function checkIsPositive(array) {
 return array.every(function(num){
   return num > 0;
 })
 //return array.every(element => element > 0);
}
function isEveryElementPositive(arrays) {
  return arrays.every(checkIsPositive);
}

module.exports = {
  allEven,
  isEveryElementPositive
};
