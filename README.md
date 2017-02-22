# Twin Peaks

Weird and moody exploration of a town. Branching narratives guide you around a murky and confusing world.

## Mechanics

- Random character generation at the start
- Branching narrative
- Character develop based on answers
- Decisions stay with you
- Narrative adapts to your character attributes
- [stretch] Random backstory

## Character

``` js
{
  character: {
    name: "",
    attributes: {
      naivety: 10,
      charisma: 10,
      fear: 10,
    },
    decisions: {
      killedCharacter: true
    }
  }
}
```

## Scene

``` js
welcomeExchange = {
  question: 'How do you want to play?',
  answers: [strongAnswer]
}

strongAnswer = {
  text: 'do this thing',
  predicate: character => character.attributes.strength > 6,
  effect: composeEffects([
    incrementAttributeEffect('strength', 2),
    makeDecision('killedCharacter'),
  ]),
  leadsTo: welcomeExchange
}
```

## Build scene

``` js
buildScene = ({ gui, character, exchange }) => {
  const question = exchange.question
  const answers = filterAnswers(exchange.answers, character)
  const chosenAnswer = await gui.display({ character, question, answers })
  buildScene({
    gui,
    character: chosenAnswer.effect(character),
    exchange: chosenAnswer.leadsTo
  })
}
```
