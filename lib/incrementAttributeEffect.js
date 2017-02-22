module.exports = function incrementAttributeEffect (attribute) {
  return function (character) {
    character.attributes[attribute] += 1
    return character
  }
}
