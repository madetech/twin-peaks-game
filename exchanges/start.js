import theEnd from './theEnd'

module.exports = function ({ character }) {
  return {
    question: 'Welcome to Twin Peaks',
    answers: [
      {
        text: 'Hey there',
        predicate: () => true,
        leadsTo: theEnd
      },
      {
        text: '[Say nothing]',
        predicate: () => true,
        leadsTo: theEnd
      }
    ]
  }
}
