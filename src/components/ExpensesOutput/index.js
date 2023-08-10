import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ExpensesSummary from '../ExpensesSummary';
import ExpensesList from '../ExpensesList';
import {GLOBAL_STYLES} from '../../constant/styles';

const ExpensesOutput = ({expenses, expensesPeriod}) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {expenses.length ? (
        <ExpensesList expenses={expenses} />
      ) : (
        <Text style={styles.infoText}>No Expenses</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GLOBAL_STYLES.colors.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});

export default ExpensesOutput;
