const extend = require('extend')
const woodsDirectionLost = require('./woodsDirectionLost')
const woodsToHotel = require('./woodsToHotel')

module.exports = function woodsDirectionBonus ({ character }) {
  return {
    question: 'You find an unusual looking playing card on the ground. It\'s too dark to make out why, but you feel like it\'s important. You place it in your pocket.',
    answers: [
      {
        text: 'Go left',
        predicate: () => true,
        effect: character => extend(character, { decisions: { foundPlayingCard: true } }),
        leadsTo: woodsDirectionLost
      },
      {
        text: 'Go right',
        predicate: () => true,
        effect: character => extend(character, { decisions: { foundPlayingCard: true } }),
        leadsTo: woodsDirectionLost
      },
      {
        text: 'Go straight ahead',
        predicate: () => true,
        effect: character => extend(character, { decisions: { foundPlayingCard: true } }),
        leadsTo: woodsDirectionLost
      },
      {
        text: 'Go back to bed',
        predicate: () => true,
        effect: character => extend(character, { decisions: { foundPlayingCard: true } }),
        leadsTo: woodsToHotel
      }
    ]
  }
}
