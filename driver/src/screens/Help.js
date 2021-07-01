/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Pressable, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export class Help extends Component {
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
            height: hp('30%'),
            backgroundColor: 'white',
            borderRadius: 5,
            margin: 10,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>
          <Pressable
            style={{
              marginBottom: 5,
              marginTop: 10,
              marginLeft: 10,
            }}
            onPress={()=>console.warn('faqs feedback')}>
            <Text
              style={{
                fontSize: 18,
              }}>
              FAQ's/Feedback
            </Text>
          </Pressable>
          <Pressable
            style={{
              marginBottom: 5,
              marginTop: 5,
              marginLeft: 10,
            }}
              onPress={()=>console.warn('tutorials')}>
            <Text
              style={{
                fontSize: 18,
              }}>
              Tutorials
            </Text>
          </Pressable>
          <Pressable
            style={{
              marginBottom: 5,
              marginTop: 5,
              marginLeft: 10,
            }}
              onPress={()=>console.warn('report incident')}>
            <Text
              style={{
                fontSize: 18,
              }}>
              Report Incident
            </Text>
          </Pressable>
          <Pressable
            style={{
              marginBottom: 5,
              marginTop: 10,
              marginLeft: 10,
            }}
              onPress={()=>console.warn('terms of service')}>
            <Text
              style={{
                fontSize: 18,
              }}>
              Terms of Service
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

export default Help;
