import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';

const List: React.FC<{}> = ({children}) => {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('#FFFFFF', true)}>
      <View>{children}</View>
    </TouchableNativeFeedback>
  );
};

export default List;
