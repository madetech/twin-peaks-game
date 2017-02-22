module.exports = function woodsDirectionLost ({ character }) {
  const possibleQuestions = [
    'Have you been here before?',
    'What was that sound?',
    'You wonder how long you\'ve been out here.',
    'You feel you\'ve definitely gone too far to find your way back.',
    'You lose your bearings as the sound of an owl startles you.'
  ]

  return {
    question: possibleQuestions[Math.floor(Math.random() * possibleQuestions.length)],
    answers: [
      {
        text: 'Go left',
        predicate: () => true,
        effect: character => character,
        leadsTo: woodsDirectionLost
      },
      {
        text: 'Go right',
        predicate: () => true,
        effect: character => character,
        leadsTo: woodsDirectionLost
      },
      {
        text: 'Go straight ahead',
        predicate: () => true,
        effect: character => character,
        leadsTo: woodsDirectionLost
      },
      {
        text: 'Go back',
        predicate: () => true,
        effect: character => character,
        leadsTo: woodsDirectionLost
      }
    ]
  }
}
