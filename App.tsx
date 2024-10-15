import React, {useEffect, useRef, useState} from 'react';
import {NestedScrollView, NestedScrollViewHeader} from '@sdcx/nested-scroll';
import Carousel from './src/Carousel';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {TabView, SceneMap} from 'react-native-tab-view';
import {useWindowDimensions} from 'react-native';
import FlashListScreen from './src/FlashListScreen';

const renderScene = SceneMap({
  first: FlashListScreen,
  second: FlashListScreen,
});

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const layout = useWindowDimensions();
  const insets = useSafeAreaInsets();
  return (
    <NestedScrollView style={{paddingTop: insets.top}}>
      <NestedScrollViewHeader stickyHeaderBeginIndex={1}>
        <Carousel seed={1} />
      </NestedScrollViewHeader>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </NestedScrollView>
  );
};

export default () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};
