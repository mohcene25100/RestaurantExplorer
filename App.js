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
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/locations/location.context";
import { Navigation } from './src/infrastructure/navigation'
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

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings'
}

const createScreenOptions = ({ route }) => ({

  tabBarIcon: ({ color, size }) => {
    let iconName = TAB_ICON[route.name];
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
})



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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="dark" />
    </>


  );
}
const styles = StyleSheet.create({
});
