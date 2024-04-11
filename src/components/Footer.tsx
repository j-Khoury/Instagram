import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require('../assets/footer/homeButton.png')}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require('../assets/footer/search.png')}
        />
      </TouchableOpacity> */}
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require('../assets/footer/addPost.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.reel}
          source={require('../assets/footer/reel.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require('../assets/footer/user.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    height: 60,
    alignItems: 'center',
  },
  icon: {
    height: 37,
    width: 35,
  },
  reel: {
    height: 35,
    width: 36,
  },
});

export default Footer;
