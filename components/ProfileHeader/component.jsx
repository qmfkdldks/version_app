import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Wrapper, Description, Name, RoundedImage,
} from './style';

const ProfileHeader = (props) => {
  const { name } = props;
  return (
    <Wrapper>
      <RoundedImage path="https://farm5.staticflickr.com/4805/44045006620_a8b5ebc96b_o.png" />
      <View>
        <Name>{name}</Name>
        <Description>1050 Points</Description>
        <Description>4 Cupons</Description>
      </View>
    </Wrapper>
  );
};

ProfileHeader.defaultProps = {
  name: 'nickname',
};

ProfileHeader.propTypes = {
  name: PropTypes.string
};

export default ProfileHeader;
