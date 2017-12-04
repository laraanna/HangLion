import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import './RevealGuess.css'

class RevealGuess extends PureComponent {


  render() {
    const { word, correct } = this.props.guesses
    return (
      <div className="RevealGuess">
      {
        word.split('').map((word,index) => {
          if (correct.indexOf(word) !== -1) {
            return <button key={index}> {word} </button>
          }
          return <button key={index}> _ </button>
        })
      }
      </div>
    )
  }
}



const mapStateToProps = ({ guesses}) => ({guesses})

export default connect(mapStateToProps)(RevealGuess);
