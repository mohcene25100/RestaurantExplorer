import React, { useContext, useState, useEffect } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../../services/locations/location.context'



const SearchContainer = styled(View)`
    padding: ${props => props.theme.space[3]};

`

export const Search = () => {

    const { keyword, search } = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)

    useEffect(() => {
        search(searchKeyword)
    }, [])
    return (
        <SearchContainer>
            <Searchbar
                placeholder='Search for a location...'
                onChangeText={(query) => { setSearchKeyword(query) }}
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
            />
        </SearchContainer>
    )

}