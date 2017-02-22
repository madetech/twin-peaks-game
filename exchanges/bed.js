const dream = require('./dream')

module.exports = function ({ character }) {
  let question = `
    <aside><img src="/images/bed.gif" /></aside>
    <p>You head up to your room and get into bed. As you lie in the dark, you try not to let your mind get the better of you.
  `

  if (character.decisions.foundPlayingCard) {
    question += `
      <p>You turn over the playing card on your bedside table, inspecting it closely. You can just about make out an address on the back...
    `
  }

  return {
    question,
    answers: [
      {
        text: 'Close your eyes',
        predicate: () => true,
        effect: character => character,
        leadsTo: dream,
      },
    ]
  }
}
