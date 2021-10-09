import React from 'react';
import {View} from 'react-native';

import ListItem, {ListItemProps} from './ListIem';
import {action} from '@storybook/addon-actions';

const List: React.FC<any> = ({...props}) => {
  return (
    <View>
      {props.listItems.map((value: ListItemProps, index: number) => {
        return (
          <ListItem
            key={index}
            iconName={value.iconName}
            iconGroup={value.iconGroup}
            iconColor={value.iconColor}
            itemText={value.itemText}
            rightText={value.rightText}
            rightNumber={value.rightNumber}
            onPress={action(`Pressed Item ${index} on Item List`)}
          />
        );
      })}
    </View>
  );
};

export default List;
