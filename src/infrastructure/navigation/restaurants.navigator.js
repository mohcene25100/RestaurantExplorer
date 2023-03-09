import React from 'react'
import { Text } from 'react-native'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { RestaurantScreen } from '../../features/restaurants/screens/restaurants.screen'

const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = () => {

    return (
        <RestaurantStack.Navigator
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS,
                headerShown: false

            }}
        >

            <RestaurantStack.Screen name='Restaurant' component={RestaurantScreen} />
            <RestaurantStack.Screen name='RestaurantDetails' component={() => <Text>Hello Details</Text>} />

        </RestaurantStack.Navigator>
    )

}