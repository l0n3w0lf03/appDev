/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Avatar, Button} from 'react-native-elements';
const EditProfile = () => {
  return (
    <View
        style={{
          backgroundColor: 'white',
          height: hp('100%'),
          width: wp('100%'),
          alignItems: 'center',
        }}>
        <View
            style={{
                flexDirection: 'row',
            }}>
            <View
                style={{
                    margin: 5,
                }}>
                <Avatar
                    size="large"
                    title="upload"
                    activeOpacity={0.7}
                    source={require('../../assets/images/logo.png')}
                />
                <Text>
                    Upload Documents
                </Text>
            </View>
            <View
                style={{
                    margin: 5,
                }}>
                <Avatar
                    size="large"
                    title="upload"
                    activeOpacity={0.7}
                    source={require('../../assets/images/logo.png')}
                />
                <Text>
                    Fill Information
                </Text>
            </View>
        </View>
        <View
            style={{
                margin: 10,
                width: wp('50%'),
            }}>
            <Button 
                title="Upload Documents"
                onPress={()=>console.warn('upload')} />
        </View>
    </View>
  );
};
export default EditProfile;
