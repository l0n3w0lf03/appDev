/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Pressable, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Payment = () => {
  return (
    <View
      style={{
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: '#f7f7f7',
      }}>
      <Pressable
          onPress={()=>console.warn('pressed')}
          style={{
            width: wp('95%'),
            height: hp('6%'),
            backgroundColor: 'white',
            borderRadius: 5,
            margin: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
        <Ionicons name= "add-circle" size={30} color={'#00e000'} style={{marginLeft: 10}} />
        <Text
          style={{
            fontSize: 18,
            marginLeft: 10,
          }}> Add Payment Method </Text>
      </Pressable>
      <View
        style={{
          width: wp('95%'),
          backgroundColor: 'white',
          borderRadius: 5,
          marginTop: 5,
          margin: 10,
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
          <Pressable
            onPress = {()=>console.warn('cash')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome5 name="money-bill" size={20} color={'#cfcfcf'} style={{marginLeft: 10,}} />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 20,
              }}>
              Cash
            </Text>
          </Pressable>
          <Pressable
            onPress = {()=>console.warn('cash')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome name="cc-mastercard" size={20} color={'#cfcfcf'} style={{marginLeft: 10,}} />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 20,
              }}>
              Mastercard
            </Text>
          </Pressable>
      </View>
    </View>
  );
};

export default Payment;
