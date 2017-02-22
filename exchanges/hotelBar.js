const carPark = require('./carPark')
const hotelBar2 = require('./hotelBar2')
const bed = require('./bed')

module.exports = function hotelBar ({ character }) {
  let question = `
    <p>You head into the bar. The rich smell of pine in the air and the warmth of the fire remind you of home, but you're not sure why.
    <p>You sit down and order a coffee, black as midnight on a moonless night, with a generous amount of scotch.
    <p>The bartender, ${character.associates.bartender.name}, is friendly enough but you find their sense of humour a little off kilter.
  `

  if (character.attributes.lowSelfEsteem < 4) {
    question += `
      <p>A person sits next to you, introducing themselves as ${character.associates.barPerson.name}. You find them attractive, and wonder if your partner knows them, or grew up with them. You feel a little guilty but engage in conversation.
    `
  }

  question += `
    <p>You are brought out of your long and interesting conversation when you notice someone familiar in the mirror behind the bar. They're standing in the doorway and seem to be looking at you.
    <p>They're gone by the time you've turned around to get a better look.
  `

  return {
    question,
    answers: [
      {
        text: 'Continue your conversation',
        predicate: () => character.attributes.lowSelfEsteem < 4,
        effect: character => character,
        leadsTo: hotelBar2
      },
      {
        text: 'Leave the bar and follow them down the hallway',
        predicate: () => true,
        effect: character => character,
        leadsTo: carPark
      },
      {
        text: 'It\'s probably nothing, you\'re getting tired. Go to bed',
        predicate: () => true,
        effect: character => character,
        leadsTo: bed
      },
    ]
  }
}
