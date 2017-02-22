module.exports = function theEnd ({ character }) {
  return {
    question: `
      <p>You wake up sharply.
    `,
    predicate: () => true,
    effect: character => character,
    answers: []
  }
}
