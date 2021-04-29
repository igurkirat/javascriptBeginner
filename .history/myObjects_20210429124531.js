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
}

console.log(`${myPlayer.name} plays for --> ${myPlayer.club}`)

console.log(`he previously played for ${myPlayer.previousClubs}`)
