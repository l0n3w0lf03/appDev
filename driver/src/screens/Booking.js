/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Entypo from 'react-native-vector-icons/Entypo';

export class Booking extends Component {
  render() {
    return (
      <View
        style={{
          height: hp('100%'),
          width: wp('100%'),
          backgroundColor: '#f7f7f7',
        }}>
        <Pressable
          onPress={()=>console.warn('clicked')}
          style={{
            width: wp('95%'),
            height: hp('25%'),
            backgroundColor: 'white',
            borderRadius: 5,
            margin: 10,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontSize: 20,
                }}>
                Toyota | BID A3R003162
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#3d3d3d',
                  marginTop: 10,
                }}>
                <Entypo name="location-pin" size={16} color={'#00e000'} />
                {' '}286 Bañag, Daraga, Albay
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#C0C0C0',
                    }}>
                    Trip Start
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginTop: 5,
                      marginRight: 15,
                    }}>
                    07/02/2021 5:05 PM
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#C0C0C0',
                    }}>
                    End
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginTop: 5,
                      marginRight: 10,
                    }}>
                    07/04/2021 5:05 PM
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 5,
              marginLeft: 10,

            }}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  resizeMode: 'center',
                  height: 80,
                  width:100,
                }}
                source={require('../assets/images/car.png')}
                />
            </View>
            <View
              style={{
                margin: 5,
              }}>
              <Text
                style={{
                  fontSize: 14,
                }}>
                Credit Card
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#00e000',
                }}>
                ₱ 0.00
              </Text>
            </View>
          </View>

        </Pressable>
      </View>
    );
  }
}

export default Booking;
