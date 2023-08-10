import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GLOBAL_STYLES} from '../../constant/styles';

const ExpensesSummary = ({expenses, periodName}) => {
  const sumExpenses = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${sumExpenses.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    backgroundColor: GLOBAL_STYLES.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: GLOBAL_STYLES.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GLOBAL_STYLES.colors.primary500,
  },
});

export default ExpensesSummary;
