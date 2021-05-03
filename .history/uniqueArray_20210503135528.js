// Create an array of objects
books = [
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
  objTitle = books[i]['name']

  // Use the name as the index
  uniqueObject[objTitle] = books[i]
}

// Loop to push unique object into array
for (i in uniqueObject) {
  newArray.push(uniqueObject[i])
}

// Display the unique objects
console.log(newArray)
