import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import './RevealGuess.css'

class RevealGuess extends PureComponent {


  render() {
    const { word, correct } = this.props.guesses
    return (
      <div className="RevealGuess">
      {
        word.split('').map(word => {
          if (correct.indexOf(word) !== -1) {
            return <button > {word} </button>
          }
          return <button> _ </button>
        })
      }
      </div>
    )
  }
}



const mapStateToProps = ({ guesses}) => ({guesses})

export default connect(mapStateToProps)(RevealGuess);
