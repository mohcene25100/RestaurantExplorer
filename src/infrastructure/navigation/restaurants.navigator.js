import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { RestaurantScreen } from '../../features/restaurants/screens/restaurants.screen'
import { RestaurantDetailsScreen } from '../../features/restaurants/screens/restaurants.details.screen'

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
            <RestaurantStack.Screen name='RestaurantDetails' component={RestaurantDetailsScreen} />

        </RestaurantStack.Navigator>
    )

}