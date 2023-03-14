import React from 'react'
import styled from 'styled-components'
import { Text, View, ScrollView } from 'react-native'
import { CompactRestaurantInfo } from '../restaurants/compact-restaurant-info'
import { TouchableOpacity } from 'react-native'


const FavoriteWrapper = styled(View)`
    padding-left:15px;
`
export const FavoritesBar = ({ favorites, onNavigate }) => {
    if (!favorites)
        return null

    return (
        <FavoriteWrapper>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favorites.map((restaurant) => {
                    return (
                        <View key={restaurant.name}>
                            <TouchableOpacity onPress={() => {
                                onNavigate('RestaurantDetails',
                                    { restaurant })
                            }}>
                                <CompactRestaurantInfo key={restaurant.name} restaurant={restaurant} />
                            </TouchableOpacity>
                        </View>
                    )
                })}

            </ScrollView>
        </FavoriteWrapper >

    )
}