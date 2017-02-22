const extend = require('extend')
const bed = require('./bed')

module.exports = function woodsToHotel ({ character }) {
  let question = 'You feel worn out and disappointed as you step back into the hotel. The roaring fire and chattering people around you are no comfort. The friend you made earlier is still sitting at the bar, talking to somebody else.'

  return {
    question,
    answers: [
      {
        text: 'Go upstairs to bed',
        predicate: () => true,
        effect: character => character,
        leadsTo: bed
      }
    ]
  }
}
