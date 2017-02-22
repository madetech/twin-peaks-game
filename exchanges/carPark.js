const woods = require('./woods')
const bed = require('./bed')

module.exports = function carPark ({ character }) {
  return {
    question: `
      <p>By the time you've gotten to the car park outside, person you recognised in the mirror has already crossed it. You can see them in the distance, stepping into the woods. It has to be ${character.associates.partner.name}, they must have arrived before you. But what are they doing out here? You hesitate, not sure what to do.
    `,
    answers: [
      {
        text: 'Follow them into the woods',
        predicate: () => true,
        effect: character => character,
        leadsTo: woods
      },
      {
        text: 'Go to bed',
        predicate: () => true,
        effect: character => character,
        leadsTo: bed
      }
    ]
  }
}
