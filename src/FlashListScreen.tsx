import React from 'react';
import {getRandomNumbers} from './number';
import {getImage} from './image';
import Item3 from './Item3';
import {Dimensions, Text, View} from 'react-native';
import Carousel from './Carousel';
import FlashSectionList, {Section} from 'flash-section-list';
import Item2 from './Item2';

const sections: Section[] = [
  {
    data: getRandomNumbers({count: 50, seed: 2}).map(getImage),
    renderItem: ({item: image}) => <Item3 image={image} />,
    numOfColumns: 3,
    type: 'image',
  },
  {
    header: {
      element: (
        <View style={{marginTop: 20, width: Dimensions.get('screen').width}}>
          <View
            style={{height: 10, backgroundColor: 'lightgray', marginBottom: 10}}
          />
          <Text
            style={{
              fontSize: 20,
              marginBottom: 5,
              paddingLeft: 10,
              color: 'black',
            }}>
            Second Section
          </Text>
        </View>
      ),
    },
    data: getRandomNumbers({count: 9, seed: 3}).map(getImage),
    renderItem: ({item: image}) => {
      return <Item2 image={image} />;
    },
    type: 'image',
    numOfColumns: 2,
  },
  {
    element: (
      <View style={{marginTop: 20}}>
        <View
          style={{height: 10, backgroundColor: 'lightgray', marginBottom: 10}}
        />
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            paddingLeft: 10,
            color: 'black',
          }}>
          Carousel 1
        </Text>
        <Carousel seed={5} />
      </View>
    ),
    type: 'carousel',
  },
  {
    element: (
      <View style={{marginTop: 20}}>
        <View
          style={{height: 10, backgroundColor: 'lightgray', marginBottom: 10}}
        />
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            paddingLeft: 10,
            color: 'black',
          }}>
          Carousel 2
        </Text>
        <Carousel seed={6} />
      </View>
    ),
    type: 'carousel',
  },
  {
    element: (
      <View style={{marginTop: 20}}>
        <View
          style={{height: 10, backgroundColor: 'lightgray', marginBottom: 10}}
        />
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            paddingLeft: 10,
            color: 'black',
          }}>
          Carousel 3
        </Text>
        <Carousel seed={7} />
      </View>
    ),
    type: 'carousel',
  },
  {
    element: (
      <View style={{marginTop: 20}}>
        <View
          style={{height: 10, backgroundColor: 'lightgray', marginBottom: 10}}
        />
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            paddingLeft: 10,
            color: 'black',
          }}>
          Carousel 4
        </Text>
        <Carousel seed={8} />
      </View>
    ),
    type: 'carousel',
  },
  {
    element: (
      <View style={{marginTop: 20}}>
        <View
          style={{height: 10, backgroundColor: 'lightgray', marginBottom: 10}}
        />
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            paddingLeft: 10,
            color: 'black',
          }}>
          Carousel 5
        </Text>
        <Carousel seed={9} />
      </View>
    ),
    type: 'carousel',
  },
  {
    element: (
      <View style={{marginTop: 20}}>
        <View
          style={{height: 10, backgroundColor: 'lightgray', marginBottom: 10}}
        />
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            paddingLeft: 10,
            color: 'black',
          }}>
          Carousel 6
        </Text>
        <Carousel seed={10} />
      </View>
    ),
    type: 'carousel',
  },
  {
    element: (
      <View style={{marginTop: 20}}>
        <View
          style={{height: 10, backgroundColor: 'lightgray', marginBottom: 10}}
        />
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            paddingLeft: 10,
            color: 'black',
          }}>
          Carousel 7
        </Text>
        <Carousel seed={11} />
      </View>
    ),
    type: 'carousel',
  },
  {
    element: (
      <View style={{marginTop: 20}}>
        <View
          style={{height: 10, backgroundColor: 'lightgray', marginBottom: 10}}
        />
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            paddingLeft: 10,
            color: 'black',
          }}>
          Carousel 8
        </Text>
        <Carousel seed={12} />
      </View>
    ),
    type: 'carousel',
  },
  {
    element: (
      <View style={{marginTop: 20}}>
        <View
          style={{height: 10, backgroundColor: 'lightgray', marginBottom: 10}}
        />
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            paddingLeft: 10,
            color: 'black',
          }}>
          Carousel 9
        </Text>
        <Carousel seed={13} />
      </View>
    ),
    type: 'carousel',
  },
  {
    element: (
      <View style={{marginTop: 20}}>
        <View
          style={{height: 10, backgroundColor: 'lightgray', marginBottom: 10}}
        />
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            paddingLeft: 10,
            color: 'black',
          }}>
          Carousel 10
        </Text>
        <Carousel seed={14} />
      </View>
    ),
    type: 'carousel',
  },
];

const First = () => {
  return (
    <FlashSectionList
      nestedScrollEnabled
      contentContainerStyle={{backgroundColor: 'white'}}
      estimatedItemSize={100}
      sections={sections}
    />
  );
};

export default First;
