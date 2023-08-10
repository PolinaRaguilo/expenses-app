import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useLayoutEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import IconButton from '../../components/UI/IconButton';
import {GLOBAL_STYLES} from '../../constant/styles';
import Button from '../../components/UI/Button';
import {ExpensesContext} from '../../store/expense-context';
import ExpenseForm from '../../components/ExpenseForm';
import {getFormattedDate} from '../../utils/date';

const ManageExpenses = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {deleteExpense, addExpense, updateExpense, expenses} =
    useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const selectedExpense = expenses.find(item => item.id === editedExpenseId);

  const [inputValues, setInputValues] = useState({
    amount: {
      value: selectedExpense?.amount?.toString() || '',
      isValid: !!selectedExpense?.amount,
    },
    date: {
      value: selectedExpense?.date
        ? getFormattedDate(selectedExpense?.date)
        : '',
      isValid: !!selectedExpense?.date,
    },
    title: {
      value: selectedExpense?.title || '',
      isValid: !!selectedExpense?.title,
    },
  });

  const deleteHandler = () => {
    deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    const formattedData = {
      amount: +inputValues.amount.value,
      date: new Date(inputValues.date.value),
      title: inputValues.title.value,
    };
    const isAmountValid =
      !isNaN(formattedData.amount) && formattedData.amount > 0;
    const isDateValid = formattedData.date.toString() !== 'Invalid Date';
    const isTitleValid = formattedData.title.trim().length > 0;

    if (!isAmountValid || !isDateValid || !isTitleValid) {
      Alert.alert('Invalid data', 'Check you data format');
      setInputValues(values => {
        return {
          amount: {...values.amount, isValid: isAmountValid},
          date: {...values.date, isValid: isDateValid},
          title: {...values.title, isValid: isTitleValid},
        };
      });
      return;
    }

    if (isEditing) {
      updateExpense(editedExpenseId, formattedData);
    } else {
      addExpense(formattedData);
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
      <ExpenseForm inputValues={inputValues} setInputValues={setInputValues} />
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
