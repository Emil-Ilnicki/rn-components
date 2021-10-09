import React from 'react';
import StorybookUI from './storybook';
import List from './storybook/stories/List/List';

import {View} from 'react-native';

const loadStorybook: boolean = true;

const App = () => {
  return (
    <View>
      <List />
    </View>
  );
};

export default loadStorybook ? StorybookUI : App;
