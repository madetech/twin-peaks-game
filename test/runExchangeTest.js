const test = require('ava')
const runExchange = require('../lib/runExchange')
const randomiseCharacter = require('../lib/randomiseCharacter')

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

function createGui () {
  return {
    buffer: [],
    async prompt ({ character, question, answers }) {
      this.buffer.push(question)
      this.buffer.push(answers[0].text)
      return answers[0]
    }
  }
}

test(async t => {
  const gui = createGui()
  const character = randomiseCharacter()
  const exchange = startExchange({ character })

  const answer = await runExchange({ gui, character, exchange })

  t.true(gui.buffer.includes('Test exchange #1'))
  t.true(gui.buffer.includes('Answer'))

  t.is(answer.character, character)
  t.is(answer.exchange, endExchange)
})
