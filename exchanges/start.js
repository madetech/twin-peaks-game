const theEnd = require('./theEnd')
const woods = require('./woods')
const diner = require('./diner')

module.exports = function ({ character }) {
  return {
    question: `
      <h1>Twin Peaks</h1>
      <p>Finally, you think to yourself.
      <p>The rain that slowed your journey is still pouring heavily but at least you will soon see your partner.
      <p>You realise you have never been to Twin Peaks before, and wonder where the hotel your better half is staying at.
      <p>You see a Diner nearby that looks busy enough to have some answers within.
    `,
    answers: [
      {
        text: 'Park the car, and enter the diner',
        predicate: () => true,
        effect: character => character,
        leadsTo: diner
      },
      {
        text: 'Oddly, head to the woods',
        predicate: () => true,
        effect: character => character,
        leadsTo: woods
      }
    ]
  }
}
