const filterAnswers = require('../lib/filterAnswers')

module.exports = async function ({ gui, character, exchange }) {
  const question = exchange.question
  const answers = filterAnswers(exchange.answers, character)
  const chosenAnswer = await gui.prompt({ character, question, answers })

  if (chosenAnswer === undefined) {
    await gui.gameOver()
    return { gameOver: true }
  }

  return {
    gui: gui,
    character: chosenAnswer.effect(character),
    exchangeCreator: chosenAnswer.leadsTo
  }
}
