import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const UIButton = (props) => {
  const {onPressIn, onPressOut, text} = props;

  return (
    <TouchableOpacity onPressIn={onPressIn} onPressOut={onPressOut}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'gray',
    backgroundColor: 'red',
    borderBottomWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 170,
    color: 'white',
  },
});

export default UIButton;
