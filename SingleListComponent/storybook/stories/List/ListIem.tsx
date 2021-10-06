import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {Icon} from 'react-native-elements';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface ListItemProps {
  iconName: string;
  itemText: string;
  rightText?: string;
}

const ListItem: React.FC<ListItemProps> = ({...props}) => {
  console.log(props.iconName);
  return (
    <SafeAreaView style={styles.container}>
      <Icon name={props.iconName} type="font-awesome" />
      <Text>{props.itemText}</Text>
      <Text>{props.rightText}</Text>
      <Icon name="chevron-right" type="entypo" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ListItem;
