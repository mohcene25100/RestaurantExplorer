import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { ThemeProvider } from "styled-components";
import { theme } from './src/infrastructure/theme'
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen'
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="dark" />
    </>


  );
}
const styles = StyleSheet.create({
});
