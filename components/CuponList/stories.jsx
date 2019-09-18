import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import CuponList from './component';
import { cupons } from './test';

storiesOf('CuponList', module)
    .add('default', () => (
        <CuponList cupons={cupons} />
    ))
    .add('with scrollview', () => (
        <ScrollView>
            <CuponList cupons={cupons} />
        </ScrollView>
    ));
