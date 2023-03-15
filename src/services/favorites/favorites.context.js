import React, { useState, createContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const FavoriteContext = createContext()

export const FavoriteContextProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([])

    const saveFavorite = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@favorite', jsonValue)
        } catch (e) {
            console.log('save error', e)
        }
    }

    const loadFavorite = async () => {
        try {
            const value = await AsyncStorage.getItem('@favorite')
            if (value != null) {
                setFavorites(JSON.parse(value))
            }
        }
        catch (e) {
            console.log('load error ', e)
        }

    }

    useEffect(() => {
        loadFavorite()
    }, [])
    useEffect(() => {
        saveFavorite(favorites)
    }, [favorites])

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