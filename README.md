# Twin Peaks

Weird and moody exploration of a town. Branching narratives guide you around a murky and confusing world.

## Mechanics

- Branching narrative
- Character develop based on answers
- Decisions stay with you
- Narrative adapts to your character attributes
- [stretch] Random character generation at the start
- [stretch] Random backstory

## Narrative

- Protagonist arrives in Twin Peaks to meet their partner
- Protagonist unsure of the hotel location wanders into the diner to ask
- Protagonist has a really odd conversation with someone

- Protagonist arrives at the Great Northern, get an additional key for the room
   - Go to the bar await partner [Bar Exchange]
   - Go to bed to await partner [Bed]

[Bar Exchange]

- Protagonist meets attractive person at the bar and begins a conversation, they notice someone familiar through mirror behind the bar
  - Go follow them [Car park]
  - Go to bed [Bed]
  - Continue conversation [Bar Exchange 2]

[Car park]

- Protagonist goes to chase the person, they think it is their partner, chasing them towards the woods
  - Continue to follow into the woods [Woods]
  - Go back to bed [Bed]

[Woods]

- Woods get very dark, very quickly and can't see the person they are chasing any more
  - Left [Woods Direction 1]
  - Right/Straightahead [Woods Direction 2]
  - Go back to bed [Bed]

[Woods Direction 1]

- Becoming more and more disorientated as they walk deeper into the woods
  - Left/Right [Woods Direction End]
  - Straightahead [Woods Direction Bonus]
  - Go back to bed [Bed]

[Woods Direction 2]

- Becoming more and more disorientated as they walk deeper into the woods
  - Left/Right/Straightahead [Woods Direction End]
  - Go back to bed [Bed]

[Woods Direction End]

- Becoming more and more disorientated as they walk deeper into the woods
  - Left/Right/Straightahead [Woods Direction Lost]
  - Go back to bed [Bed]

[Woods Direction Lost]

- Infinite loop of Woods Direction Lost
  - Left/Right/Straightahead [Woods Direction Lost]

[Woods Direction Bonus]
- Played finds a playing card on the ground. They look around and pick it up.
  - Left/Right/Straightahead [Woods Direction Lost]
  - Go back to bed [Bed]

[Bar exchange 2]

- Continue talking. Protagonist hears a scream
  - Run outside to car park [Car park nowhere]

[Car park nowhere]

- Protagonist has no idea where the sound comes from, they reflect on the fact the person in the mirror looked like their partner
  - Go to bed [Bed]

[Bed]

- Protagonist goes to sleep, then wakes sitting in an armchair
  - Says yes
  - Says no


## Character

``` js
{
  character: {
    name: "",
    attributes: {
      naivety: 10,
      charisma: 10,
      fear: 10,
      orienteering: 10
    },
    decisions: {
      killedCharacter: true
    }
  }
}
```

## Scene

``` js
function welcomeExchange () {
  return {
    question: 'How do you want to play?',
    answers: [strongAnswer]
  }
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
