import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import GameContainer from './GameContainer'
import Guess from './Guess'



chai.use(chaiEnzyme())

describe('<GameContainer />', () => {
  const container = shallow(<GameContainer  />)

  it('is wrapped in a div with class name "GameContainer"', () => {
    expect(container).to.have.className('GameContainer')
  })

  it('contains  Guess', () => {
    expect(container).to.have.descendants(Guess)
  })



})
