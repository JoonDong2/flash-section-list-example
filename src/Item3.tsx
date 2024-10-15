import React from 'react';
import {Dimensions, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';

const width = Dimensions.get('screen').width / 3;
const height = width * 1.5;

const Item3 = ({image}: {image: string}) => {
  return (
    <Pressable
      onPress={() => {
        console.log(image);
      }}>
      <FastImage source={{uri: image}} style={{width, height}} />
    </Pressable>
  );
};

export default Item3;
