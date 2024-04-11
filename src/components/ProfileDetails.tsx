import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import {DataItem} from './post.tsx';

const ProfileHeader: React.FC = () => {
  const [oldProfileImageUrl, setOldProfileImageUrl] = useState(
    useSelector(state => state?.user.user.image),
  );
  const [newProfileImageUrl, setNewProfileImageUrl] = useState('');
  const user = useSelector(state => state?.user.user);
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

  const handleButtonPress = async () => {
    const url =
      'https://directus-production-557c.up.railway.app/items/court_image';
    const currentLocation = 'https://g.co/kgs/3J3v2va';
    const options = {
      storageOptions: {
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      const imageUrl = response.assets[0]?.uri;
      setOldProfileImageUrl(user.image);
      setNewProfileImageUrl(imageUrl);
      // Call the function to update the court image
      addCourtImage(url, imageUrl, oldProfileImageUrl);
    });
  };

  const addCourtImage = async (
    url: string,
    imageUrl: string,
    oldImageUrl: string,
  ): Promise<any> => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({location: oldImageUrl, photo: imageUrl}),
      });

      if (!response.ok) {
        throw new Error('Failed to update court image');
      }

      const data = await response.json();
      setCourtImages([...courtImages, data]);
      return data;
    } catch (error) {
      console.error('Error updating court image:', error);
      throw error;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.profileImage}
          source={{uri: newProfileImageUrl || oldProfileImageUrl}}
        />
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{courtImages.length}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>1.2 M</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>
      <Text style={styles.userName}>
        {user.firstName} {user.lastName}
      </Text>
      <Text style={styles.userDetails}>React Native</Text>
      <Text style={styles.userDetails}>Instagram Clone</Text>
      <Text style={styles.seeTranslation}>See Translation</Text>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleButtonPress}>
          <Text style={styles.actionButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Share Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  statItem: {
    width: 75,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
  statLabel: {
    fontSize: 15,
    color: 'black',
  },
  userName: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    marginTop: 10,
  },
  userDetails: {
    color: 'black',
  },
  seeTranslation: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  actionContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  actionButton: {
    backgroundColor: '#E1E1E1',
    width: 150,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'black',
  },
});

export default ProfileHeader;
