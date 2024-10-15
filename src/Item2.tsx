import React from 'react';
import {Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

const width = Dimensions.get('screen').width / 2;
const height = width * 1.5;

const Item2 = ({image}: {image: string}) => {
  return <FastImage source={{uri: image}} style={{width, height}} />;
};

export default Item2;
