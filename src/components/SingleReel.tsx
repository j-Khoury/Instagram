import React, {useRef, useState, useCallback} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

interface Item {
  video: any;
  isLike: boolean;
  likes: number;
  postProfile: any;
  title: string;
  description: string;
}

interface SingleReelProps {
  item: Item;
  index: number;
  currentIndex: number;
}

const SingleReel: React.FC<SingleReelProps> = ({item, index, currentIndex}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef<Video>(null);

  const onBuffer = useCallback((buffer: any) => {
    console.log('buffring', buffer);
  }, []);

  const onError = useCallback((error: any) => {
    console.log('error', error);
  }, []);

  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(item.isLike);

  const handleMutePress = useCallback(() => {
    setMute(prevMute => !prevMute);
  }, []);

  const handleLikePress = useCallback(() => {
    setLike(prevLike => !prevLike);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleMutePress}
        style={styles.videoContainer}>
        <Video
          ref={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={currentIndex === index ? false : true}
          source={item.video}
          muted={mute}
          style={styles.video}
        />
      </TouchableOpacity>
      <Ionicons
        name="volume-mute"
        style={[styles.muteIcon, mute ? styles.muteIconActive : {}]}
      />
      <View style={styles.bottomContainer}>
        <View>
          <TouchableOpacity style={styles.profileContainer}>
            <View style={styles.profile}>
              <Image source={item.postProfile} style={styles.profileImage} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.audioContainer}>
            <Ionicons name="ios-musical-note" style={styles.audioIcon} />
            <Text style={styles.audioText}>Original Audio</Text>
          </View>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={handleLikePress} style={styles.actionItem}>
            <Image
              source={require('../assets/heart1.png')}
              style={styles.likeIcon}
            />
            <Text style={styles.actionText}>{item.likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <Feather name="more-vertical" style={styles.actionIcon} />
          </TouchableOpacity>
          <View style={styles.profileContainer}>
            <Image source={item.postProfile} style={styles.profileImage} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  muteIcon: {
    fontSize: 20,
    color: 'white',
    position: 'absolute',
    backgroundColor: 'rgba(52,52,52,0.6)',
    borderRadius: 100,
    padding: 0,
  },
  muteIconActive: {
    padding: 20,
  },
  bottomContainer: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    bottom: 0,
    padding: 10,
  },
  profileContainer: {
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: 'white',
    margin: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
  description: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 10,
    paddingBottom: 5,
  },
  audioContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  audioIcon: {
    color: 'white',
    fontSize: 16,
  },
  audioText: {
    color: 'white',
  },
  actionsContainer: {
    position: 'absolute',
    bottom: 10,
    paddingLeft: 350,
  },
  actionItem: {
    padding: 6,
  },
  actionIcon: {
    color: 'white',
    fontSize: 25,
  },
  likeActive: {
    color: 'red',
  },
  actionText: {
    color: 'white',
  },
  likeIcon: {
    width: 30,
    height: 30,
  },
});

export default SingleReel;
