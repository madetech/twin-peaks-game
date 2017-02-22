const carParkNowhere = require('./carParkNowhere')

module.exports = function hotelBar2 ({ character }) {
  return {
    question: `
      <p>You decide you're probably just imagining things. It's late, you're tired. You're enjoying the conversation and continue talking.

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
