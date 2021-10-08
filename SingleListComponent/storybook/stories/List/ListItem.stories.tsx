import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {color, number, radios, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import ListItem from './ListIem';

export const lightDarkItem = () => {
  const iconsNames = {
    Sun: 'sun-o',
    Moon: 'moon-o',
  };

  const iconName = radios('Icon', iconsNames, 'moon-o');
  const iconGroup: string = 'font-awesome';
  const iconColor = color('Color', '#000000');
  const itemText: string = text('Left Text', 'Dark Mode');
  const rightText: string = text('Right Text', 'System');

  return {iconName, iconGroup, iconColor, itemText, rightText};
};

export const switchAccountItem = () => {
  const iconName: string = 'account-switch';
  const iconGroup: string = 'material-community';
  const iconColor = color('Color', '#000000');
  const itemText: string = text('Left Text', 'Switch Account');
  const rightNumber: number = number('Right Number', 2);

  return {iconName, iconGroup, iconColor, itemText, rightNumber};
};

storiesOf('List Item', module)
  .add('Light Mode / Dark Mode Item', () => (
    <ListItem onPress={action('Item Pressed!')} {...lightDarkItem()} />
  ))
  .add(' Swtich Account Item', () => (
    <ListItem onPress={action('Item Pressed')} {...switchAccountItem()} />
  ));
