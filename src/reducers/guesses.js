import { ADD_GUESS} from '../actions/addGuess'
import { NEW_GAME} from '../actions/newGame'

const words = ['simba', 'nala', 'mufasa', 'pumbaa', 'sarabi', 'rafiki', 'scar'];

const randomWord = words[Math.floor(Math.random() * words.length)];


const initialState = {
  guesses: [],
  counter:6,
  word: randomWord.toUpperCase(),
  correct: [],
};


export default (state = initialState, { type, payload } = {}) => {

  switch(type) {
    case ADD_GUESS :

      let guessLetter = payload;

      if (state.correct.indexOf(guessLetter) !== -1 || state.guesses.indexOf(guessLetter) !== -1) {
        return {...state}
      }
      else if (state.word.indexOf(guessLetter) === -1) {
        return {...state, counter: state.counter - 1, guesses: state.guesses.concat(payload) }
      }
      else  {
        return {...state, guesses: state.guesses.concat(payload), correct: state.correct.concat(payload) }
      }
    case NEW_GAME :
      return initialState


     default :
       return state
    }
}
