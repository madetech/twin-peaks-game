exports.createGui = function createGui () {
  return {
    buffer: [],

    async prompt ({ character, question, answers }) {
      this.buffer.push(question)
      answers.forEach(answer => this.buffer.push(answer.text))
      return answers[0]
    },

    async gameOver() {
      this.buffer.push('Done')
    }
  }
}
