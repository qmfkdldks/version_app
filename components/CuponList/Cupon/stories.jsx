import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';
import Cupon from './component';
import { cupon } from './test';

storiesOf('Cupdon', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const name = text('name', cupon.name);
    const img = text('img', cupon.img);
    const expiry = text('expiry', cupon.expiry);

    return (<Cupon name={name} img={img} expiry={expiry} />);
  });
