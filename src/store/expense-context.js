import React, {createContext, useReducer} from 'react';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({title, amount, date}) => {},
  deleteExpense: id => {},
  updateExpense: (id, {title, amount, date}) => {},
  setExpenses: expenses => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;
    case 'ADD':
      return [action.payload, ...state];
    case 'UPDATE':
      return state.map(item => {
        return item.id === action.payload.id
          ? {...item, ...action.payload.data}
          : item;
      });
    case 'DELETE':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

const ExpenseContextProvider = ({children}) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const setExpenses = expenses => {
    dispatch({type: 'SET', payload: expenses});
  };

  const addExpense = expenseData => {
    dispatch({type: 'ADD', payload: expenseData});
  };

  const deleteExpense = id => {
    dispatch({type: 'DELETE', payload: {id}});
  };

  const updateExpense = (id, expenseData) => {
    dispatch({type: 'UPDATE', payload: {id, data: expenseData}});
  };
  return (
    <ExpensesContext.Provider
      value={{
        expenses: expensesState,
        addExpense,
        deleteExpense,
        updateExpense,
        setExpenses,
      }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpenseContextProvider;
