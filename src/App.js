import React, { Component } from 'react'
import Guess from './components/Guess'
import RevealGuess from './components/RevealGuess'
import WrongCounter from './components/WrongCounter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Guess />
        <RevealGuess />
        <WrongCounter />
      </div>
    );
  }
}

export default App;
