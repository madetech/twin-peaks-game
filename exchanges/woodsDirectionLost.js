const incrementAttributeEffect = require('../lib/incrementAttributeEffect')
const theEnd = require('./theEnd')

module.exports = function woodsDirectionLost ({ character }) {
  let possibleQuestions = [
    'Have you been here before?',
    'What was that sound?',
    'You wonder how long you\'ve been out here.',
    'You feel you\'ve definitely gone too far to find your way back.',
    'You lose your bearings as the sound of an owl startles you.'
  ]

  if (character.attributes.fear >= 10) {
    possibleQuestions = ['You died of fear']
  }

  return {
    question: possibleQuestions[Math.floor(Math.random() * possibleQuestions.length)],
    answers: [
      {
        text: 'Go left',
        predicate: () => character.attributes.fear < 10,
        effect: incrementAttributeEffect('fear'),
        leadsTo: woodsDirectionLost
      },
      {
        text: 'Go right',
        predicate: () => character.attributes.fear < 10,
        effect: incrementAttributeEffect('fear'),
        leadsTo: woodsDirectionLost
      },
      {
        text: 'Go straight ahead',
        predicate: () => character.attributes.fear < 10,
        effect: incrementAttributeEffect('fear'),
        leadsTo: woodsDirectionLost
      },
      {
        text: 'Go back',
        predicate: () => character.attributes.fear < 10,
        effect: incrementAttributeEffect('fear'),
        leadsTo: woodsDirectionLost
      },
      {
        text: 'Lie down in the leaves',
        predicate: () => character.attributes.fear < 10,
        effect: incrementAttributeEffect('fear'),
        leadsTo: theEnd
      },
      {
        text: 'Accept fate',
        predicate: () => character.attributes.fear >= 10,
        effect: incrementAttributeEffect('fear'),
        leadsTo: theEnd
      }
    ]
  }
}
