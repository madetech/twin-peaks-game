const faker = require('faker')

function randomAttributeStat() {
  return Math.floor(Math.random() * 10)
}

module.exports = function () {
  return {
    name: faker.name.firstName(),
    attributes: {
      naivety: randomAttributeStat(),
      lowSelfEsteem: randomAttributeStat(),
      fear: randomAttributeStat(),
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
