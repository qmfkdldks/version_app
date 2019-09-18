import styled from 'styled-components/native';
import {
 Button, Text, View, Image,
} from 'react-native';

export const Wrapper = styled.View`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
align-items: center;
align-content: stretch;
padding-right: 10px;
padding-left: 10px;
`;

export const Header = styled.Text`
font-weight: bold;
fontSize: 20;
`;

export const Description = styled.Text`
fontSize: 20;
`;

export const PrimaryButton = styled.Button`
color: #F6AE2D;
`;

export const RoundedImage = styled.Image`
width: 150px;
height: 150px;
`;
