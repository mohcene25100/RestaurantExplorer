import React, { useState, createContext } from 'react'

export const FavoriteContext = createContext()

export const FavoriteContextProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([])

    const add = (restaurant) => {
        setFavorites([...favorites, restaurant])
    }
    const remove = (restaurant) => {
        const newFavorites = favorites.filter((x) => x.placeId !== restaurant.placeId)
        setFavorites(newFavorites)
    }

    return (
        <FavoriteContext.Provider
            value={{
                favorites,
                addFavorites: add,
                removeFavorites: remove
            }}

        >
            {children}
        </FavoriteContext.Provider>
    )
}