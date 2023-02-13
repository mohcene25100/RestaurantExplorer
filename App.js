import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
} from "react-native";
import { Home } from './src/features/home'

const isAndroid = Platform.OS === 'android'
export default function App() {
  return (
    <>
      {/* "SafeAreaView" works with "flex:1" only in IOS 
      so we added marginTop to fix the issue in ANDROID  */}
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
      <ExpoStatusBar style="dark" />
    </>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
  },
});
