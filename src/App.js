import React, { Component } from 'react'
import Guess from './components/Guess'
import RevealGuess from './components/RevealGuess'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Guess />
        <RevealGuess />
      </div>
    );
  }
}

export default App;
