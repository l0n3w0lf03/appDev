/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PostMessage = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                backgroundColor: '#1f1fff',
                height: '100%',
                borderRadius: 10,
                flexDirection: 'column',
            }}>
            <View
                style={{
                    flexDirection: 'row',
                }}>
                <Text
                    style={{
                        marginHorizontal: 15,
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'white',
                    }}>
                    Travel Message
                    <MaterialCommunityIcons
                        name="lightbulb-on"
                        size={25} color={'white'}
                        />
                </Text>
            </View>
            <Text
                style={{
                    marginHorizontal: 15,
                    fontSize: 14,
                    color: 'white',
                    }}>
                    Follow health protocols at all times.
                    Do observe physical distancing and always wear a mask.
            </Text>

            <Pressable
                onPress={()=>navigation.navigate('LearnMore')}
                style={{
                    backgroundColor: 'white',
                    height: 40,
                    width: wp('40%'),
                    margin: 5,
                    marginLeft: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                }}>
                    <Text
                        style={{
                            marginHorizontal: 15,
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: 'black',
                    }}>Learn More</Text>

            </Pressable>
        </View>
    );
};
export default PostMessage;
