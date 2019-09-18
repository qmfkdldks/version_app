import React from 'react';
import {
  Image, Button, Text, View,
} from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
background-color: #502449;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
padding: 40px;
`;

export const Name = styled.Text`
color: #fff;
font-weight: bold;
fontSize: 20;
`;

export const Description = styled.Text`
color: #fff;
fontSize: 20;
`;

export const RoundedImage = (props) => (<Image style={{ width: 100, height: 100, borderRadius: 50 }} source={{ uri: props.path }} />);
