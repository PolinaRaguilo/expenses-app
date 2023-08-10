import React, {createContext, useReducer} from 'react';

const INITIAL_DATA = [
  {
    id: 'e1',
    title: 'A pair of shoes',
    amount: 58.88,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    title: 'Bananas',
    amount: 2.88,
    date: new Date('2021-12-23'),
  },
  {
    id: 'e3',
    title: 'A book',
    amount: 10,
    date: new Date('2023-08-09'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({title, amount, date}) => {},
  deleteExpense: id => {},
  updateExpense: (id, {title, amount, date}) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id}, ...state];
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
  const [expensesState, dispatch] = useReducer(expensesReducer, INITIAL_DATA);

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
      }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpenseContextProvider;
