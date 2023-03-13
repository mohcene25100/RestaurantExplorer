import React from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components'
import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star'
import openshop from '../../../../assets/open'
import { Favorite } from '../../../components/Favorites/favorite.component'




const RestaurantCard = styled(Card)`
    background-color:${props => props.theme.colors.bg.primary};
    margin-bottom : ${props => props.theme.space[3]};

`
const RestaurantCardCover = styled(Card.Cover)`
    padding: ${props => props.theme.space[3]};
    background-color: ${props => props.theme.colors.bg.primary};
`
const Info = styled(View)`
    padding: ${props => props.theme.space[3]}
`
const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size:${props => props.theme.fontSizes.title};
    color:${(props) => props.theme.colors.ui.primary}
`
const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.caption}
`
const Rating = styled(View)`
    flex-direction:row;
    padding-top:${props => props.theme.space[2]}
    padding-bottom:${props => props.theme.space[2]}
`
const Section = styled(View)`
    flex-direction:row;
    align-items:center;`
const SectionEnd = styled(View)`
    flex:1;
    flex-direction:row;
    justify-content:flex-end;
`



export const RestaurantInfoCard = ({ restaurant }) => {

    //  Destructing

    const { name = 'Taco King',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        address = '199, Gambita Street, Algiers',
        photos = ["https://i.pinimg.com/736x/eb/e7/65/ebe7655e8047a8635d30e8603dc049ff.jpg", "https://w7.pngwing.com/pngs/686/527/png-transparent-fast-food-hamburger-sushi-pizza-fast-food-food-breakfast-fast-food-restaurant-thumbnail.png", "https://ak-d.tripcdn.com/images/1i65x2215bvic5sjk39C0_R_400_10000_R5_Q90.jpg_.webp?proc=source/trip"],
        isOpenNow = true,
        rating = 3.2,
        isClosedTemporarily = true }
        = restaurant

    const ratingArray = Array.from(new Array(Math.floor(rating)))
    return (
        <>

            <RestaurantCard elevation={5} >
                <Favorite restaurant={restaurant} />
                <RestaurantCardCover source={{ uri: photos[0] }} />
                <Info>
                    <Title>{name}</Title>
                    <Section>
                        <Rating>
                            {ratingArray.map((rating, index) => {
                                return <SvgXml key={index} xml={star} width={20} height={20} />
                            })}
                        </Rating>
                        <SectionEnd>
                            {isClosedTemporarily && <Text variant='label' style={{ color: 'red' }}>CLOSED TEMPORARILY</Text>}
                            <View style={{ paddingLeft: 16 }} />
                            {isOpenNow && <SvgXml xml={openshop} width={20} height={20} />}
                            <Image style={{ marginLeft: 16, width: 15, height: 15 }} source={{ uri: icon }} />
                        </SectionEnd>
                    </Section>

                    <Address>{address}</Address>
                </Info>


            </RestaurantCard>


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