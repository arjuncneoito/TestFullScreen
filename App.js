import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  NotificationListner,
  requestUserPermission,
} from './src/utils/pushNotificationHelper';
import HomePage from './src/pages/homePage';
import CallPage from './src/pages/CallPage';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListner(fun);
  }, []);
  const [first, setfirst] = useState(6);
  const [second, setsecond] = useState(1);
  const fun = message => {
    setsecond(message);
    setfirst(message);
    console.log('message 1123455y78899555', message);
  };
  console.log(first, 'first');
  return (
    <View>
      {(second == 1 || second == 6 || second == 4) && <HomePage data={first} />}
      {first == 3 && <CallPage />}
    </View>
  );
};

export default App;
