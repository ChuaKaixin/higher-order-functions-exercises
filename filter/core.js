function onlyEven(array) {
  return array.filter(function(num){
    return num%2==0;
  });
}

function onlySingleWord(array) {
  return array.filter(function(word){
    return /\s/.test(word) == false;
  });
}

function positiveRowsOnly(arrays) {
  return arrays.filter(function(array) {
    for(num of array) {
      if(num<=0) { return false; } 
    }
    
    return true;
    /*
    array.forEach(element => {
      if(element<=0) { return false; }  
    });
    let positiveArray = array.filter(function(num) {
      return num <= 0;
    })
    return positiveArray.length ==0;*/
  });
}

function truthyValuesOnly(array) {
  return array.filter(element => element)
  /*
  return array.filter(function(item){ 
    return item ? true : false;
  });*/
}

module.exports = {
  onlyEven: onlyEven,
  onlySingleWord: onlySingleWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
