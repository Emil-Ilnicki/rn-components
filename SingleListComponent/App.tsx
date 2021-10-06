import React from 'react';
import StorybookUI from './storybook';
import Button from './storybook/stories/Button';

import {Text} from 'react-native';

import CenterView from './storybook/stories/CenterView';

const loadStorybook: boolean = true;

const App = () => {
  return (
    <CenterView>
      <Button onPress={() => console.log('hello')}>
        <Text> Hello </Text>
      </Button>
    </CenterView>
  );
};

export default loadStorybook ? StorybookUI : App;
