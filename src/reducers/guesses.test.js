import reducer from './guesses'

describe('guesses reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        guesses: [],
        counter:6,
        word: 'SARABI',
        correct: [],
      }
    ])
  })

})
