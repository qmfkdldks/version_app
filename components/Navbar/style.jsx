import React from 'react';
import { Header as OHeader } from 'react-native-elements';

export const Header = () => (
  <OHeader
    backgroundColor="#fff"
    leftComponent={{ icon: 'chevron-left' }}
    centerComponent={{ text: '내 정보' }}
    rightComponent={{ icon: 'coin', type: 'material-community' }}
  />
);
