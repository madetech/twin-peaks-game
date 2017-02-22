const woodsDirection1 = require('./woodsDirection1')
const woodsDirection2 = require('./woodsDirection2')
const woodsToHotel = require('./woodsToHotel')

module.exports = function woods ({ character }) {
  return {
    question: 'You grow increasingly concerned as you follow the path through the woods, occassionally catching a glimpse of somebody ahead of you, but never getting close enough to see them. You reach a clearing, and see motion to your left, right and straight ahead, but you can\'t tell what it is.',
    answers: [
      {
        text: 'Go left',
        predicate: () => true,
        effect: character => character,
        leadsTo: woodsDirection1
      },
      {
        text: 'Go right',
        predicate: () => true,
        effect: character => character,
        leadsTo: woodsDirection2
      },
      {
        text: 'Go straight ahead',
        predicate: () => true,
        effect: character => character,
        leadsTo: woodsDirection2
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
