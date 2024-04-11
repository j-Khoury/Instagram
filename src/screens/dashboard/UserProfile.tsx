import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProfileHeader from '../../components/ProfileHeader.tsx';
import ProfileDetails from '../../components/ProfileDetails.tsx';
import ProfilePost from '../../components/ProfilePost.tsx';

const UserProfile: React.FC = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <ProfileDetails />
      <ProfilePost />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default UserProfile;
