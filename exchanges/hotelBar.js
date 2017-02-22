const hotelBar = require('./hotelBar')
const bed = require('./bed')

module.exports = function ({ character }) {
  return {
    question: `
      <p>You head into the bar.
    `,
    answers: []
  }
}
