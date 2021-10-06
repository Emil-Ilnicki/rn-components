import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';

interface IconProps {
  iconLink: string;
}

export const Icon: React.FC<IconProps> = ({...props}) => {
  return (
    <SafeAreaView>
      <Image style={styles.icon} source={require(props.iconLink)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
});
