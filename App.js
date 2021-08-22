import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from './screens/OnBoarding';

export default function App() {
  return (
    <View style={styles.container}>
      <OnBoarding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
