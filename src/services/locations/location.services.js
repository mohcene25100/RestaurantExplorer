// We need this service in order to search for a restaurant
// we need a transition from searchTerm which a text 
// to a longitude and latitude to pass it to restaurants.service

import { locations } from "./location.mock"
import camelize from 'camelize'

export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        let locationMock = locations[searchTerm]
        !locationMock && reject('Not Found !')
        resolve(locationMock)
    })
}

export const locationTransform = (result) => {
    const formattedResult = camelize(result)
    const { geometry = {} } = formattedResult.results[0]
    const { lat, lng } = geometry.location
    return { lat, lng }


}