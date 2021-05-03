// Create an array of objects
iplPlayers = [
  { name: 'shubman', age: 22 },
  { name: 'prithvi', age: 21 },
  { name: 'arshdeep', age: 21 },
  { name: 'mavi', age: 22 },
  { name: 'prithvi', age: 21 },
]

//  the array of objects with similar elements
console.log(iplPlayers)

let uniqueElements = (iplPlayers) => {
  //  a new array
  let newArray = []

  //  an empty object
  let uniqueObject = {}

  // Loop for the array elements
  for (let i in iplPlayers) {
    // Extract the name
    objName = iplPlayers[i]['name']

    // Use the name as the index
    uniqueObject[objName] = iplPlayers[i]
  }

  // Loop to push unique object into array
  for (i in uniqueObject) {
    newArray.push(uniqueObject[i])
  }
  return newArray
}

let uniqueArray = uniqueElements(iplPlayers)

//  the unique of unique objects
console.log(uniqueArray)
