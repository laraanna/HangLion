import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import newGame from '../actions/newGame';
import './WrongCounter.css'

class WrongCounter extends PureComponent {

  newGame = () => {
    const {guesses} = this.props.guesses;
    console.log(this.state)
    this.props.newGame(guesses);
  }

  render() {
    const {counter, word , guesses, correct} = this.props.guesses

    const winner = word.split('').filter(function(word) {
        return !correct.includes(word)
      }).length

    console.log(winner)
    const imageName = `./images/${counter}.png`

    return (
      <div className="WrongCounter">
        <div className="Lion">
          <img src={require(`${imageName}`)} alt="hi"/>
        </div>
        <div className="Message">
          <h2>You have {counter} more lives </h2>
          {(winner !== 0 && counter === 0) ? (<div className="PopUp"><p> You LOST </p> <button onClick={this.newGame}>TRY AGAIN</button></div>) : ""}
          {(winner === 0 && counter !== 0) ? (<div className="PopUp"> <p> You WON</p> <button onClick={this.newGame}>TRY AGAIN</button> </div>) : ""}
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({ guesses}) => ({guesses})
const mapDispatchToProps = {newGame: newGame}

export default connect(mapStateToProps, mapDispatchToProps)(WrongCounter);
