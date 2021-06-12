import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UIButton from './ui-button';

let timer;
let isSinglePress = true;
const decrementerSign = '-';
const incrementerSign = '+';

const UICounter = ({initialValue = 0, step = 1}) => {
  const [count, setCount] = React.useState(initialValue);

  const onPressOut = () => {
    clearInterval(timer);
    isSinglePress = true;
  };

  const onPressOutIncrementer = () => {
    if (isSinglePress) {
      incrementer();
    }
    onPressOut();
  };

  const onPressOutDecrementer = () => {
    if (isSinglePress) {
      decrementer();
    }
    onPressOut();
  };

  const onPressIn = (callback) => {
    timer = setInterval(() => {
      isSinglePress = false;
      callback();
    }, 2000);
  };

  const incrementer = () => {
    setCount((count) => count + step);
  };

  const decrementer = () => {
    setCount((count) => count - step);
  };

  return (
    <View style={styles.container}>
      <UIButton
        text={decrementerSign}
        onPressIn={() => onPressIn(decrementer)}
        onPressOut={onPressOutDecrementer}
      />
      <View style={styles.counterTextContainer}>
        <Text style={styles.counterText}>{count}</Text>
      </View>
      <UIButton
        text={incrementerSign}
        onPressIn={() => onPressIn(incrementer)}
        onPressOut={onPressOutIncrementer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  counterTextContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 200,
    color: 'white',
  },
});

export default UICounter;
