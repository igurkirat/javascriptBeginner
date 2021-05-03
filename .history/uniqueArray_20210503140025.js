// Create an array of objects
iplPlayers = [
  { name: 'shubman', age: 22 },
  { name: 'prithvi', age: 21 },
  { name: 'arshdeep', age: 21 },
  { name: 'mavi', age: 22 },
  { name: 'prithvi', age: 21 },
]

// Display the list of array objects
console.log(books)

// Declare a new array
let newArray = []

// Declare an empty object
let uniqueObject = {}

// Loop for the array elements
for (let i in books) {
  // Extract the name
  objName = books[i]['name']

  // Use the name as the index
  uniqueObject[objName] = books[i]
}

// Loop to push unique object into array
for (i in uniqueObject) {
  newArray.push(uniqueObject[i])
}

// Display the unique objects
console.log(newArray)
