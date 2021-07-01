/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Pressable, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Entypo from 'react-native-vector-icons/Entypo';

export class CarService extends Component {
  render() {
    return (
      <View
        style={{
          height: hp('100%'),
          width: wp('100%'),
          backgroundColor: '#f7f7f7',
        }}>
        <Pressable
          onPress={()=>console.warn('location changed')}
          style={{
            margin: 10,
            justifyContent: 'center',
          }}>
            <Text
              style={{
                fontSize: 16,
              }}>
              <Entypo name="location-pin" size={16} color={'#00e000'} />
              {' '}286 Bañag, Daraga, Albay
            </Text>

        </Pressable>
        <View
          style={{
            width: wp('95%'),
            height: hp('100%'),
            backgroundColor: 'white',
            borderRadius: 5,
            margin: 10,
            flexDirection: 'row',
          }}>

        </View>
      </View>
    );
  }
}

export default CarService;
