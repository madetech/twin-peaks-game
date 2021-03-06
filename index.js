require('babel-polyfill')

const start = require('./exchanges/start')
const run = require('./lib/run')
const randomiseCharacter = require('./lib/randomiseCharacter')
const createStartExchange = require('./exchanges/start')

const gui = {
  prompt ({ character, question, answers }) {
    console.log(character.name)
    console.log(character.attributes)
    console.log(character.decisions)
    console.log('')

    return new Promise(function (resolve, reject) {
      let html = `<article><div>${question}</div><ul>`

      answers.forEach((answer) =>
        html += `<li><button>${answer.text}</button></li>`
      )

      html += '</ul></article>'

      document.body.innerHTML = html

      if (answers.length === 0) {
        resolve()
        return
      }

      const buttons = document.querySelectorAll('button')
      buttons.forEach((el, i) => {
        el.onclick = () => resolve(answers[i])
      })
    })
  },

  async gameOver() {
    document.body.innerHTML = '<h1>GAME OVER</h1>' + document.body.innerHTML
    document.body.innerHTML += '<button onclick="window.location = window.location">Start over</button>'
  }
}

function main () {
  const character = randomiseCharacter()
  return run({ gui, character, exchangeCreator: createStartExchange })
}

main()
