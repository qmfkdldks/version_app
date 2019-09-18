import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';
import ProfileHeader from './component';
// import { ProfileHeader } from './test';

storiesOf('ProfileHeader', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    // const name = text('name', ProfileHeader.name);
    // const img = text('img', ProfileHeader.img);
    // const expiry = text('expiry', ProfileHeader.expiry);

    return (<ProfileHeader />);
  });
