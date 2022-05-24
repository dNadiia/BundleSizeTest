import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import get from 'lodash/get';

const document = {
  type: 'passport',
  series: 'AB',
  number: 123,
  pages: {
    front: { id: '111-222' },
    back: { id: '333-444' },
  },
};

export const ComponentWithLodash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {get(document, ['pages', 'back', 'id'], 'not exist')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#dedede',
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
});
