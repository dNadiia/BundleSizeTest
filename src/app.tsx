import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ComponentWithLodash } from './ComponentWithLodash';

const App = () => (
  <View style={styles.container}>
    <ComponentWithLodash />
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
