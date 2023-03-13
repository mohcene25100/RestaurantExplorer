import React, { useContext } from 'react'
import { FavoriteContext } from '../../services/favorites/favorites.context'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'


const FavoriteButton = styled(TouchableOpacity)`

background-color:transparent;
border-color:#20232a;
position:absolute;
top:10px;
right:10px;
z-index:9;
`

export const Favorite = () => {

    const { favorite, addFavorite, removeFavorite } = useContext(FavoriteContext)

    return (

        <FavoriteButton>
            <AntDesign
                name='heart'
                size={24}
                color='red'
            />
        </FavoriteButton>
    )
}