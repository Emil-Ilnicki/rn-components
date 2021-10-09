import React from 'react';
import {storiesOf} from '@storybook/react-native';
import List from './List';

export const oneItem = [
  {
    iconName: 'moon-o',
    iconGroup: 'font-awesome',
    iconColor: '#000000',
    itemText: 'Dark Mode',
    rightText: 'System',
  },
];

export const twoItem = [
  {
    iconName: 'moon-o',
    iconGroup: 'font-awesome',
    iconColor: '#000000',
    itemText: 'Dark Mode',
    rightText: 'System',
  },
  {
    iconName: 'account-switch',
    iconGroup: 'material-community',
    iconColor: '#651fff',
    itemText: 'Switch Account',
    rightNumber: '2',
  },
];

storiesOf('List', module)
  .add('Single Item', () => <List listItems={oneItem} />)
  .add('Two Items', () => <List listItems={twoItem} />);
