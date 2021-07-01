/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, Pressable, Text, View, Modal} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import {useNavigation} from '@react-navigation/native';
import TravelHistory from '../../components/menu/TravelHistory';
import HomeMenu from '../../components/menu/HomeMenu';

const ProfileMenu = () => {
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
                        flexDirection: 'column',
                        height: 150,
                        width: wp('94.5%'),
                        margin: 10,
                        backgroundColor: 'white',
                        borderRadius: 5,
                    }}>
                    <View>
                    <Pressable
                        onPress= {()=>navigation.navigate('HomeMenu')}
                        style={{
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 10,
                            width: wp('50%'),
                        }}>
                        <Entypo name="menu" size={30} color={'#8e2525'} />
                    </Pressable>

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            left: 20,
                            width: wp('83%'),
                        }}>
                        <View
                            style={{
                                height: 80,
                                width:80,
                                borderRadius: 300,
                                alignItems: 'center',
                            }}>
                            <Image
                                style={{
                                    height: 80,
                                    width:80,
                                    borderRadius: 300,
                                    resizeMode: 'contain',
                                }}
                                source={require('../../assets/images/profile.jpg')}
                            />
                        </View>
                        <View>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    width: wp('50%'),
                                }}>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                        }}>
                                        Philip Philips
                                        <Pressable
                                            onPress={()=>navigation.navigate('EditProfile')}>
                                            <Text>
                                                {'  '}<AntDesign name="edit" size={20} color={'#8e2525'}/>
                                            </Text>
                                        </Pressable>
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginTop: 2,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                color: '#3d3d3d',
                                                marginHorizontal: 5,
                                            }}>
                                            <Ionicons name="person-circle-outline" size={20} color={'#c2c2c2'} style={{marginHorizontal: 5}} />
                                            {' '}Driver
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                color: '#3d3d3d',
                                                marginHorizontal: 5,
                                            }}>
                                            <Ionicons name="star" size={20} color={'#e09200'} style={{marginHorizontal: 5}} />
                                            {' '}4.6
                                        </Text>
                                    </View>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#3d3d3d',
                                        marginHorizontal: 5,
                                    }}>
                                    <Entypo name="location-pin" size={20} color={'#c2c2c2'} />
                                    Location
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: 'white',
                        margin: 10,
                        borderRadius: 5,
                    }}>
                    <View
                        style={{

                            marginBottom: 0,
                            marginTop: 0,
                            height: hp('10%'),
                            flexDirection: 'row',
                            borderRadius: 5,
                        }}>
                            <Text
                                style={{
                                    left: 10,
                                    fontSize: 24,
                                }}>
                                Wallet Balance:
                            </Text>
                            <Text
                                style={{
                                    fontSize: 40,
                                    left: wp('10%'),
                                    color: '#00e000',
                                }}>
                            ₱ 0.00
                            </Text>
                    </View>
                    <View
                        style={{
                            marginTop: 0,
                            height: hp('6%'),
                            width: wp('95.5%'),
                            flexDirection: 'row',
                            alignItems: 'center',
                            left: 10,
                        }}>
                            <View
                                style={{
                                    borderBottomWidth: 0.5,
                                    borderColor: '#3d3d3d',
                                    margin: 5,
                                }}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: '#3d3d3d',
                                    }}>
                                    <Text>
                                        <FontAwesome name="drivers-license" size={20} color={'#c2c2c2'} /> :{'  '}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                        }}>
                                        Professional
                                    </Text>
                                </Text>
                            </View>
                            <View
                                style={{
                                    borderBottomWidth: 0.5,
                                    borderColor: '#3d3d3d',
                                    margin: 5,
                                }}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: '#3d3d3d',
                                    }}>
                                    <Text>
                                        <FontAwesome5 
                                            name="business-time" 
                                            size={20} color={'#c2c2c2'}
                                            style={{marginHorizontal: 5}}
                                        />{'  '}
                                        : {'  '}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                        }}>
                                        10 yrs
                                    </Text>

                                </Text>
                            </View>
                            <View
                                style={{
                                    borderBottomWidth: 0.5,
                                    borderColor: '#3d3d3d',
                                    margin: 5,
                                }}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: '#3d3d3d',
                                    }}>
                                    <Text
                                        style={{
                                            color: '#c2c2c2',
                                        }}>
                                        <AntDesign 
                                            name="closecircle"
                                            size={20} color={'#c2c2c2'}
                                            style={{marginHorizontal: 5}}
                                        />{'  '}
                                        : {'  '}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                        }}>
                                        1 - 2 - 3
                                    </Text>

                                </Text>
                            </View>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: 'white',
                        margin: 10,
                        marginTop: 0,
                        height: hp('30%'),
                        flexDirection: 'column',
                        borderRadius: 5,
                    }}>
                    <View
                        style={{
                            margin: 5,
                            marginLeft: 10,
                        }}>
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: '#3d3d3d',
                                marginTop: 10,
                                marginBottom: 5,
                            }}>
                            Travel History {' '}
                            <Entypo name="back-in-time" size={24} color={'#3d3d3d'} />
                        </Text>
                    </View>
                    <TravelHistory />
                </View>
                <View
                    style={{
                        backgroundColor: 'white',
                        margin: 10,
                        marginTop: 0,
                        height: hp('8%'),
                        flexDirection: 'column',
                        borderRadius: 5,
                    }}>
                    <View
                        style={{
                            marginLeft: 10,
                            marginRight: 10,
                            height: hp('8%'),
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 24,
                                    color: '#3d3d3d',
                                }}>
                                Reviews
                            </Text>
                            <MaterialIcons name="stars" size={24} color={'#e09200'} style={{marginLeft: 5}} />
                        </View>
                        <Pressable
                            onPress={()=>navigation.navigate('Reviews')}
                            >
                            <Entypo name="chevron-right" size={24} color={'#3d3d3d'} />
                        </Pressable>
                    </View>
                </View>
            </View>

        );
    };

export default ProfileMenu;
