import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper'

export const Home = () => {
    const [query, setQuery] = useState(null)
    console.log(query)
    return (
        <>
            <View style={styles.search}>
                <Searchbar
                    placeholder='Search...'
                    onChangeText={(query) => { setQuery(query) }}
                    value={query}
                />
            </View>
            <View style={styles.list}>
                <Text>{query}</Text>
            </View>
        </>

    )
}
const styles = StyleSheet.create({
    search: {
        backgroundColor: 'green',
        padding: 16,
    },
    list: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 16,
    }

})