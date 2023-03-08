import React, { useState, useContext } from 'react'
import { View, FlatList, StyleSheet, StatusBar } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import styled from 'styled-components'



import { SafeArea } from '../../../components/utility/safe-area.component'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import { Search } from '../components/search.component'


const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,

    }
})`
`
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`
const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`


export const RestaurantScreen = () => {
    const { restaurants, isLoading } = useContext(RestaurantsContext)
    return (
        <>
            {/* "SafeAreaView" works with "flex:1" only in IOS 
                so we added marginTop to fix the issue in ANDROID  */}
            <SafeArea>
                {isLoading && (

                    <LoadingContainer>
                        <Loading animating={true} size={50} />
                    </LoadingContainer>

                )}
                <Search />
                <RestaurantList
                    data={restaurants}
                    renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
                    keyExtractor={(item) => item.name}

                />
            </SafeArea>


        </>

    )
}

// WE DON'T NEED IT ANYMORE AFTER REPLACING IT WITH "STYLED-COMPONENTS"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    search: {
        padding: 16,
    },
    list: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 16,
    }

})