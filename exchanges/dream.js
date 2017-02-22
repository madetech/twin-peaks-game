const extend = require('extend')
const theEnd = require('./theEnd')

module.exports = function ({ character }) {
  let question = `
    <style>body { background: #930b04 }</style>
    <p><img src="/images/red.gif" width=500 />
    <p>pat a ekil snur ekal ehT
  `

  return {
    question,
    answers: [
      {
        text: 'Yes',
        predicate: () => true,
        effect: character => extend(character, { decisions: { dreamYes: true } }),
        leadsTo: theEnd,
      },
      {
        text: 'No',
        predicate: () => true,
        effect: character => character,
        leadsTo: theEnd,
      },
    ]
  }
}
