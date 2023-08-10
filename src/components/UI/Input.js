import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {GLOBAL_STYLES} from '../../constant/styles';

const Input = ({label, style, isValid, textInputConfig}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          textInputConfig.multiline && styles.multilineInput,
          !isValid && styles.error,
        ]}
        {...textInputConfig}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GLOBAL_STYLES.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GLOBAL_STYLES.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GLOBAL_STYLES.colors.primary700,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  error: {
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: GLOBAL_STYLES.colors.error50,
  },
});
