require('babel-polyfill')

const start = require('./exchanges/start')
const run = require('./lib/run')
const randomiseCharacter = require('./lib/randomiseCharacter')
const createStartExchange = require('./exchanges/start')

const gui = {
  async prompt ({ character, question, answers }) {
    console.log(question)
    answers.forEach(answer => console.log(answer.text))
    return answers[0]
  },

  async gameOver() {
    console.log('Done')
  }
}

function main () {
  const character = randomiseCharacter()
  return run({ gui, character, exchangeCreator: createStartExchange })
}

main()
