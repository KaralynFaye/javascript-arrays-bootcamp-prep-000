function addElementToBeginningOfArray(array, element) {
  return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.push(element);
}

function accessElementInArray(array,i){
  return array[i];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1);
}

