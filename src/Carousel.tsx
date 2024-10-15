import React, {useMemo} from 'react';
import {getRandomNumbers} from './number';
import {getImage} from './image';
import {FlashList} from '@shopify/flash-list';
import Item3 from './Item3';

const Carousel = ({
  seed,
  count = 30,
}: {
  seed: number;
  count?: number;
  title?: string;
}) => {
  const images = useMemo(() => {
    return getRandomNumbers({seed, count}).map(getImage);
  }, [count, seed]);

  return (
    <FlashList
      nestedScrollEnabled
      horizontal
      data={images}
      estimatedItemSize={50}
      showsHorizontalScrollIndicator={false}
      renderItem={({item: image}) => {
        return <Item3 image={image} />;
      }}
    />
  );
};

export default Carousel;
