import {HandlerFunction} from '@storybook/addon-actions';
import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from './ListItemStyle';

export interface ListItemProps {
  iconName: string;
  iconGroup: string;
  iconColor: string;
  itemText: string;
  rightText: string | undefined;
  rightNumber: number | undefined;
  onPress?: HandlerFunction;
}

const ListItem: React.FC<ListItemProps> = ({onPress, ...props}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon
          reverse
          name={props.iconName}
          type={props.iconGroup}
          color={props.iconColor}
          size={20}
        />
        <View style={styles.content}>
          <Text style={styles.text}>{props.itemText}</Text>
          <View style={styles.rightContent}>
            <Text
              style={
                props.rightText === undefined
                  ? [
                      styles.text,
                      props.rightNumber !== 0 &&
                        props.rightNumber !== null &&
                        styles.rightNumber,
                    ]
                  : [styles.text, styles.rightText]
              }>
              {props.rightText === undefined
                ? props.rightNumber !== 0 && props.rightNumber
                : props.rightText}
            </Text>
            <Icon name="chevron-right" type="entypo" color="#D3D3D3" />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ListItem;
