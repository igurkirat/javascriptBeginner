// Javascript data types :
// String, Numbers, Boolean, null, undefined

const name = 'Mike' //String
const age = 31 //Number
const rating = 4.5 //Number
const isCool = true //Boolean
const x = null //null
const y = undefined //undefined
let z // undefined

// var, let, const

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

//Block scope
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

// operators
var a = 33
var b = 10
var c = 'Test'

document.write('a + b = ')
result = a + b
document.write(result)

document.write('a - b = ')
result = a - b
document.write(result)

document.write('a / b = ')
result = a / b
document.write(result)

document.write('a % b = ')
result = a % b
document.write(result)

document.write('a + b + c = ')
result = a + b + c
document.write(result)

a = ++a
document.write('++a = ')
result = ++a
document.write(result)

b = --b
document.write('--b = ')
result = --b
document.write(result)
