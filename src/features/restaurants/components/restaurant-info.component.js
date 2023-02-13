import React from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import { Card } from 'react-native-paper'


export const RestaurantInfo = ({ restaurant }) => {
    //  Destructing
    const { name = 'TacoKing',
        icon,
        address = 'Gambita Street',
        photos = ["https://i.pinimg.com/736x/eb/e7/65/ebe7655e8047a8635d30e8603dc049ff.jpg", "https://i.pinimg.com/736x/eb/e7/65/ebe7655e8047a8635d30e8603dc049ff.jpg", "https://i.pinimg.com/736x/eb/e7/65/ebe7655e8047a8635d30e8603dc049ff.jpg"],
        isOpenNow = true,
        rating = '10',
        isClosedTemporarily }
        = restaurant
    const list = photos.map((photo) => {
        <Card>
            <Card.Cover source={{ uri: photo }} />
            <Card.Title title="Restaurant 1" subtitle="Taco King" />
            <Card.Content>
                <Text>Card TITLE</Text>
                <Text>Content</Text>
            </Card.Content>

        </Card>

    })
    return (
        <>
            {photos.map((photo) => {
                return (

                    <Card>
                        <Card.Cover source={{ uri: "https://i.pinimg.com/736x/eb/e7/65/ebe7655e8047a8635d30e8603dc049ff.jpg" }} />
                        <Card.Title title="Restaurant 1" subtitle="Taco King" />
                        <Card.Content>
                            <Text>Card TITLE</Text>
                            <Text>Content</Text>
                        </Card.Content>

                    </Card>
                )

            })}









        </>

    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});