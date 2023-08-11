import React, {useContext, useEffect, useState} from 'react';
import ExpensesOutput from '../../components/ExpensesOutput';
import {ExpensesContext} from '../../store/expense-context';
import {getDateMinusDays} from '../../utils/date';
import {getExpenses} from '../../utils/db';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import ErrorOverlay from '../../components/UI/ErrorOverlay';

const RecentExpenses = () => {
  const {expenses, setExpenses} = useContext(ExpensesContext);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');

  const recentExpenses = expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });

  const getData = async () => {
    setIsloading(true);
    try {
      const resp = await getExpenses();
      setExpenses(resp);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error && !isLoading) {
    return <ErrorOverlay message={error} onConfirm={() => setError('')} />;
  }

  return isLoading ? (
    <LoadingOverlay />
  ) : (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />
  );
};

export default RecentExpenses;
