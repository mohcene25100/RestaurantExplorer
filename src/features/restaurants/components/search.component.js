import React, { useContext, useState, useEffect } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../../services/locations/location.context'



const SearchContainer = styled(View)`
    padding: ${props => props.theme.space[3]};

`

export const Search = ({ isFavoritesToggled, onFavoritesToggle }) => {

    const { keyword, search } = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)
    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])


    return (
        <SearchContainer>
            <Searchbar
                icon={isFavoritesToggled ? 'heart' : 'heart-outline'}
                onIconPress={onFavoritesToggle}
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