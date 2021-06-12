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
    borderColor: 'gray',
    backgroundColor: 'black',
    borderWidth: 5,
    borderRadius: 10,
    alignItems: 'center',
    paddingBottom: 20,
  },
  text: {
    fontSize: 150,
    color: 'white',
  },
});

export default UIButton;
