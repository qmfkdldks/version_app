import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ListItem, Button } from 'react-native-elements';

const Cupon = (props) => {
  const { name, expiry, img } = props;
  return (
    <ListItem
      title={(
        <View alignItems='flex-end'>
          <Text h4>{name}</Text>
          <Text>유효기간 {expiry}</Text>
          <Button buttonStyle={{ padding: 5, backgroundColor: '#F6AE2D' }} titleStyle={{ fontSize: 10 }} title='바코드' />
        </View>
      )}
      bottomDivider
      leftAvatar={{
        rounded: true, width: 100, height: 100, source: { uri: img }
      }}
    />
);
};

Cupon.propTypes = {
  name: PropTypes.string.isRequired,
  expiry: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Cupon;
