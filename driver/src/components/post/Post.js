/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, Component} from 'react';
import { Text, View, Image, Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Post = () => {
    //const post = props.post;
    //const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

  return (
    <View
        style={{
            height: 240,
            width: 150,
            borderRadius: 10,
            //backgroundColor: 'grey',
            marginTop: 0,
            left: 20,
            borderWidth: 0.5,
        }}>
        <View
            style={{
                alignItems: 'center',
            }}>
            <View
                style={{
                    height: 100,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image
                    style={{
                        width: '100%',
                        resizeMode: 'center',
                    }}
                    source={require('../../assets/images/car.png')}
                />

            </View>
            <Text>
                Honda City
            </Text>

        </View>
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Ionicons
                name="md-chatbox-ellipses-outline"
                size={24} color={'#8e2525'}
                onPress={()=>console.warn('clicked')}
                style={{
                    marginHorizontal: 10,
                }}
                />
            <Entypo
                name="location-pin"
                size={24} color={'#8e2525'}
                onPress={()=>console.warn('clicked')}
                style={{
                    marginHorizontal: 10,
                }}
                />
        </View>
        <View
            style={{
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Pressable
                onPress={()=>console.log('applied')}
                style={{
                    height: 35,
                    width: 120,
                    backgroundColor: '#bebebe',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 2.5,
                    borderRadius: 10,
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white',
                    }}>
                    Apply
                </Text>
            </Pressable>
            <Pressable
                onPress={toggleModal}
                style={{
                    height: 35,
                    width: 120,
                    backgroundColor: '#808080',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 2.5,
                    borderRadius: 10,
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white',
                    }}>
                    Remove
                </Text>
                <Modal
                    isVisible={isModalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    backdropOpacity={0}
                    hideModalContentWhileAnimating={true}
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            width: 300,
                            height: 100,
                            backgroundColor: '#707070',
                            borderRadius: 10,
                            borderWidth: 1,
                            top: 55,
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                margin: 10,
                                fontWeight: 'bold',
                                color: 'white',
                            }}>
                            Are you sure to remove this from list?
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: 300,
                            }}>
                            <Pressable
                                onPress={()=>console.warn('yes')}
                                style={{
                                    height: 40,
                                    width: 60,
                                    backgroundColor: '#a7fc00',
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    left: 220,
                                }}>
                                <Text
                                    style={{
                                        fontSize: 24,
                                    }}>
                                    Yes
                                </Text>
                            </Pressable>
                        </View>
                    </View>

                </Modal>
            </Pressable>
        </View>

    </View>

  );
};
export default Post;
