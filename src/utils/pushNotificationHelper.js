import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFCMToken();
  }
}

async function GetFCMToken() {
  let fcmtoken = await AsyncStorage.getItem('fcmtoken');
  console.log(fcmtoken, 'old');
  if (!fcmtoken) {
    try {
      fcmtoken = await messaging().getToken();
      if (fcmtoken) {
        await AsyncStorage.setItem('fcmtoken', fcmtoken);
        console.log(fcmtoken, 'new');
      } else {
        console.log('illa');
      }
    } catch (e) {
      console.log(e);
    }
  }
}
export const NotificationListner = fun => {
  //   messaging(message => {
  //     console.log('heyaaa111111111111111111');
  //   });
  // console.log('heyaa');
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      '2222222222222222222222222222222222222Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          '111111111111111111111111111111111111111Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        fun(3);
      }
    });
  messaging().onMessage(async remoteMessage => {
    console.log(
      '333333333333333333333333333333notifICtion on forground stTE...............',
      remoteMessage,
    );
    fun(4);
  });
};
