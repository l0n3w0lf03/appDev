/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeMenu = () => {

  const navigation = useNavigation();

    return (
      <View
        style={{
           backgroundColor: '#f7f7f7',
            height: hp('100%'),
            width: wp('100%'),
        }}>
          <View
            style={{
              height: hp('16%'),
              width: wp('95%'),
              backgroundColor: 'white',
              margin: 10,
              marginBottom: 0,
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 12,
              },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,

                elevation: 24,
            }}>
            <Image
              style={{
                height: 70,
                alignItems: 'center',
              }}
              resizeMode= "center"
              source={require('../../assets/images/logo.png')}
            />
            <Text
              style={{
                fontSize: 20,
              }}>
              Transport App
            </Text>

          </View>
          <View
            style={{
              height: hp('60%'),
              width: wp('95%'),
              backgroundColor: 'white',
              margin: 10,
              justifyContent: 'space-between',
              padding: 10,
              borderRadius: 5,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 12,
              },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,

                elevation: 24,

            }}>
            <Pressable
              onPress={()=>navigation.navigate('Notification')}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Ionicons name="notifications" size={20} color={'#8e2525'} style={{marginRight: 15}} />
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#3d3d3d',
                      marginRight: 5,
                    }}>
                    Notification
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#3d3d3d',
                    }}>
                    ( 5 )
                  </Text>
                </View>
                <Pressable
                  onPress={()=>navigation.navigate('Notification')}>
                  <Entypo name="chevron-right" size={24} color={'#3d3d3d'} />
                </Pressable>
              </View>
            </Pressable>
            <Pressable
              onPress={()=>navigation.navigate('Booking')}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Ionicons name="bookmark-sharp" size={20} color={'#8e2525'} style={{marginRight: 15}} />
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#3d3d3d',
                      marginRight: 5,
                    }}>
                    Booking
                  </Text>
                </View>
                <Pressable
                  onPress={()=>navigation.navigate('Booking')}>
                  <Entypo name="chevron-right" size={24} color={'#3d3d3d'} />
                </Pressable>
              </View>
            </Pressable>
            <Pressable
              onPress={()=>navigation.navigate('Payment')}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <FontAwesome name="credit-card-alt" size={20} color={'#8e2525'} style={{marginRight: 15}} />
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#3d3d3d',
                      marginRight: 5,
                    }}>
                    Payment
                  </Text>
                </View>
                <Pressable
                  onPress={()=>navigation.navigate('CarService')}>
                  <Entypo name="chevron-right" size={24} color={'#3d3d3d'} />
                </Pressable>
              </View>
            </Pressable>
            <Pressable
              onPress={()=>navigation.navigate('CarService')}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <FontAwesome5 name="tools" size={20} color={'#8e2525'} style={{marginRight: 15}} />
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#3d3d3d',
                      marginRight: 5,
                    }}>
                    Car Service
                  </Text>
                </View>
                <Pressable
                  onPress={()=>navigation.navigate('CarService')}>
                  <Entypo name="chevron-right" size={24} color={'#3d3d3d'} />
                </Pressable>
              </View>
            </Pressable>
            <Pressable
              onPress={()=>navigation.navigate('Help')}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Ionicons name="help-circle" size={20} color={'#8e2525'} style={{marginRight: 15}} />
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#3d3d3d',
                      marginRight: 5,
                    }}>
                    Help
                  </Text>
                </View>
                <Pressable
                  onPress={()=>navigation.navigate('Help')}>
                  <Entypo name="chevron-right" size={24} color={'#3d3d3d'} />
                </Pressable>
              </View>
            </Pressable>
            <Pressable
              onPress={()=>navigation.navigate('PrivacyPolicy')}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Ionicons name="shield-sharp" size={20} color={'#8e2525'} style={{marginRight: 15}} />
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#3d3d3d',
                      marginRight: 5,
                    }}>
                    Privacy Policy
                  </Text>
                </View>
                <Pressable
                  onPress={()=>navigation.navigate('PrivacyPolicy')}>
                  <Entypo name="chevron-right" size={24} color={'#3d3d3d'} />
                </Pressable>
              </View>
            </Pressable>
            <Pressable
              onPress={()=>navigation.navigate('AboutUs')}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Ionicons name="md-settings" size={20} color={'#8e2525'} style={{marginRight: 15}} />
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#3d3d3d',
                      marginRight: 5,
                    }}>
                    About us
                  </Text>
                </View>
                <Pressable
                  onPress={()=>navigation.navigate('AboutUs')}>
                  <Entypo name="chevron-right" size={24} color={'#3d3d3d'} />
                </Pressable>
              </View>
            </Pressable>
            <Pressable
              onPress={()=>navigation.navigate('SignIn')}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Ionicons name="md-log-out-sharp" size={20} color={'#8e2525'} style={{marginRight: 15}} />
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#3d3d3d',
                      marginRight: 5,
                    }}>
                    Logout
                  </Text>
                </View>
                <Pressable
                  onPress={()=>navigation.navigate('SignIn')}>
                  <Entypo name="chevron-right" size={24} color={'#3d3d3d'} />
                </Pressable>
              </View>
            </Pressable>

          </View>
      </View>
    );
  };


export default HomeMenu;
