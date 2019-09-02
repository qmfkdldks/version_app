import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Cupon from './component';
import { cupon } from './test';

storiesOf('Cupon', module)
  .add('default', () => (
    <Cupon {...cupon} />
  ));
