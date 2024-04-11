import React from 'react';
import {View, StyleSheet} from 'react-native';
import StackNavigation from './src/navigator/StackNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
// import PushNotification, { PushNotificationSchema } from 'react-native-push-notification';

// PushNotification.configure({
//   onRegister: function (token: string) {
//     console.log('TOKEN:', token);
//   },

//   onNotification: function (notification: PushNotificationSchema) {
//     console.log('NOTIFICATION:', notification);

//     notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },

//   onPermissionRequest: function (status: any) {
//     console.log('PERMISSION:', status);
//   },

//   requestPermissions: true,
// });
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StackNavigation />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
