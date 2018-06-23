import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import ConfirmRemoveModal from '../components/ConfirmRemoveModal'

export class EditExpensePage extends React.Component {
  state = {
    modalIsOpen: false,
    confirmRemove: false
  }
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }
  openModal = () => {
    this.setState(() => ({ modalIsOpen: true }))
  }
  handleConfirmRemove = () => {
    this.setState(() => ({
      modalIsOpen: false,
      confirmRemove: true
    }))
    this.props.startRemoveExpense({ id: this.props.expense.id })
    this.props.history.push('/')
  }
  handleCancelRemove = () => {
    this.setState(() => ({ modalIsOpen: false }))
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <div className="content-body">
            <ExpenseForm
              expense={this.props.expense}
              onSubmit={this.onSubmit}
            />
            <div>
              <button className="button button--secondary" onClick={this.openModal}>Remove Expense</button>
            </div>
          </div>
        </div>
        <ConfirmRemoveModal
          modalIsOpen={this.state.modalIsOpen}
          handleCancelRemove={this.handleCancelRemove}
          handleConfirmRemove={this.handleConfirmRemove}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)