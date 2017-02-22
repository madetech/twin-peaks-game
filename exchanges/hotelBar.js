const hotelBar = require('./hotelBar')
const bed = require('./bed')

module.exports = function ({ character }) {
  return {
    question: `
      <p>You head into the bar. The rich smell of pine in the air and the warmth of the fire remind you of home, but you're not sure why. You sit down and order a coffee, black as midnight on a moonless night, with a generous amount of scotch. The bartender is friendly enough but his sense of humour is a little off kilter.
    `,
    answers: []
  }
}
