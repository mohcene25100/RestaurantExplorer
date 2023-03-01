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

import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import {
  useFonts as useLato,
  Lato_400Regular
} from '@expo-google-fonts/lato'

export default App = () => {

  // Exporting fonts 
  const [latoLoaded] = useLato({
    Lato_400Regular
  })
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  if (!latoLoaded || !oswaldLoaded)
    return null

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
