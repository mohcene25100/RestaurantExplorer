import React from "react";
import styled from "styled-components";
import { Image, View } from "react-native";

import { Text } from "../typography/text.component";



const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;


export const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <Item>
      <Image style={{ width: 100, height: 100 }} source={{
        uri: restaurant.photos[0],
      }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>

  );
};