import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GLOBAL_STYLES} from '../../constant/styles';
import {getFormattedDate} from '../../utils/date';
import {useNavigation} from '@react-navigation/native';

const ExpenseItem = ({id, title, date, amount}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('ManageExpense', {
      expenseId: id,
    });
  };

  return (
    <Pressable
      style={({pressed}) => (pressed ? styles.pressed : null)}
      onPress={onPress}>
      <View style={styles.itemWrapper}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{title}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default ExpenseItem;

const styles = StyleSheet.create({
  itemWrapper: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GLOBAL_STYLES.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GLOBAL_STYLES.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadq: 0.4,
  },
  pressed: {
    opacity: 0.75,
  },
  textBase: {
    color: GLOBAL_STYLES.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  amountText: {
    color: GLOBAL_STYLES.colors.primary500,
    fontWeight: 'bold',
  },
});
