// define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function createArray(lower, upper) {
  let anArray = []
  for (let i = lower; i <= upper; i++) {
    anArray.push(i)
  }
  return anArray
}
// define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function shout (str, num) {
  let output = str.toUpperCase()
  for (let i = 0; i < num; i++) {
    output += "!"
  }
  return output
}

// change the exported value to be the name of the function you defined
module.exports = {
  a: createArray, // change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: shout // change undefined to be the name of the function defined to return the string with exclamations (the second todo)
}
