const woodsDirectionEnd = require('./woodsDirectionEnd')
const woodsDirectionBonus = require('./woodsDirectionBonus')
const woodsToHotel = require('./woodsToHotel')

module.exports = function woodsDirection1 ({ character }) {
  return {
    question: 'You feel all the more disorientated as you head further into the woods. You see motion all around you. Is it them, or just another owl?',
    answers: [
      {
        text: 'Go left',
        predicate: () => true,
        effect: character => character,
        leadsTo: woodsDirectionEnd
      },
      {
        text: 'Go right',
        predicate: () => true,
        effect: character => character,
        leadsTo: woodsDirectionEnd
      },
      {
        text: 'Go straight ahead',
        predicate: () => true,
        effect: character => character,
        leadsTo: woodsDirectionBonus
      },
      {
        text: 'Go back to the hotel',
        predicate: () => true,
        effect: character => character,
        leadsTo: woodsToHotel
      }
    ]
  }
}