import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({iconName, size, color, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => (pressed ? styles.pressed : null)}>
      <View style={styles.buttonContainer}>
        <Icon name={iconName} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
