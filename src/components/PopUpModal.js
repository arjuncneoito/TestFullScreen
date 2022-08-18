/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeModules} from 'react-native';

const PopUpModal = () => {
  const {CalendarModule} = NativeModules;
  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'aaashikq');
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        // marginTop: 15,
        // width: '100%',
        // alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        paddingVertical: 10,
        width: '95%',
        borderRadius: 20,
      }}>
      <View>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
          Aaashik nr
        </Text>
        <Text style={{color: 'black'}}>Incoming video call</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            borderWidth: 1,
            paddingHorizontal: 20,
            marginHorizontal: 15,
            paddingVertical: 3,
            borderColor: 'lightgrey',
            borderRadius: 10,
            backgroundColor: '#E34234',
          }}>
          <Text style={{color: 'white'}}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={{
            borderWidth: 1,
            marginHorizontal: 15,
            paddingHorizontal: 20,
            paddingVertical: 3,
            borderColor: 'lightgrey',
            borderRadius: 10,
            backgroundColor: '#50C878',
          }}>
          <Text style={{color: 'white'}}>Answer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopUpModal;
