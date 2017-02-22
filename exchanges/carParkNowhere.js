const bed = require('./bed')

module.exports = function carParkNowhere ({ character }) {
  return {
    question: `
      <p>You remember the person in the mirror and begin to worry. You feel guilty for talking to ${character.associates.barPerson.name} as you step into the car park, into near silence. There's nothing here but the strong winds blowing around the hotel, the leaves rustling on the ground, and the darkness of the still woods. You make eye contact with the strangers who also came to look before stepping back into the hotel.
    `,
    answers: [
      {
        text: 'Go to bed',
        predicate: () => true,
        effect: character => character,
        leadsTo: bed
      },
    ]
  }
}
