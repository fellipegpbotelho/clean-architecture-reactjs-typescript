export class UnexpectedError extends Error {
  constructor () {
    super('Something wrong')
    this.name = 'UnexpectedError'
  }
}
