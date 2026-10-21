import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RegisterScreen from './src/screens/RegisterScreen';
import { COLORS } from './src/constants/colors';

export default function App() {
  return (
    <SafeAreaProvider style={styles.provider}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <RegisterScreen />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  provider: {
    flex: 1,
    ...(Platform.OS === 'web' ? { minHeight: '100vh', height: '100vh' } : {}),
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    ...(Platform.OS === 'web' ? { minHeight: '100vh' } : {}),
  },
});
