import React, { PureComponent } from 'react'
import {ALPHABET} from '../constants';


class Guess extends PureComponent {
  render() {

    return (
      <div className="Guess">
        {ALPHABET.map( letter =>
          <button  className="Keyboard"key={letter} onClick={() => this.addGuess(letter)} >
            {letter.toUpperCase()}
          </button> )}
      </div>
    )
  }
}




export default Guess
