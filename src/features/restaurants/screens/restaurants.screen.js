import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'

import { RestaurantInfoCard } from '../components/restaurant-info-card.component'

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${StatusBar.currentHeight}px;
`
const SearchContainer = styled(View)`
    padding: 16px;

`
const RestaurantInfoContainer = styled(View)`
    flex: 1;
    background-color: blue;
    padding: 16px;
`
export const RestaurantScreen = () => {
    const [query, setQuery] = useState(null)
    console.log(query)
    return (
        <>
            {/* "SafeAreaView" works with "flex:1" only in IOS 
      so we added marginTop to fix the issue in ANDROID  */}
            <SafeArea>
                <SearchContainer>
                    <Searchbar
                        placeholder='Search...'
                        onChangeText={(query) => { setQuery(query) }}
                        value={query}
                    />
                </SearchContainer>
                <RestaurantInfoContainer>
                    <RestaurantInfoCard restaurant={{}} />
                </RestaurantInfoContainer>
            </SafeArea>

        </>

    )
}
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