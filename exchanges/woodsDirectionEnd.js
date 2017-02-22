const incrementAttributeEffect = require('../lib/incrementAttributeEffect')
const woodsDirectionLost = require('./woodsDirectionLost')
const woodsToHotel = require('./woodsToHotel')

module.exports = function woodsDirectionEnd ({ character }) {
  return {
    question: 'The path has begun to disappear, you\'re stepping through overgrowth. It doesn\'t look like people come here often. You\'re not sure you\'re going to find them again. You\'re not even sure you\'ll be able to find your way back...',
    answers: [
      {
        text: 'Go left',
        predicate: () => true,
        effect: incrementAttributeEffect('fear'),
        leadsTo: woodsDirectionLost
      },
      {
        text: 'Go right',
        predicate: () => true,
        effect: incrementAttributeEffect('fear'),
        leadsTo: woodsDirectionLost
      },
      {
        text: 'Go straight ahead',
        predicate: () => true,
        effect: incrementAttributeEffect('fear'),
        leadsTo: woodsDirectionLost
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
