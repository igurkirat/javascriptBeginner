//---javascript objects---

// javascript objects are containers for named values called properties.
//The object values are written in key:value or name:value PerformanceObserverEntryList.

let myPlayer = {
  name: 'Mason Mount',
  age: 22,
  club: 'chelsea',
  previousClubs: ['Vitesse', 'DerbyCounty'],
  position: 'midfielder',
  isInjured: false,
  stats: {
    matches: 100,
    goals: 16,
    assists: 13,
  },
  performance: function () {
    if (this.stats.goals + this.stats.assists > 25) {
      return 'brilliant'
    } else if (this.stats.goals + this.stats.assists > 15) {
      return 'average'
    } else {
      return 'needs improvement'
    }
  },
}

//A data property contains a single location for a data value.
// A data property has four attributes:

//  [[Configurarable]] – determines whether a property can be redefined or removed via delete operator.
//  [[Enumerable]] – indicates that if a property will be returned in the for...in loop.
//  [[Writable]] – specifies that the value of a property can be changed.
//  [[Value]] – contains the actual value of a property.
// By default, the [[Configurable]] , [[Enumerable]], and [[Writable]] attributes set to true for all properties defined directly on an object.
//  The default value of the [[Value]] attribute is undefined.
delete myPlayer.isInjured
console.log(myPlayer.isInjured) //it will return undefined

// ---Accessing Object Properties --
// objectName.propertyName or objectName["propertyName"]

console.log(`${myPlayer.name} plays for --> ${myPlayer['club']}`)

console.log(`he previously played for ${myPlayer.previousClubs}`)
console.log(
  `he has played ${myPlayer.stats.matches} matches and scored ${myPlayer.stats.goals} goals for the club`
)

// Object Methods --

//Objects can also have methods.
// Methods are actions that can be performed on objects.
// Methods are stored in properties as function definitions.
console.log(`The player performance is --> ${myPlayer.performance()}`)

// ---This keyword---

// In a function definition, this refers to the "owner" of the function.

// In the example above, this is the person object that "owns" the fullName function.

// In other words, this.firstName means the firstName property of this object.

//---Object.defineProperty()---

// The Object.defineProperty() method accepts three arguments:

// An object.
// A property name of the object.
// A property descriptor object that has four properties: configurable, enumerable, writable, and value.
// If you use the Object.defineProperty() method to define a property of the object, the default values of [[Configurable]], [[Enumerable]], and [[Writable]] are set to false unless otherwise specified.

Object.defineProperty(myPlayer, 'squad_no', {
  configurable: false,
  value: 19,
})

console.log(myPlayer.squad_no)
delete myPlayer.squad_no //this will throw an error because we have turned configurable : false for this property

let myObj1 = {
  name: 'Pulisic',
  age: 21,
}
