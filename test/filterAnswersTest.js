const test = require('ava')
const filterAnswers = require('../lib/filterAnswers')

test(t => {
  const potentialAnswers = [
    { predicate: () => true },
    { predicate: () => false }
  ]

  const character = {}
  const answers = filterAnswers(potentialAnswers, character)
  t.is(answers.length, 1)
})
