import {ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header.tsx';
import Stories from '../../components/Stories.tsx';
import Post from '../../components/Post.tsx';
import {useSelector} from 'react-redux';

const Dashboard: React.FC = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <Stories />
      <Post />
    </ScrollView>
  );
};

export default Dashboard;
