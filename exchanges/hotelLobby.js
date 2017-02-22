const hotelBar = require('./hotelBar')
const bed = require('./bed')

module.exports = function ({ character }) {
  return {
    question: `
      <p>Arriving outside the Great Northern, you admit to yourself the hotel is better than you expected.
      <p>After wandering through the entrance, the lobby continues to interest you. The receptionist looks up and beckons you over.
      <p>"I believe my partner already checked in for us, would I be able to get another room key?" You ask the receptionist.
      <p>Helpfully they ask you to confirm your identity with a credit card before preceeding to give you the room key.
      <p>As you walk towards the stairs, you notice a the bar with a large array of whiskeys sitting atop old wooden shelves.
    `,
    answers: [
      {
        text: 'You fancied a drink anyway, head into the bar',
        predicate: () => true,
        effect: character => character,
        leadsTo: hotelBar,
      },
      {
        text: 'You head to bed',
        predicate: () => true,
        effect: character => character,
        leadsTo: bed,
      },
    ]
  }
}
