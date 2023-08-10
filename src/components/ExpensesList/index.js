import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ExpenseItem from '../ExpenseItem';

const ExpensesList = ({expenses}) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ExpenseItem {...item} />}
    />
  );
};

export default ExpensesList;
