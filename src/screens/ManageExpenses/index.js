import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import IconButton from '../../components/UI/IconButton';
import {GLOBAL_STYLES} from '../../constant/styles';
import Button from '../../components/UI/Button';
import {ExpensesContext} from '../../store/expense-context';

const ManageExpenses = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {deleteExpense, addExpense, updateExpense} =
    useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const deleteHandler = () => {
    deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      updateExpense(editedExpenseId, {
        title: 'upd',
        amount: 19,
        date: new Date('2023-08-01'),
      });
    } else {
      addExpense({
        title: 'new',
        amount: 12,
        date: new Date('2023-08-03'),
      });
    }
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsWrapper}>
        <Button style={styles.button} variant="link" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            iconName="trash"
            color={GLOBAL_STYLES.colors.error500}
            size={36}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GLOBAL_STYLES.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GLOBAL_STYLES.colors.primary200,
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
