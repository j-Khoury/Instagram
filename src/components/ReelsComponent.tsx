import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {videoData} from '../utils/reelsData.tsx';
import SingleReel from './SingleReel.tsx';

interface VideoItem {
  video: string;
  isLike: boolean;
  likes: number;
  postProfile: string;
}

const ReelsComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleChangeIndexValue = ({index}: {index: number}) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({item, index}: {item: VideoItem; index: number}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ReelsComponent;
