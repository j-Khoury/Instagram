import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard/Dashboard.tsx';
import Search from '../screens/dashboard/Search.tsx';
import AddPost from '../screens/dashboard/AddPost.tsx';
import Reel from '../screens/dashboard/Reel.tsx';
import UserProfile from '../screens/dashboard/UserProfile.tsx';

const Tab = createBottomTabNavigator();

const BottomNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 24, width: 24}}
              source={
                focused
                  ? require('../assets/footer/sHomeButton.png')
                  : require('../assets/footer/homeButton.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 24, width: 24}}
              source={
                focused
                  ? require('../assets/footer/sSearch.png')
                  : require('../assets/footer/search.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 24, width: 24}}
              source={require('../assets/footer/addPost.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reel}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 24, width: 24}}
              source={require('../assets/footer/reel.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 24, width: 24}}
              source={require('../assets/footer/user.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
