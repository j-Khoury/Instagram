import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ReelsComponent from '../../components/ReelsComponent.tsx';

const Reels: React.FC = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'black',
        position: 'relative',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Reels
        </Text>
        <Feather name="camera" style={{fontSize: 25, color: 'white'}} />
      </View>
      <ReelsComponent />
    </View>
  );
};

export default Reels;
