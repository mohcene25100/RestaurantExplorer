import MapView from "react-native-maps"
import { Marker, Callout } from 'react-native-maps'
import styled, { StyledComponent } from "styled-components"
import { Search } from "../components/search.component"
import { useContext, useState, useEffect } from "react"
import { LocationContext } from "../../../services/locations/location.context"
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context"

const Map = styled(MapView)`

    height:100%;
    width:100%;

`
export const MapScreen = ({ navigation }) => {

    const { restaurants = [] } = useContext(RestaurantsContext)
    const { location } = useContext(LocationContext)
    const [latDelta, setLatDelta] = useState(0)

    const { lat, lng, viewport } = location
    useEffect(() => {
        const northeastLat = viewport.northeast.lat
        const southwestLat = viewport.southwest.lat
        setLatDelta(northeastLat - southwestLat)
    }, [location, viewport])


    return (
        <>
            <Search />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}
            >

                {restaurants.map((restaurant) => {
                    return (<Marker
                        key={restaurant.name}
                        title={restaurant.name}
                        coordinate={
                            {
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng
                            }
                        }
                    >

                        <Callout onPress={() => {
                            navigation.navigate('RestaurantDetails', {
                                restaurant: restaurant
                            })
                        }}>

                        </Callout>
                    </Marker>



                    )
                })}

            </Map>
        </>

    )
}