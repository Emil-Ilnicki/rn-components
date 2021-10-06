import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ListItem from './ListIem';
import {TouchableNativeFeedbackBase, View} from 'react-native';

export const darkModeItem = {
  iconName: 'moon-o',
  itemText: 'Dark Mode',
  rightText: 'System',
};

export const lightModeItem = {
  iconName: 'sun-o',
  itemText: 'Light Mode',
  rightText: 'System',
};

storiesOf('List Item', module)
  .add('Dark Mode', () => <ListItem {...darkModeItem} />)
  .add('Light Mode', () => <ListItem {...lightModeItem} />);
