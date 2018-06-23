import React from 'react'
import { shallow } from 'enzyme'
import ConfirmRemoveModal from '../../components/ConfirmRemoveModal'

test('should render ConfirmRemoveModal correctly', () => {
  const wrapper = shallow(<ConfirmRemoveModal />)
  expect(wrapper).toMatchSnapshot()
})