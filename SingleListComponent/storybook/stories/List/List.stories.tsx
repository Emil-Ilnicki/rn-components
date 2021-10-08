import React from 'react';
import {storiesOf} from '@storybook/react-native';
import List from './List';
import ListItem from './ListIem';
import {darkModeItem} from './ListItem.stories';

storiesOf('List', module).add('Single Item', () => (
  <List>
    <ListItem {...darkModeItem} />
  </List>
));
