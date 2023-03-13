import React, { useContext } from 'react'
import { FavoriteContext } from '../../services/favorites/favorites.context'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'


const FavoriteButton = styled(TouchableOpacity)`

position:absolute;
top:23px;
right:23px;
z-index:1;
`

export const Favorite = ({ restaurant }) => {

    const { favorites, addFavorites, removeFavorites } = useContext(FavoriteContext)

    const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId)
    return (

        <FavoriteButton onPress={() => !isFavorite ? addFavorites(restaurant) : removeFavorites(restaurant)}>
            <AntDesign
                name={isFavorite ? 'heart' : 'hearto'}
                size={24}
                color={isFavorite ? 'red' : 'white'}
            />
        </FavoriteButton>
    )
}