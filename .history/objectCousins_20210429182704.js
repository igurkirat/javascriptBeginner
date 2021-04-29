let team1 = {
  name: 'chelsea',
  location: 'london',
  titlesWon: 39,
}

let team2 = Object.assign(team1)

console.log(team2)

team2.name = 'Arsenal'
team2.location = 'london'
team2.titlesWon = 28
