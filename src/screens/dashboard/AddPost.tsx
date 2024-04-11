import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

const AddPost: React.FC = () => {
  const handleButtonPress = async () => {
    async function addCourtImage(
      url: string,
      imageUrl: string,
      location: string,
    ): Promise<any> {
      try {
        console.log('testing in the funciton', imageUrl);
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({location, photo: imageUrl}),
        });

        if (!response.ok) {
          throw new Error('Failed to add court image');
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error adding court image:', error);
        throw error;
      }
    }

    // Usage
    const url =
      'https://directus-production-557c.up.railway.app/items/court_image';

    const currentLocation = 'https://g.co/kgs/3J3v2va';
    const options = {
      storageOptions: {
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      const imageurl = response.assets[0]?.uri;

      addCourtImage(url, imageurl, currentLocation);
      console.log(response);
    });
  };
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '900',
    textAlign: 'center',
  },
});

export default AddPost;
