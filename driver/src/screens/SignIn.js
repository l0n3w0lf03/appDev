/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Button, Image, Pressable, Text, TextInput, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignIn = () => {
    const navigation = useNavigation();
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
  return (
    <View
        style={{
          height: hp('100%'),
          width: wp('100%'),
          backgroundColor: 'white',
        }}>
        <View
            style={{
                width: wp('95%'),
                height: hp('95%'),
                borderRadius: 5,
                margin: 10,
                alignItems: 'center',
                flexDirection: 'column',
            }}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 10,
                    marginTop: 20,
                }}>
                <Image
                    style={{
                        height: 40,
                        width: wp('20%'),
                        }}
                        source={require('../assets/images/logo.png')}
                />
                <Text
                    style={{
                        marginTop: 0,
                        fontSize: 18,
                    }}>
                    Transport App
                </Text>
            </View>
            <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginTop: 30,
                    }}>
                    Sign-in
                </Text>
            <View
                style={{
                    width: wp('95%'),
                    height: hp('30%'),
                    alignItems: 'center',
                    marginTop: 10,

                }}>
                <TextInput
                    style = {{
                        height: 40,
                        width: 200,
                        borderWidth: 1,
                        borderRadius: 5,
                    }}
                    textAlign={'center'}
                    onChangeText = {onChangeUsername}
                    value = {username}
                    placeholder = "Username"
                    />
                <TextInput
                    style={{
                        height: 40,
                        width: 200,
                        borderWidth: 1,
                        marginTop: 20,
                        borderRadius: 5,
                    }}
                    textAlign={'center'}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Password"
                />
                <Pressable
                    onPress={()=>navigation.navigate('Home')}
                    style={{
                        height: 30,
                        width: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#417dc1',
                        borderRadius: 5,
                        marginTop: 15,
                    }}
                    title = "Enter"
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'white',
                        }}>
                        Enter
                    </Text>
                </Pressable>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 20,
                    }}>
                    <Text
                        style={{
                            textDecorationLine: 'line-through',
                            color: '#e09200',
                        }}>
                        {'                        '}
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            marginLeft: 5,
                            marginRight: 5,
                        }}>
                        OR
                    </Text>
                    <Text
                        style={{
                            textDecorationLine: 'line-through',
                            color: '#e09200',
                        }}>
                        {'                      '}
                    </Text>
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 10,
                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                        }}>
                        Haven't Sign-up yet?
                    </Text>
                    <Pressable
                        onPress={()=>navigation.navigate('SignUp')}
                        style={{
                            margin: 10,
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>
                            Sign-up
                        </Text>
                    </Pressable>
                    <View
                        style={{
                            flexDirection: 'row',
                        }}>
                        <MaterialCommunityIcons
                            name="gmail"
                            size={30}
                            onPress={()=>console.warn('gmail')}
                            style={{
                                margin: 5,
                                color: '#BB001B',
                            }}
                        />
                        <AntDesign
                            name="facebook-square"
                            size={30}
                            onPress={()=>console.warn('facebook')}
                            style={{
                                margin: 5,
                                color: '#3b5998',
                            }}
                        />
                        <AntDesign
                            name="twitter"
                            size={30}
                            onPress={()=>console.warn('twitter')}
                            style={{
                                margin: 5,
                                color: '#00aced',
                            }}
                        />
                        <AntDesign
                            name="instagram"
                            size={30}
                            onPress={()=>console.warn('instagram')}
                            style={{
                                margin: 5,
                                color: '#405DE6',
                            }}
                        />
                    </View>
                </View>
            </View>

        </View>
        <Text> textInComponent </Text>
    </View>
  );
};

export default SignIn;
