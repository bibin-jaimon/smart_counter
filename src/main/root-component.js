import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import UICounter from '../component/ui-counter';
/**
 * App's Enty point
 * @returns Initial component
 */
const RootComponent = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <UICounter />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default RootComponent;
