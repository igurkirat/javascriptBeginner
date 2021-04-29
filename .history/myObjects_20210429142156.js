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

// Accessing Object Properties --
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
