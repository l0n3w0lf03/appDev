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

import {useNavigation} from '@react-navigation/native';
import TravelHistory from '../../components/menu/TravelHistory';

const ProfileMenu = () => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

        return (
            <View
                style={{
                    backgroundColor: '#d3d3d3',
                    height: hp('100%'),
                    width: wp('100%'),
                }}>
                <Pressable
                    onPress={toggleModal}
                    style={{
                        marginTop: 2,
                        marginLeft: 10,
                        width: wp('50%'),
                    }}>
                    <Ionicons name="menu" size={30} color={'#8e2525'} />
                    <Modal
                        isVisible={isModalVisible}
                        onBackdropPress={() => setModalVisible(false)}
                        animationIn="fadeIn"
                        animationOut="fadeOut"
                        hideModalContentWhileAnimating={true}
                        style={{
                            width: wp('50%'),
                        }}>
                        <View>
                            <Text>
                                Profile
                            </Text>
                        </View>
                    </Modal>
                </Pressable>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: 120,
                        width: wp('94.5%'),
                        margin: 10,
                        backgroundColor: 'white',
                        borderRadius: 5,
                    }}>
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
                                            onPress={()=>console.warn('edit')}>
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
                                left: 100,
                                color: '#00e000',
                            }}>
                        ₱ 0.00
                        </Text>
                </View>
                <View
                    style={{
                        backgroundColor: 'white',
                        margin: 10,
                        marginTop: 0,
                        height: hp('6%'),
                        //width: wp('100%'),
                        flexDirection: 'row',
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
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
                                    License:{'  '}
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
                                    D-Experience:{'  '}
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
                                <Text>
                                    L-Restriction:{'  '}
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
                <View
                    style={{
                        height: '100%',
                    }}>
                    <View
                        style={{
                            padding: 5,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                height: 45,
                                margin: 5,
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    margin: 5,
                                }}>
                                <MaterialCommunityIcons name="account-settings" size={20} color={'#8e2525'} style={{marginHorizontal: 5}} />
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: '#3d3d3d',
                                        marginHorizontal: 5,
                                    }}>
                                    Profile
                                </Text>
                            </View>
                            <Pressable
                                onPress={() => console.warn('clicked')}
                                style={{
                                    height: 50,
                                    width: 50,
                                    right: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <MaterialIcons name="arrow-forward-ios" size={20} color={'#8e2525'} style={{marginHorizontal: 5}} />
                            </Pressable>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                height: 45,
                                margin: 5,
                                backgroundColor: '#f0f0f0',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    margin: 5,
                                }}>
                                <MaterialIcons name="notifications" size={20} color={'#8e2525'} style={{marginHorizontal: 5}} />
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: '#3d3d3d',
                                        marginHorizontal: 5,
                                    }}>
                                    Notification
                                </Text>
                            </View>
                            <Pressable
                                onPress={() => console.warn('clicked')}
                                style={{
                                    height: 50,
                                    width: 50,
                                    right: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <MaterialIcons name="arrow-forward-ios" size={20} color={'#8e2525'} style={{marginHorizontal: 5}} />
                            </Pressable>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                height: 45,
                                margin: 5,
                                backgroundColor: '#f0f0f0',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    margin: 5,
                                }}>
                                <FontAwesome name="calendar-check-o" size={20} color={'#8e2525'} style={{marginHorizontal: 5}} />
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: '#3d3d3d',
                                        marginHorizontal: 5,
                                    }}>
                                    Booking
                                </Text>
                            </View>

                            <Pressable
                                onPress={() => console.warn('Booking')}
                                style={{
                                    height: 50,
                                    width: 50,
                                    right: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <MaterialIcons name="arrow-forward-ios" size={20} color={'#8e2525'} style={{marginHorizontal: 5}} />
                            </Pressable>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                height: 45,
                                margin: 5,
                                backgroundColor: '#f0f0f0',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    margin: 5,
                                }}>
                                <Ionicons name="document-attach-sharp" size={20} color={'#8e2525'} style={{marginHorizontal: 5}} />
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: '#3d3d3d',
                                        marginHorizontal: 5,
                                    }}>
                                    Documents
                                </Text>
                            </View>
                            <Pressable
                                onPress={() => console.warn('clicked')}
                                style={{
                                    height: 50,
                                    width: 50,
                                    right: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <MaterialIcons name="arrow-forward-ios" size={20} color={'#8e2525'} style={{marginHorizontal: 5}} />
                            </Pressable>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                height: 45,
                                margin: 5,
                                backgroundColor: '#f0f0f0',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    margin: 5,
                                }}>
                                <MaterialCommunityIcons name="help" size={20} color={'#8e2525'} style={{marginHorizontal: 5}} />
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: '#3d3d3d',
                                        marginHorizontal: 5,
                                    }}>
                                    Help
                                </Text>
                            </View>
                            <Pressable
                                onPress={() => console.warn('clicked')}
                                style={{
                                    height: 50,
                                    width: 50,
                                    right: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <MaterialIcons name="arrow-forward-ios" size={20} color={'#8e2525'} style={{marginHorizontal: 5}} />
                            </Pressable>
                        </View>
                        <View
                            style={{
                                justifyContent: 'space-between',
                                width: '100%',
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    height: 60,
                                    margin: 5,
                                    backgroundColor: '#f0f0f0',
                                    alignItems: 'center',
                                    marginTop: 20,
                                    justifyContent: 'space-between',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        margin: 5,
                                    }}>
                                    <AntDesign name="logout" size={20} color={'#8e2525'} style={{marginHorizontal: 5}} />
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: '#3d3d3d',
                                            marginHorizontal: 5,

                                        }}>LOG OUT
                                    </Text>
                                </View>

                                <Pressable
                                    onPress={() => console.warn('clicked')}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        right: 15,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <MaterialIcons name="arrow-forward-ios" size={20} color={'#8e2525'} style={{marginHorizontal: 5}} />
                                </Pressable>
                            </View>
                        </View>

                    </View>
                </View>
            </View>

        );
    };

export default ProfileMenu;
