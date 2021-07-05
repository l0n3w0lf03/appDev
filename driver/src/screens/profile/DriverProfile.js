/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Pressable, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

const DriverProfile = () => {
  const navigation = useNavigation();
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: hp('100%'),
          width: wp('100%'),
          flexDirection: 'column',
        }}>
        <View
          style={{
            wp: wp('100%'),
            height: hp('20%'),
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Avatar
            onPress={()=>console.warn('profile pic')}
            size="large"
            rounded
            source={require('../../assets/images/profile.jpg')}
          />
          <Pressable
            onPress={()=>navigation.navigate('EditProfile')}
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 5,
            }}>
            <Text>
              EDIT PROFILE
            </Text>
            <AntDesign name="edit" size={20} color={'#8e2525'}/>
          </Pressable>
        </View>
        <View
          style={{
            wp: wp('100%'),
            backgroundColor: 'white',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#8f8f8f',
              fontWeight: 'bold',
              margin: 10,
            }}>
            PERSONAL INFORMATION
          </Text>
          <View
            style={{
              marginLeft: 10,
              margin: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                marginRight: 5,
                fontSize: 14,
                color: '#8f8f8f',
              }}>
              NAME :
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}>
              Philip Philips
            </Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              margin: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#8f8f8f',
              }}>
              EMAIL :{' '}
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}>
              philipphilips@gmail.com
            </Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              margin: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#8f8f8f',
              }}>
              PHONE :{' '}
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}>
              +63 907 230 131
            </Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              margin: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#8f8f8f',
              }}>
              BIRTH DATE :{' '}
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
              }}>
              01/10/1992
            </Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              margin: 5,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                marginBottom: 5,
                fontSize: 14,
                color: '#8f8f8f',
              }}>
              LICENSE TYPE :{' '}
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                }}>
                Professional
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#8f8f8f',
              }}>
              LICENSE RESTRICTION :{'  '}
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                }}>
                123
              </Text>
            </Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              margin: 5,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#8f8f8f',
                fontWeight: 'bold',
              }}>
              ADDRESS
            </Text>
            <Text
              style={{
                marginBottom: 5,
                fontSize: 14,
                color: '#8f8f8f',
              }}>
              ADDRESS :{' '}
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                }}>
                Zone 1, Barangay 16
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#8f8f8f',
              }}>
              ZIP CODE :{'  '}
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                }}>
                4500
              </Text>
            </Text>
            <Text
              style={{
                marginBottom: 5,
                fontSize: 14,
                color: '#8f8f8f',
              }}>
              CITY :{' '}
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                }}>
                Legazpi City
              </Text>
            </Text>
            <Text
              style={{
                marginBottom: 5,
                fontSize: 14,
                color: '#8f8f8f',
              }}>
              PROVINCE :{'  '}
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                }}>
                Albay
              </Text>
            </Text>
            <Text
              style={{
                marginBottom: 5,
                fontSize: 14,
                color: '#8f8f8f',
              }}>
              COUNTRY :{'  '}
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                }}>
                Philippines
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  };

export default DriverProfile;
