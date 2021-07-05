/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, Image, TextInput, Pressable} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
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
            <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        marginTop: 10,
                    }}>
                    Sign-up
                </Text>
            <View
                style={{
                    width: wp('95%'),
                    height: hp('30%'),
                    marginTop: 10,

                }}>
                <TextInput
                    style = {{
                        height: 40,
                        width: 200,
                        borderWidth: 1,
                        borderRadius: 5,
                    }}
                    onChangeText = {onChangeUsername}
                    value = {username}
                    placeholder = "First Name"
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
                        Next
                    </Text>
                </Pressable>
            </View>

        </View>
        <Text> textInComponent </Text>
    </View>
  );
};

export default SignUp;
