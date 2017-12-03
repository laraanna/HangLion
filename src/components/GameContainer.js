import React, { PureComponent } from 'react'
import Guess from './Guess'



class GameContainer extends PureComponent {

  render() {
    return (
      <div className="GameContainer">
        <Guess />
      </div>
    )
  }
}





export default GameContainer
