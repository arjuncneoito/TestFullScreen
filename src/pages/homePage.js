/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PopUpModal from '../components/PopUpModal';
// const {CalendarModule} = ReactNative.NativeModules;
// import CallPage from './CallPage';

const HomePage = data => {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.linearGradient}>
      <PopUpModal />
      {/* {data.data == 3 && <CallPage />} */}

      <View
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* <TouchableOpacity
          style={{
            backgroundColor: '#bee3f8',
            width: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            borderTopLeftRadius: 9999,
            borderTopRightRadius: 9999,
            borderBottomRightRadius: 9999,
            borderBottomLeftRadius: 9999,
            borderWidth: 1,
            borderColor: 'grey',
          }}>
          <Text style={{fontWeight: 'bold'}}>call</Text>
        </TouchableOpacity> */}
      </View>
    </LinearGradient>
  );
};

export default HomePage;
var styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
