const test = require('ava')
const runExchange = require('../lib/runExchange')
const randomiseCharacter = require('../lib/randomiseCharacter')
const { createGui } = require('./fakes')

test(async t => {
  const gui = createGui()
  const character = randomiseCharacter()
  const exchange = startExchange({ character })

  const answer = await runExchange({ gui, character, exchange })

  t.true(gui.buffer.includes('Test exchange #1'))
  t.true(gui.buffer.includes('Answer'))

  t.is(answer.gui, gui)
  t.is(answer.character, character)
  t.is(answer.exchangeCreator, endExchange)
})

test('Game over', async t => {
  const gui = createGui()
  const character = randomiseCharacter()
  const exchange = endExchange({ character })
  const answer = await runExchange({ gui, character, exchange })

  t.true(answer.gameOver)
  t.true(gui.buffer.includes('Done'))
})

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
