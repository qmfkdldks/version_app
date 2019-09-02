import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './style';
import Cupon from './Cupon';

const CuponList = (props) => {
  const { cupons } = props;
  return (
    <Card>
      { cupons.map((cupon) => (<Cupon {...cupon} />)) }
    </Card>
  );
};

CuponList.defaultProps = {
  cupons: [],
};

CuponList.propTypes = {
  cupons: PropTypes.arrayOf(PropTypes.object),
};

export default CuponList;
