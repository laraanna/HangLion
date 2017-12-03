import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Guess from './components/Guess'

chai.use(chaiEnzyme())

describe('<App />', () => {
  const app = shallow(<App />)


  it('contains Guess', () => {
    expect(app).to.have.descendants(Guess)
  })
})
