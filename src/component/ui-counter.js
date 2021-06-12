import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UIButton from './ui-button';

let timer;
let isSinglePress = true;
const decrementerSign = '-';
const incrementerSign = '+';

const UICounter = ({initialValue = 0, step = 1}) => {
  const [count, setCount] = React.useState(initialValue);

  //Function to clear the timer instance
  const onPressOut = () => {
    clearInterval(timer);
    isSinglePress = true;
  };

  //Callback when increment button press out
  const onPressOutIncrementer = () => {
    if (isSinglePress) {
      incrementer();
    }
    onPressOut();
  };

  //Callback when decrement button press out
  const onPressOutDecrementer = () => {
    if (isSinglePress) {
      decrementer();
    }
    onPressOut();
  };

  //Start a timer when press the counter update buttons
  const onPressIn = (callback) => {
    timer = setInterval(() => {
      isSinglePress = false;
      callback();
    }, 2000);
  };

  //Increment counter value
  const incrementer = () => {
    setCount((count) => count + step);
  };

  //Decrement counter value
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
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  counterTextContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 250,
    color: 'white',
  },
});

export default UICounter;
