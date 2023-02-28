import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'

import { RestaurantInfoCard } from '../components/restaurant-info-card.component'


// We have a bug here in IOS phones when we write like this 
// margin-top: ${StatusBar.currentHeight}px;

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`

const SearchContainer = styled(View)`
    padding: ${props => props.theme.space[3]};

`

const RestaurantListContainer = styled(View)`
    flex: 1;
    background-color: ${props => props.theme.colors.bg.tertiary};
    padding: ${props => props.theme.space[3]};
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
                <RestaurantListContainer>
                    <RestaurantInfoCard restaurant={{}} />
                </RestaurantListContainer>
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