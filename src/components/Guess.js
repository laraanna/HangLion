import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import addGuess from '../actions/addGuess';
import {ALPHABET} from '../constants';


class Guess extends PureComponent {

  addGuess(letter) {
    this.props.addGuess(letter.toUpperCase());
  }

  render() {
    const { guesses } = this.props
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




const mapStateToProps = ({ guesses }) => ({ guesses })
const mapDispatchToProps = {addGuess: addGuess }

export default connect(mapStateToProps,mapDispatchToProps)(Guess)
