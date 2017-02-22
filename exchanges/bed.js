module.exports = function ({ character }) {
  let question = `
    You head up to your room and get into bed. As you lie in the dark, you try not to let your mind get the better of you.
  `

  if (character.decisions.foundPlayingCard) {
    question += ' You turn over the playing card on your bedside table, inspecting it closely. You can just about make out an address on the back...'
  }

  return {
    question,
    answers: []
  }
}
