const theEnd = require('./theEnd')
const woods = require('./woods')
const diner = require('./diner')

module.exports = function ({ character }) {
  let halfAttribute = 'other'

  if (character.attributes.lowSelfEsteem > 3) {
    halfAttribute = 'better'
  }

  let nextSteps = 'You see a Diner nearby that looks busy enough to have some answers within.'

  if (character.attributes.naivety > 5) {
    nextSteps = 'You see a Diner nearby that looks full of lovely people who will glady help you find the hotel.'
  } else if (character.attributes.lowSelfEsteem > 5) {
    nextSteps = 'You see a Diner nearby. You figure your only choice is to head inside and ask someone where the hotel is.'
  }

  const question = `
    <h1>Twin Peaks</h1>
    <aside><img src="/images/trees.gif" /></aside>
    <p>Finally, you think to yourself.
    <p>The rain that slowed your journey is still pouring heavily but at least you will soon see your partner, ${character.associates.partner.name}.
    <p>You realise you have never been to Twin Peaks before, and wonder where you can find the hotel your ${halfAttribute} half is staying at.
    <p>${nextSteps}
  `

  return {
    question,
    answers: [
      {
        text: 'Park the car, and enter the diner',
        predicate: () => true,
        effect: character => character,
        leadsTo: diner
      }
    ]
  }
}
