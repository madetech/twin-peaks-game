const extend = require('extend')

module.exports = function woodsToHotel ({ character }) {
  let question = 'You feel worn out and disappointed as you step back into the hotel. The roaring fire and chattering people around you are no comfort. The friend you made earlier is still sitting at the bar, talking to somebody else. You head up to your room and get into bed. As you lie in the dark, you try not to let your mind get the better of you.'

  if (character.decisions.foundPlayingCard) {
    question += ' You turn over the playing card on your bedside table, inspecting it closely. You can just about make out an address on the back...'
  }

  return {
    question,
    answers: []
  }
}
