// We need this service in order to search for a restaurant
// we need a transition from searchTerm which a text 
// to a longitude and latitude to pass it to restaurants.service
// Geocoding Operation
// is the process of converting addresses (like "1600 Amphitheatre Parkway, Mountain View, CA") 
//into geographic coordinates (like latitude 37.423021 and longitude -122.083739), 
//which you can use to place markers on a map, or position the map.

import { locations } from "./location.mock"
import camelize from 'camelize'

export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        let locationMock = locations[searchTerm]
        !locationMock && reject("not found");

        resolve(locationMock)
    })
}

export const locationTransform = (result) => {
    const formattedResult = camelize(result)
    const { geometry = {} } = formattedResult.results[0]
    const { lat, lng } = geometry.location
    return { lat, lng, viewport: geometry.viewport }


}