const carParkNowhere = require('./carParkNowhere')

module.exports = function hotelBar2 ({ character }) {
  return {
    question: `
      <p>You're enjoying the conversation so you continue talking.
      <p>Minutes later you hear a scream and the sound of glass shattering outside.
    `,
    answers: [
      {
        text: 'Rush outside',
        predicate: () => true,
        effect: character => character,
        leadsTo: carParkNowhere
      },
    ]
  }
}
