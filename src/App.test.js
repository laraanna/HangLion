import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Guess from './components/Guess.js'
import WrongCounter from './components/WrongCounter.js'
import RevealGuess from './components/RevealGuess.js'

chai.use(chaiEnzyme())

describe('<App />', () => {
  const app = shallow(<App />)


  it('contains Guess', () => {
    expect(app).to.have.descendants(Guess)
  })

  it('contains RevealGuess', () => {
    expect(app).to.have.descendants(RevealGuess)
  })

  it('contains WrongCounter', () => {
    expect(app).to.have.descendants(WrongCounter)
  })
})
