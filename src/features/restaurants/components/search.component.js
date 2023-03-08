import React, { useContext } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../../services/locations/location.context'



const SearchContainer = styled(View)`
    padding: ${props => props.theme.space[3]};

`

export const Search = () => {

    const locationContext = useContext(LocationContext)
    console.log(locationContext)
    return (
        <SearchContainer>
            <Searchbar
                placeholder='Search...'
            // onChangeText={(query) => { setQuery(query) }}
            // value={query}
            />
        </SearchContainer>
    )

}