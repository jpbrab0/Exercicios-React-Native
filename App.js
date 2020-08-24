import React from 'react';
import { StyleSheet,SafeAreaView, View } from 'react-native';
import Aleatorio from './components/Aleatorio';
import Contador from './components/Contador';

export default function App() {
  return (
    <View style={styles.container}>
      <Contador/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
