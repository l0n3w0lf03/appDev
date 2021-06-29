/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core';
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';

export class Reviews extends Component {
  render() {
    return (
        <View
            style={{
                backgroundColor: '#dedede',
                height: hp('100%'),
                width: wp('100%'),
            }}>
            <View
                style={{
                    height: 230,
                    backgroundColor: 'white',
                    margin: 10,
                    borderRadius: 10,
                }}>
                <View
                    style={{
                        margin: 5,
                        flexDirection: 'row',
                    }}>
                    <Image
                        style={{
                            resizeMode: 'center',
                            height: 50,
                            width: 50,
                            borderRadius: 100,
                        }}
                        source={require('../../assets/images/profile.jpg')}
                    />
                    <View
                        style={{
                            marginLeft: 15,
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}>
                            Pedro Penduko
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: '#808080',
                            }}>
                            05/03/21 1:00 PM
                        </Text>
                    </View>

                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginLeft: 5,
                    }}>
                    <Ionicons name="star" size={20} color={'#e09200'} style={{marginHorizontal: 5}} />
                    <Ionicons name="star" size={20} color={'#e09200'} style={{marginHorizontal: 5}} />
                    <Ionicons name="star" size={20} color={'#e09200'} style={{marginHorizontal: 5}} />
                    <Ionicons name="star" size={20} color={'#e09200'} style={{marginHorizontal: 5}} />
                    <Text
                        style={{
                            fontSize: 20,
                            color: '#808080',
                        }}>
                        4.6
                    </Text>
                </View>
                <View
                    style={{
                        margin: 15,
                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                        }}>
                        Very good driver. We will ride again.
                    </Text>
                </View>

            </View>
            <View
                style={{
                    height: 230,
                    backgroundColor: 'white',
                    margin: 10,
                    borderRadius: 10,
                }}>
                <View
                    style={{
                        margin: 5,
                        flexDirection: 'row',
                    }}>
                    <Image
                        style={{
                            resizeMode: 'center',
                            height: 50,
                            width: 50,
                            borderRadius: 100,
                        }}
                        source={require('../../assets/images/profile.jpg')}
                    />
                    <View
                        style={{
                            marginLeft: 15,
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}>
                            Pedro Penduko
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: '#808080',
                            }}>
                            05/03/21 1:00 PM
                        </Text>
                    </View>

                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginLeft: 5,
                    }}>
                    <Ionicons name="star" size={20} color={'#e09200'} style={{marginHorizontal: 5}} />
                    <Ionicons name="star" size={20} color={'#e09200'} style={{marginHorizontal: 5}} />
                    <Ionicons name="star" size={20} color={'#e09200'} style={{marginHorizontal: 5}} />
                    <Ionicons name="star" size={20} color={'#e09200'} style={{marginHorizontal: 5}} />
                    <Text
                        style={{
                            fontSize: 20,
                            color: '#808080',
                        }}>
                        4.6
                    </Text>
                </View>
                <View
                    style={{
                        margin: 15,
                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                        }}>
                        Very good driver. We will ride again.
                    </Text>
                </View>

            </View>
      </View>
    );
  }
}

export default Reviews;
