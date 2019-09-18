import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Cupon from './Cupon';

const CuponList = (props) => {
  const { cupons } = props;
  return (
    <View>
      { cupons.map((cupon, index) => (<Cupon key={index} {...cupon} />)) }
    </View>
  );
};

CuponList.defaultProps = {
  cupons: [],
};

CuponList.propTypes = {
  cupons: PropTypes.arrayOf(PropTypes.object),
};

export default CuponList;
