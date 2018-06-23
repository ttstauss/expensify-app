import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = ({ expenseCount, expensesTotal, hiddenExpenses }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
        {hiddenExpenses > 0 && <p className="page-header__message">Not showing {hiddenExpenses} expenses</p>}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  const hiddenExpenses = state.expenses.length - visibleExpenses.length
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    hiddenExpenses: hiddenExpenses
  }
}

export default connect(mapStateToProps)(ExpensesSummary)