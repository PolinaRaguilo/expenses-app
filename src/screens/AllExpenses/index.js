import React, {useContext} from 'react';
import ExpensesOutput from '../../components/ExpensesOutput';
import {ExpensesContext} from '../../store/expense-context';

const AllExpenses = () => {
  const {expenses} = useContext(ExpensesContext);
  return <ExpensesOutput expenses={expenses} expensesPeriod="Total" />;
};

export default AllExpenses;
