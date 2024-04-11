import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const ProfileHeader = () => {
  const [open, setOpen] = useState<boolean>(false);
  const user = useSelector(state => state.user.user);
  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <View style={{paddingHorizontal: 15, paddingTop: 10, height: 55}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24, fontWeight: '500', color: 'black'}}>
          {user.firstName}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={{marginRight: 15}}>
            <Image
              style={{height: 24, width: 24}}
              source={require('../assets/footer/addPost.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleModal}>
            <Image
              style={{height: 20, width: 20, tintColor: 'black'}}
              source={require('../assets/icon/Menu.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          setOpen(!open);
        }}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              backgroundColor: '#ffffff',
              height: 580,
              borderTopEndRadius: 25,
              borderTopStartRadius: 25,
            }}>
            <TouchableOpacity onPress={handleModal}>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../assets/icon/Modalclose.png')}
              />
              <View style={{paddingHorizontal: 20}}>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text
                    style={{fontSize: 18, paddingVertical: 15, color: 'grey'}}>
                    Setting and privacy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text
                    style={{fontSize: 18, paddingVertical: 15, color: 'grey'}}>
                    Your activity
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text
                    style={{fontSize: 18, paddingVertical: 15, color: 'grey'}}>
                    Archive
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text
                    style={{fontSize: 18, paddingVertical: 15, color: 'grey'}}>
                    Saved
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text
                    style={{fontSize: 18, paddingVertical: 15, color: 'grey'}}>
                    SuperVision
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text
                    style={{fontSize: 18, paddingVertical: 15, color: 'grey'}}>
                    Meta Varified
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text
                    style={{fontSize: 18, paddingVertical: 15, color: 'grey'}}>
                    Close Friends
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text
                    style={{fontSize: 18, paddingVertical: 15, color: 'grey'}}>
                    Favourites
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text
                    style={{fontSize: 18, paddingVertical: 15, color: 'grey'}}>
                    LogOut
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileHeader;
// AppDrawerNavigator.js
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import React from 'react';
// import Dark from './dark.tsx'; // Import your screen components here
// // Import other screens similarly

// const Drawer = createDrawerNavigator();

// const AppDrawerNavigator = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Dark Mode">
//       <Drawer.Screen name="Dark Mode" component={Dark} />
//       {/* Add other screens similarly */}
//     </Drawer.Navigator>
//   );
// };

// export default AppDrawerNavigator;
