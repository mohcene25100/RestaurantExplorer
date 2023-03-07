import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
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
const MyTabs = () => {

  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Restaurants") {
            iconName = "md-restaurant";
          } else if (route.name === "Settings") {
            iconName = "md-settings";
          } else if (route.name === "Map") {
            iconName = "md-map";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Restaurants" component={RestaurantScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
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
          {MyTabs()}
        </NavigationContainer>

      </ThemeProvider>
      <ExpoStatusBar style="dark" />
    </>


  );
}
const styles = StyleSheet.create({
});
