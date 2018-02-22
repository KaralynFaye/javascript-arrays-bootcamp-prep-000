function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.push(element)
}

function accessElementInArray(array,i){
  return array[i];
}