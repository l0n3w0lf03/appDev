/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {FlatList, Text, View, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export class AboutUs extends Component {
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
            height: hp('100%'),
            backgroundColor: 'white',
            borderRadius: 5,
            margin: 10,
          }}>
          <View
            style={{
              marginLeft: 10,
              marginTop: 10,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              About Us
            </Text>
            <ScrollView>
              <Text>
                111111111111111111111111111111111111111
              </Text>
            </ScrollView>
          </View>

        </View>
      </View>
    );
  }
}

export default AboutUs;
