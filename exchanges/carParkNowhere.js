const woodsToHotel = require('./woodsToHotel')

module.exports = function carParkNowhere ({ character }) {
  return {
    question: `
      <aside><img src="/images/car-park.gif" /></aside>
      <p>You remember the person in the mirror and begin to worry, was it ${character.associates.partner.name}?
      <p>Struck with a sudden sense of guilt for talking to ${character.associates.barPerson.name} instead of following them. You feel very alone as you step into the car park into near silence.
      <p>There's nothing here but the strong winds blowing around the hotel, the leaves rustling on the ground, and the darkness of the still woods.
      <p>You make eye contact with the strangers who also came to look, which only increases your sense of guilt
    `,
    answers: [
      {
        text: 'Step back into the hotel',
        predicate: () => true,
        effect: character => character,
        leadsTo: woodsToHotel
      },
    ]
  }
}
