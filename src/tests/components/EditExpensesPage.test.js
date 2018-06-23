import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
  startEditExpense = jest.fn()
  startRemoveExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenses[0]}
    />)
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle startEditExpense (onSubmit)', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
  expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should handle openModal', () => {
  const modalIsOpen = true
  wrapper.find('button').simulate('click')
  expect(wrapper.state('modalIsOpen')).toBe(modalIsOpen)
})

test('should close modal on handleCancelRemove', () => {
  const modalIsOpen = false
  wrapper.instance().handleCancelRemove()
  expect(wrapper.state('modalIsOpen')).toBe(modalIsOpen)
})

test('should handle startRemoveExpense (onRemove)', () => {
  const modalIsOpen = false
  const confirmRemove = true
  wrapper.instance().handleConfirmRemove()
  expect(wrapper.state('modalIsOpen')).toBe(modalIsOpen)
  expect(wrapper.state('confirmRemove')).toBe(confirmRemove)
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id })
  expect(history.push).toHaveBeenLastCalledWith('/')
})