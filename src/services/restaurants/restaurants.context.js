import React, { useState, useEffect, createContext, useMemo } from 'react'

import { restaurantsRequest, restaurantTransform } from './restaurants.service'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {

    return (
        <RestaurantsContext.Provider value={{
            restaurants: [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]
        }}>
            {children}
        </RestaurantsContext.Provider >
    )
}