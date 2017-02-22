const faker = require('faker')

module.exports = function () {
  return {
    name: faker.name.firstName(),
    attributes: {
      naivety: 10,
      charisma: 10,
      fear: 10,
    },
    associates: {
      partner: {
        name: faker.name.firstName()
      },
      bartender: {
        name: faker.name.firstName()
      },
      barPerson: {
        name: faker.name.firstName()
      }
    },
    decisions: {
      saidHello: false,
      foundPlayingCard: false,
      dreamYes: false
    }
  }
}
