import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import Guess from './Guess'



chai.use(chaiEnzyme())

describe('<Guess />', () => {
  const container = shallow(<Guess  />)

  it('is wrapped in a div with class name "Guess"', () => {
    expect(container).to.have.className('Guess')
  })



})
