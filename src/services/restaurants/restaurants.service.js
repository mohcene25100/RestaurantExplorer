import { mocks } from './mocks'
import camelize from 'camelize'

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {

    // We want to memic Google Api Service
    // So we've used a Promise which is Asynchronous
    // that happen in the futur

    return new Promise((resolve, reject) => {

        // Here location is the key of the mocks

        const mock = mocks[location]
        if (!mock) {
            reject('Not found')
        }
        resolve(mock)

    })


}

// const restaurantTransform = ({ results }) => {
export const restaurantTransform = (result) => {
    const mappedResults = result.results.map((restaurant) => {
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
        }
    })
    return camelize(mappedResults)
}
// restaurantRequest() will not work because it's an async func
// We need .then()
restaurantsRequest()
    .then(restaurantTransform)
    .then((transformedResponse) => { console.log(transformedResponse) })
    .catch(err => console.log(err))