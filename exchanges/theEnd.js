module.exports = function ({ character }) {
  return {
    question: 'Game over',
    predicate: () => true,
    effect: character => character,
    answers: []
  }
}
