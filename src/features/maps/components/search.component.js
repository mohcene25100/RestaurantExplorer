import React, { useContext, useState, useEffect } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../../services/locations/location.context'



const SearchContainer = styled(View)`
    padding: ${props => props.theme.space[3]};
    position:absolute;
    z-index:999;
    top:40px;
    width:100%;

`

export const Search = () => {

    const { keyword, search } = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)

    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])

    return (
        <SearchContainer>
            <Searchbar
                icon='map'
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