import MapView from "react-native-maps"
import styled, { StyledComponent } from "styled-components"
import { Search } from "../components/search.component"

const Map = styled(MapView)`

    height:100%;
    width:100%;

`
export const MapScreen = () => {
    return (
        <>
            <Search />
            <Map />
        </>

    )
}