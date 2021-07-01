/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, Pressable} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';

export class Notification extends Component {
  render() {
    return (
      <View
        style={{
          height: hp('100%'),
          width: wp('100%'),
          backgroundColor: '#f7f7f7',
        }}>
        <View
          style={{
            width: wp('95%'),
            height: hp('13%'),
            backgroundColor: 'white',
            borderRadius: 5,
            marginTop: 5,
            margin: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Ionicons name="notifications" size={20} color={'#8e2525'} style={{marginLeft: 5}}/>
          <Pressable
            onPress={()=>console.warn('clicked')}
            style={{
              flexDirection: 'column',
              marginLeft: 15,
            }}>
            <Text
              style={{
                fontSize: 18,
              }}>
              New booking has arrived!
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#3d3d3d',
              }}>
              07/01/21 01:27 PM
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

export default Notification;
