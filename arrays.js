var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

var addElementToBeginningOfArray = (chocolateBars1,element) =>{
  return  [element,...chocolateBars1] 
}

var destructivelyAddElementToBeginningOfArray = (chocolateBars1,element) =>{
  return chocolateBars1.unshift()
}

var addElementToEndOfArray = (chocolateBars1,element) =>{
  return [...chocolateBars1,element]
}

var destructivelyAddElementToEndOfArray = (chocolateBars1,element) =>{
  return chocolateBars1.push()
}

var accessElementInArray = (chocolateBars1,index) =>{
  return chocolateBars1[index]
}

var destructivelyRemoveElementFromBeginningOfArray = (chocolateBars1) =>{
  
  return chocolateBars1.shift() 
}
