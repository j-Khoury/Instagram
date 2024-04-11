import React, {useEffect, useState, useMemo} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  RefreshControl,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {UserData} from '../utils/UserData.tsx';

export interface DataItem {
  id: number;
  photo: string;
  location: string;
}

export interface PostItem {
  id: number;
  profile: string;
  name: string;
  post: {
    image: string;
    caption: string;
    like: number;
  };
}

const Post: React.FC = () => {
  const screenWidth = useMemo(() => Dimensions.get('window').width, []);
  const [courtImages, setCourtImages] = useState<DataItem[]>([]);
  const [likes, setLikes] = useState<{[key: number]: number}>({});
  const [isLiked, setIsLiked] = useState<{[key: number]: boolean}>({});
  const [showLikeIcon, setShowLikeIcon] = useState<{[key: number]: boolean}>(
    {},
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const pageSize = 10;
        const response = await fetch(
          'https://directus-production-557c.up.railway.app/items/court_image',
        );
        const data = await response.json();
        setCourtImages(prevImages => [...prevImages, ...data.data]);
      } catch (error) {
        console.error('Error fetching court images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://directus-production-557c.up.railway.app/items/court_image',
      );
      const data = await response.json();
      setCourtImages(data.data);
    } catch (error) {
      console.error('Error fetching court images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = (postId: number) => {
    setIsLiked(prevLikedPosts => ({
      ...prevLikedPosts,
      [postId]: !prevLikedPosts[postId],
    }));

    setLikes(prevLikes => ({
      ...prevLikes,
      [postId]: isLiked[postId]
        ? (prevLikes[postId] || 0) - 1
        : (prevLikes[postId] || 0) + 1,
    }));
  };

  const handleDoubleTap = (postId: number) => {
    if (!isLiked[postId]) {
      handleLike(postId);
      setShowLikeIcon(prevShowLikeIcon => ({
        ...prevShowLikeIcon,
        [postId]: true,
      }));
      setTimeout(() => {
        setShowLikeIcon(prevShowLikeIcon => ({
          ...prevShowLikeIcon,
          [postId]: false,
        }));
      }, 800);
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
      }>
      <FlatList
        data={[...courtImages, ...UserData]}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => {
          if (typeof item.photo === 'string') {
            return (
              <View key={item.id} style={{marginTop: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    marginBottom: 8,
                  }}>
                  <Image
                    style={{height: 30, width: 30, borderRadius: 15}}
                    source={{uri: item.photo}}
                  />
                  <Text
                    style={{
                      paddingLeft: 10,
                      fontSize: 16,
                      fontWeight: '600',
                      color: 'black',
                    }}>
                    Riyadi Beirut
                  </Text>
                </View>
                <TouchableWithoutFeedback
                  onPress={() => handleDoubleTap(item.id)}
                  delayLongPress={300}>
                  <View>
                    <Image
                      style={{height: 400, width: screenWidth}}
                      source={{uri: item.photo}}
                    />
                    {showLikeIcon[item.id] && (
                      <View style={styles.likeContainer}>
                        <Image
                          source={require('../assets/heart1.png')}
                          style={styles.likeIcon}
                        />
                      </View>
                    )}
                  </View>
                </TouchableWithoutFeedback>
                <View
                  style={{
                    paddingHorizontal: 13,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15,
                  }}>
                  <TouchableOpacity onPress={() => handleLike(item.id)}>
                    <Image
                      style={{height: 24, width: 28}}
                      source={
                        isLiked[item.id]
                          ? require('../assets/heart1.png')
                          : require('../assets/unlike.png')
                      }
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image
                      style={{height: 24, width: 24, marginLeft: 15}}
                      source={require('../assets/Comment.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{height: 24, width: 28, marginLeft: 15}}
                      source={require('../assets/Messanger.png')}
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    marginLeft: 13,
                    marginTop: 10,
                    fontSize: 16,
                    fontWeight: '600',
                    color: 'black',
                  }}>
                  {likes[item.id]} Likes
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 13,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
                    Riyadi Beirut{' '}
                  </Text>
                  {/* <Text style={{color: 'black'}}>{item.post.caption}</Text> */}
                </View>
              </View>
            );
          } else {
            return (
              <View key={item.id} style={{marginTop: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    marginBottom: 8,
                  }}>
                  <Image
                    style={{height: 30, width: 30, borderRadius: 15}}
                    source={item.profile}
                  />
                  <Text
                    style={{
                      paddingLeft: 10,
                      fontSize: 16,
                      fontWeight: '600',
                      color: 'black',
                    }}>
                    {item.name}
                  </Text>
                </View>
                <TouchableWithoutFeedback
                  onPress={() => handleDoubleTap(item.id)}
                  delayLongPress={300}>
                  <View>
                    <Image
                      style={{height: 400, width: screenWidth}}
                      source={item.post.image}
                    />
                    {showLikeIcon[item.id] && (
                      <View style={styles.likeContainer}>
                        <Image
                          source={require('../assets/heart1.png')}
                          style={styles.likeIcon}
                        />
                      </View>
                    )}
                  </View>
                </TouchableWithoutFeedback>
                <View
                  style={{
                    paddingHorizontal: 13,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15,
                  }}>
                  <TouchableOpacity onPress={() => handleLike(item.id)}>
                    <Image
                      style={{height: 24, width: 28}}
                      source={
                        isLiked[item.id]
                          ? require('../assets/heart1.png')
                          : require('../assets/unlike.png')
                      }
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{height: 24, width: 24, marginLeft: 15}}
                      source={require('../assets/Comment.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{height: 24, width: 28, marginLeft: 15}}
                      source={require('../assets/Messanger.png')}
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    marginLeft: 13,
                    marginTop: 10,
                    fontSize: 16,
                    fontWeight: '600',
                    color: 'black',
                  }}>
                  {item.post.like + (isLiked[item.id] ? 1 : 0)} Likes
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 13,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
                    {item.name}{' '}
                  </Text>
                  <Text style={{color: 'black'}}>{item.post.caption}</Text>
                </View>
              </View>
            );
          }
        }}
      />
    </ScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({
  likeContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeIcon: {
    width: 80,
    height: 80,
  },
});
