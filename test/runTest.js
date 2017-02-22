const test = require('ava')
const run = require('../lib/run')
const randomiseCharacter = require('../lib/randomiseCharacter')
const { createGui } = require('./fakes')

const startExchange = function () {
  return {
    question: 'Test exchange #1',
    answers: [{
      text: 'Answer',
      predicate: () => true,
      effect: character => character,
      leadsTo: endExchange
    }]
  }
}

const endExchange = function () {
  return {
    question: 'Game over',
    answers: []
  }
}

test(async t => {
  const gui = createGui()
  const character = randomiseCharacter()

  await run({ gui, character, exchangeCreator: startExchange })

  t.true(gui.buffer.includes('Test exchange #1'))
  t.true(gui.buffer.includes('Answer'))
  t.true(gui.buffer.includes('Game over'))
})
