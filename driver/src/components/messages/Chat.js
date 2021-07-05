/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Chat = () => {
    return (
      <View>
        <View
          style={{
            backgroundColor: 'white',
            height: hp('10%'),
            width: wp('100%'),
            borderTopColor: 'grey',
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                margin: 10,
                marginBottom: 5,
                fontWeight: 'bold',
              }}>
                Pedro Penduko
            </Text>
            <Text
              style={{
                fontSize: 12,
              }}>
              Honda City
            </Text>
          </View>
          <FontAwesome5
            name="phone" size={24}
            onPress={()=>console.warn('calling')}
            style={{
              left: 50,
            }}
          />
        </View>
        <View
          style={{
            height: hp('100%'),
            width: wp('100%'),
          }}>
          <Text>Message</Text>
        </View>
      </View>

    );
  };

export default Chat;
