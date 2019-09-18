import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import {
  PrimaryButton, Wrapper, Description, Header, RoundedImage,
} from './style';

const Cupon = ({ name, expiry, img }) => (
  <Wrapper>
    <RoundedImage source={{ uri: img }} />
    <View>
      <Header>{name}</Header>
      <Description>
      Other text
        {expiry}
      </Description>
      <PrimaryButton color="#F6AE2D" title="바코드" />
    </View>
  </Wrapper>
);

Cupon.propTypes = {
  name: PropTypes.string.isRequired,
  expiry: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Cupon;
