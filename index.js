require('babel-polyfill')

const start = require('./exchanges/start')
const run = require('./lib/run')
const randomiseCharacter = require('./lib/randomiseCharacter')
const createStartExchange = require('./exchanges/start')

const gui = {
  prompt ({ character, question, answers }) {
    return new Promise(function (resolve, reject) {
      let html = `<article><h2>${question}</h2><ul>`

      answers.forEach((answer) =>
        html += `<li><button>${answer.text}</button></li>`
      )

      html += '</ul></article>'

      document.body.innerHTML = html

      const buttons = document.querySelectorAll('button')
      buttons.forEach((el, i) => {
        el.onclick = () => resolve(answers[i])
      })
    })
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
