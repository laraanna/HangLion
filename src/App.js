import React, { Component } from 'react'
import Guess from './components/Guess'
import RevealGuess from './components/RevealGuess'
import WrongCounter from './components/WrongCounter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left">
          <h1> HAKUNA MATATA </h1>
          <Guess />
          <RevealGuess />
        </div>

        <div className="right">
          <WrongCounter />
        </div>
      </div>
    );
  }
}

export default App;
