import React, {useState, useEffect} from 'react';
import {View, FlatList, Image, StyleSheet} from 'react-native';
import {DataItem} from './Post.tsx';

const ProfilePost: React.FC = () => {
  const [courtImages, setCourtImages] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageSize = 10;
        const response = await fetch(
          'https://directus-production-557c.up.railway.app/items/court_image',
        );
        const data = await response.json();
        setCourtImages(data.data);
      } catch (error) {
        console.error('Error fetching court images:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={courtImages}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        renderItem={({item}) => (
          <Image source={{uri: item.photo}} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 15,
  },
  image: {
    width: '33.33%',
    height: 100,
    resizeMode: 'cover',
  },
});

export default ProfilePost;
