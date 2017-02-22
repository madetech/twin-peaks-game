const incrementAttributeEffect = require('../lib/incrementAttributeEffect')
const hotelLobby = require('./hotelLobby')

module.exports = function ({ character }) {
  let helpLevel = ''

  if (character.attributes.naivety <= 5) {
    helpLevel = 'enough'
  }

  let devilTalk = 'For a moment you think the attendant answers in a language you cannot recognise. After looking slightly confused the attendant repeats with convincing enough instructions to get you to the hotel.'
  let effect = character => character

  if (character.attributes.fear > 5) {
    devilTalk = `
      You're struck with a sudden sense of fear. Did the attendant just speak to you in devil tongue? Paranoid, you run out of the diner and up the road.
      <p>You don't stop until you notice a building that looks quite like a hotel.
    `
    effect = incrementAttributeEffect('fear')
  }

  return {
    question: `
      <p>Walking through the diner you remember why you'd always avoided Twin Peaks in the past.
      <p>You notice a striking character out of the window before the noise of plates going into a dishwasher disturbs your thoughts.
      <p>The diner attendent looks helpful ${helpLevel} so you wander over and ask for directions to the only hotel in Twin Peaks.
      <p>${devilTalk}
    `,
    answers: [
      {
        text: 'Head to the hotel',
        predicate: () => true,
        effect,
        leadsTo: hotelLobby
      },
    ]
  }
}
