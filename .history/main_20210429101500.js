// ---Javascript data types---
// String, Numbers, Boolean, null, undefined

const name = 'Mike' //String
const age = 31 //Number
const rating = 4.5 //Number
const isCool = true //Boolean
const x = null //null
const y = undefined //undefined
let z // undefined

// ---var, let, const---

// scope of var can only be global or function

//Global scope --

var carName = 'Swift'
//code here can use carName
function myFun1() {
  console.log(carName)
  //code here can also use carName
}

//Function scope --

//code here can not use bikeName
function myFun2() {
  var bikeName = 'Pulsar'
  //code here can use bikeName
}
//code here can not use bikeName

//redeclaring a variable with var keyword

var x = 10
// x is 10 here

{
  var x = 5
  // x is 5 here
}
// x will be 5 here too
// redclaring a var variable inside a block will also redeclare the variable outside the block

//Block scope --
// let and const use block scope
// variable declared from inside the block {} cannot be accessed from outside the block

{
  let x = 3
}
{
  // x cannot be used here
}

//let can be updated but not re-declared
{
  let name = 'John Snow'
  name = 'Tyrion'

  //this will work
}

{
  let name = 'Beck'
  let name = 'Love'

  //this will not work
}

//const
//variables declared with const maintain constant values. Const cannot be updated or re-declared

{
  const name = 'Clay'
  name = 'Hannah'
  //this will not work
}

{
  const name = 'Beck'
  const name = 'Love'
  //this will not work
}

//every const declaration must be initialized at the time of declaration

// ---operators---

//arithematic--

let x = 5
let y = 3

// addition
console.log('x + y = ', x + y) // 8

// subtraction
console.log('x - y = ', x - y) // 2

// multiplication
console.log('x * y = ', x * y) // 15

// division
console.log('x / y = ', x / y) // 1.6666666666666667

// remainder
console.log('x % y = ', x % y) // 2

// increment
console.log('++x = ', ++x) // x is now 6
console.log('x++ = ', x++) // prints 6 and then increased to 7
console.log('x = ', x) // 7

// decrement
console.log('--x = ', --x) // x is now 6
console.log('x-- = ', x--) // prints 6 and then decreased to 5
console.log('x = ', x) // 5

//exponentiation
console.log('x ** y =', x ** y)

//comparison operators--

// equal operator
console.log(2 == 2) // true
console.log(2 == '2') // true

// not equal operator
console.log(3 != 2) // true
console.log('hello' != 'Hello') // true

// strict equal operator
console.log(2 === 2) // true
console.log(2 === '2') // false

// strict not equal operator
console.log(2 !== '2') // true
console.log(2 !== 2) // false

//logical operators--

// logical AND
console.log(true && true) // true
console.log(true && false) // false

// logical OR
console.log(true || false) // true

// logical NOT
console.log(!true) // false

// bitwise operators
// &	Bitwise AND
// |	Bitwise OR
// ^	Bitwise XOR
// ~	Bitwise NOT
// <<	Left shift
// >>	Sign-propagating right shift
// >>>	Zero-fill right shift

//---arrow function---

const resultPrediction = (score) => {
  if (score < 150) {
    return 'we are losing'
  } else if (score < 250) {
    return 'it will be a close game'
  } else {
    return 'we are surely winning !!!'
  }
}
let score = 300
console.log(resultPrediction(score))
