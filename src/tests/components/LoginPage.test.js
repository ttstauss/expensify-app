import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

test('should render LoginPage correclty', () => {
  const wrapper = shallow(<LoginPage />)
  expect(wrapper).toMatchSnapshot()
})

test('should call startGoogleLogin on button click', () => {
  const startGoogleLogin = jest.fn()
  const wrapper = shallow(<LoginPage startGoogleLogin={startGoogleLogin} />)
  wrapper.find('.button--google').simulate('click')
  expect(startGoogleLogin).toHaveBeenCalled()
})

test('should call startFacebookLogin on button click', () => {
  const startFacebookLogin = jest.fn()
  const wrapper = shallow(<LoginPage startFacebookLogin={startFacebookLogin} />)
  wrapper.find('.button--facebook').simulate('click')
  expect(startFacebookLogin).toHaveBeenCalled()
})