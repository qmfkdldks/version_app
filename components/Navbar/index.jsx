import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './style';

export const Navbar = (props) => {
  const { backgroundColor, leftComponent, centerComponent, rightComponent } = props;

  return (
    <Header
      backgroundColor={backgroundColor}
      leftComponent={leftComponent}
      centerComponent={centerComponent}
      rightComponent={rightComponent}
    />
  );
};

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navbar;
