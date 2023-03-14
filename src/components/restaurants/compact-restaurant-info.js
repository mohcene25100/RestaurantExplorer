import React from "react";
import styled from "styled-components";
import { WebView } from 'react-native-webview';
import { Platform, Image, View } from "react-native";

import { Text } from "../typography/text.component";

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }) => {
  // const Imagee = isAndroid ? CompactWebview : CompactImage;
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