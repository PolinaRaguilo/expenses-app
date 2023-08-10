import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GLOBAL_STYLES} from '../../constant/styles';

const Button = ({children, onPress, variant, style}) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => (pressed ? styles.pressed : null)}>
        <View style={[styles.button, variant === 'link' && styles.link]}>
          <Text
            style={[styles.buttonText, variant === 'link' && styles.linkText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GLOBAL_STYLES.colors.primary500,
  },
  link: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  linkText: {
    color: GLOBAL_STYLES.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GLOBAL_STYLES.colors.primary100,
    borderRadius: 4,
  },
});
