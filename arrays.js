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

var removeElementFromBeginningOfArray = (chocolateBars1) =>{
  
afterremoving = chocolateBars1.slice(1)
return afterremoving
}

var destructivelyRemoveElementFromEndOfArray = (chocolateBars1) =>{
  return chocolateBars1.pop()
}

var destructivelyRemoveElementFromEndOfArray = (chocolateBars1) =>{
  after_removing_but_not_altering =  chocolateBars1.pop()
  return after_removing_but_not_altering
  
}



