const theEnd = require('./theEnd')
const extend = require('extend')

module.exports = function ({ character }) {
  return {
    question: 'Welcome to Twin Peaks',
    answers: [
      {
        text: 'Hey there',
        predicate: () => true,
        effect: character => extend(character, { decisions: { saidHello: true } }),
        leadsTo: theEnd
      },
      {
        text: '[Say nothing]',
        predicate: () => true,
        effect: character => character,
        leadsTo: theEnd
      }
    ]
  }
}
