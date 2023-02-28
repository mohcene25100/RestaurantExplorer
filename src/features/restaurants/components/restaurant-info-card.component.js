import React from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components'


const Title = styled.Text`
    padding:${props => props.theme.space[3]};
    color:${(props) => props.theme.colors.ui.primary}
`

const CardItem = styled(View)`
    margin-bottom : ${props => props.theme.space[2]};
`
const RestaurantCard = styled(Card)`
    background-color:${props => props.theme.colors.bg.primary};
`
const RestaurantCardCover = styled(Card.Cover)`
    padding: ${props => props.theme.space[3]};
    background-color: ${props => props.theme.colors.bg.primary};
`

export const RestaurantInfoCard = ({ restaurant }) => {

    //  Destructing

    const { name = 'Taco King',
        icon,
        address = '199, Gambita Street, Algiers',
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
                        <CardItem>
                            <RestaurantCard key={index} elevation={5} >
                                <RestaurantCardCover source={{ uri: photo }} />
                                <Card.Title title={`Restaurant ${index + 1}`} subtitle={name} />
                                <Card.Content>
                                    <Text>{address}</Text>
                                </Card.Content>

                            </RestaurantCard>
                        </CardItem>

                    )

                })}
            </ScrollView>

        </>

    )
}

// WE DON'T NEED IT ANYMORE AFTER REPLACING IT WITH "STYLED-COMPONENTS"

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