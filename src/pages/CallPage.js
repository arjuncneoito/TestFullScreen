/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CallPage = () => {
  return (
    <LinearGradient
      colors={['#301934', '#483248', '#E6E6FA']}
      style={{
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={{marginBottom: 10}}>
          <Image source={require('../images/Ellipse.png')} />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25,
            marginBottom: 5,
          }}>
          Aaashik nr
        </Text>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>
          incoming video call
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../images/dec.png')} />
          <Text style={{marginTop: 7, color: 'white'}}>Decline</Text>
        </View>
        <Image source={require('../images/ac.png')} />
      </View>
    </LinearGradient>
  );
};

export default CallPage;
