const hotelLobby = require('./hotelLobby')

module.exports = function ({ character }) {
  return {
    question: `
      <p>Walking through the diner you remember why you'd always avoided Twin Peaks in the past.
      <p>You notice a striking character out of the window before the noise of plates going into a dishwasher disturbs your thoughts.
      <p>The diner attendent looks helpful enough so you wander over and ask for directions to the only hotel in Twin Peaks.
      <p>For a moment you think the attendant answers in a language you cannot recognise. After looking slightly confused the attendant repeats with convincing enough instructions to get you to the hotel.
    `,
    answers: [
      {
        text: 'Head to the hotel',
        predicate: () => true,
        effect: character => character,
        leadsTo: hotelLobby
      },
    ]
  }
}
