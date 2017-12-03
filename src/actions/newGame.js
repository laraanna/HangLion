export const NEW_GAME = 'NEW_GAME'

export default (guesses) => ({
  type: NEW_GAME,
  payload: guesses
})
