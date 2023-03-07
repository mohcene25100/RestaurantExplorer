import styled from 'styled-components'
import { SafeAreaView, StatusBar } from 'react-native'

// We have a bug here in IOS phones when we write like this 
// margin-top: ${StatusBar.currentHeight}px;

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`