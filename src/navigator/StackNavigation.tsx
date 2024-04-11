// import {View, Text} from 'react-native';
import React from 'react';
import {
  createNativeStackNavigator,
  // NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/auth/Login.tsx';
import Signup from '../screens/auth/Signup.tsx';
import Dashboard from '../screens/dashboard/Dashboard.tsx';
import StoryView from '../components/StoryView.tsx';
import BottomNavigation from './BottomNavigation.tsx';
import Menu from '../screens/dashboard/Menu.tsx';

type StackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Story: undefined;
  Menu: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Dashboard} />
        <Stack.Screen name="Story" component={StoryView} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Dashboard" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
