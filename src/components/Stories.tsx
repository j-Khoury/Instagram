import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {UserData} from '../utils/UserData.tsx';
import {useNavigation} from '@react-navigation/native';

const Stories: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{flexDirection: 'row', paddingTop: 8, backgroundColor: 'white'}}>
      {UserData.map(item => (
        <View style={{marginLeft: 10}} key={item.id}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Story', {item})}>
            <View
              style={{
                borderWidth: 3,
                borderRadius: 40,
                padding: 2,
                borderColor: '#FF20B1',
              }}>
              <Image
                style={{height: 70, width: 70, borderRadius: 35}}
                source={item.story.image}
              />
            </View>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', color: 'black'}}>
            {item.username}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Stories;
