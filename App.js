import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
} from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ThemeProvider } from "styled-components";
import { theme } from './src/infrastructure/theme'
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen'
import { SafeArea } from "./src/components/utility/safe-area.component";

import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import {
  useFonts as useLato,
  Lato_400Regular
} from '@expo-google-fonts/lato'


const SettingsScreen = () => <SafeArea><Text>Settings!</Text></SafeArea>
const MapScreen = () => <SafeArea><Text>Map!</Text></SafeArea>

const Tab = createBottomTabNavigator()
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Restaurants " component={RestaurantScreen} />
      <Tab.Screen name="Map " component={MapScreen} />
      <Tab.Screen name="Settings " component={SettingsScreen} />
    </Tab.Navigator>
  )
}

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
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="dark" />
    </>


  );
}
const styles = StyleSheet.create({
});
