const runExchange = require('../lib/runExchange')

const gameOver = exchange => exchange.answers.length === 0

module.exports = async function run ({ gui, character, exchangeCreator }) {
  const exchange = exchangeCreator({ character })
  const next = await runExchange({ gui, character, exchange })

  if (!next.gameOver) {
    await run(next)
  }
}
