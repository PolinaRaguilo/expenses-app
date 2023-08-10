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
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: value =>
              setInputValues({...inputValues, amount: value}),
            value: inputValues.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: value =>
              setInputValues({...inputValues, date: value}),
            value: inputValues.date,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Title"
        textInputConfig={{
          multiline: true,
          onChangeText: value => setInputValues({...inputValues, title: value}),
          value: inputValues.title,
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
