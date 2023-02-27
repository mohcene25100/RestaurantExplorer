import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'

import { RestaurantInfoCard } from '../components/restaurant-info-card.component'

export const RestaurantScreen = () => {
    const [query, setQuery] = useState(null)
    console.log(query)
    return (
        <>
            {/* "SafeAreaView" works with "flex:1" only in IOS 
      so we added marginTop to fix the issue in ANDROID  */}
            <SafeAreaView style={styles.container}>
                <View style={styles.search}>
                    <Searchbar
                        placeholder='Search...'
                        onChangeText={(query) => { setQuery(query) }}
                        value={query}
                    />
                </View>
                <View style={styles.list}>
                    <RestaurantInfoCard restaurant={{}} />
                </View>
            </SafeAreaView>

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