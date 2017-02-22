const filterAnswers = require('../lib/filterAnswers')

module.exports = async function ({ gui, character, exchange }) {
  const question = exchange.question
  const answers = filterAnswers(exchange.answers, character)
  const chosenAnswer = await gui.prompt({ character, question, answers })

  return {
    gui: gui,
    character: chosenAnswer.effect(character),
    exchange: chosenAnswer.leadsTo
  }
}
