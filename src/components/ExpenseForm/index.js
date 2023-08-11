import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../UI/Input';

const ExpenseForm = ({inputValues, setInputValues}) => {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          isValid={inputValues.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: value => {
              setInputValues({
                ...inputValues,
                amount: {...inputValues.amount, value},
              });
            },
            value: inputValues.amount.value,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          isValid={inputValues.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: value =>
              setInputValues({
                ...inputValues,
                date: {...inputValues.date, value},
              }),
            value: inputValues.date.value,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Title"
        isValid={inputValues.title.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: value =>
            setInputValues({
              ...inputValues,
              title: {...inputValues.title, value},
            }),
          value: inputValues.title.value,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 15,
    textAlign: 'center',
  },
});
