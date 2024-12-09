/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  NativeModules,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface BatteryModuleType {
  getBatteryLevel(): Promise<number>;
}

function App(): React.JSX.Element {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const {BatteryModule} = NativeModules;

  (BatteryModule as BatteryModuleType)
    .getBatteryLevel()
    .then(level => {
      setBatteryLevel(level);
    })
    .catch(error => {
      console.error(error);
    });
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Este es el nivel de Bateria:</Text>
        <Text style={styles.batteryText}>{`${batteryLevel}%`}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  batteryText: {
    fontSize: 50,
    fontWeight: '600',
    color: 'black',
  },
});

export default App;
