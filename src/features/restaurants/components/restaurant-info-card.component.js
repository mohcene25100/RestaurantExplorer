import React from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components'


const Title = styled.Text`
    padding:16px;
    color:red;
`
export const RestaurantInfoCard = ({ restaurant }) => {
    //  Destructing
    const { name = 'Taco King',
        icon,
        address = 'Gambita Street',
        photos = ["https://i.pinimg.com/736x/eb/e7/65/ebe7655e8047a8635d30e8603dc049ff.jpg", "https://w7.pngwing.com/pngs/686/527/png-transparent-fast-food-hamburger-sushi-pizza-fast-food-food-breakfast-fast-food-restaurant-thumbnail.png", "https://ak-d.tripcdn.com/images/1i65x2215bvic5sjk39C0_R_400_10000_R5_Q90.jpg_.webp?proc=source/trip"],
        isOpenNow = true,
        rating = '10',
        isClosedTemporarily }
        = restaurant

    return (
        <>
            <ScrollView>
                {photos.map((photo, index) => {
                    return (
                        <View style={styles.cardItem}>
                            <Card key={index} elevation={5} style={styles.card}>
                                <Card.Cover style={styles.cover} source={{ uri: photo }} />
                                <Card.Title title={`Restaurant ${index + 1}`} subtitle={name} />
                                <Card.Content>
                                    <Title>{name}</Title>
                                    <Text>{address}</Text>
                                </Card.Content>

                            </Card>
                        </View>

                    )

                })}
            </ScrollView>

        </>

    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
    },
    cover: {
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        padding: 16,
    },
    cardItem: {
        marginBottom: 10,
    }
});