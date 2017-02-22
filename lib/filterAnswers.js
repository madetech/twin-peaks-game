module.exports = function filterAnswers (answers, character) {
  return answers.filter(answer => answer.predicate(character))
}
