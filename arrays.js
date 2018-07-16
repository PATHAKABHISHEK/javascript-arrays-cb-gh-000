var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

var addElementToBeginningOfArray = (chocolateBars,element) =>{
  return  [element,...chocolateBars] 
}

var destructivelyAddElementToBeginningOfArray = (chocolateBars,element) =>{
  return chocolateBars.unshift()
}

var addElementToEndOfArray = (chocolateBars,element) =>{
  return [...chocolateBars,element]
}

var destructivelyAddElementToEndOfArray = (chocolateBars,element) =>{
  return chocolateBars.push()
}

var 