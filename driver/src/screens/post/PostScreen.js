/* eslint-disable no-floating-decimal */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Pressable, Text, View, Button} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import PostMessage from '../../components/messages/PostMessage';
import PlaceRow from '../../components/row/PlaceRow';
import Post from '../../components/post/Post';

const PostScreen = () => {

    const navigation = useNavigation();
    const [originPlace, setOriginPlace] = useState('');

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
 
    return (
        <View
            style={{
                backgroundColor: '#f7f7f7',
                height: hp('100%'),
                width: wp('100%'),
            }}>
            <View
                style={{
                    margin: 10,
                    height: 50,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <View
                    style={{
                        marginLeft: 10,
                        flexDirection: 'row',
                    }}>
                    <Entypo name="menu" size={30} color={'#8e2525'} onPress= {()=>navigation.navigate('HomeMenu')}
/>
                </View>
                <View
                    style={{
                        marginRight: 10,
                    }}>
                </View>
            </View>
            <View
                style={{
                    margin: 10,
                    marginTop: 0,
                    height: 120,
                    backgroundColor: 'white',
                    borderRadius: 10,
                }}>
                <PostMessage />
            </View>
            <Pressable
                onPress={toggleModal}
                style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    margin: 10,
                    marginTop: 0,
                    //backgroundColor: 'red',
                }}>
                <Modal
                    isVisible={isModalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    hideModalContentWhileAnimating={true}
                    style={{
                        position: 'absolute',
                        width: wp('90%'),
                    }}>
                    <View
                        style={{
                            height: '100%',
                            justifyContent: 'center',
                        }}>
                        <View
                            style={{
                                height: 600,
                                backgroundColor: 'white',
                                top: 0,
                                borderRadius: 10,
                                borderColor: '#f0f8ff',
                            }}>
                            <View
                                style={{
                                    height: 60,
                                    borderBottomWidth: .5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text
                                        style={{
                                            fontSize: 30,
                                            fontWeight: 'bold',
                                        }}>
                                        Search Location
                                    </Text>
                            </View>
                            <View
                                style={{
                                    height: 40,
                                    width: '97%',
                                    margin: 5,
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                }}>
                                <Pressable
                                    onPress={()=>console.warn('applied')}
                                    style={{
                                        height: 35,
                                        width: 60,
                                        margin: 5,
                                        backgroundColor: 'lightblue',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        marginRight: 25,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                            color: 'white',
                                        }}>Apply</Text>
                                </Pressable>

                            </View>
                            <View
                                style={{
                                    height: 200,
                                }}>
                                <GooglePlacesAutocomplete
                                placeholder="Locate"
                                onPress={(
                                    GooglePlaceData,
                                    GooglePlaceDetail
                                ) => {
                                    setOriginPlace({GooglePlaceData, GooglePlaceDetail});
                                    // 'details' is provided when fetchDetails = true
                                    console.log(GooglePlaceData, GooglePlaceDetail);
                                }}
                                enablePoweredByContainer={false}
                                suppressDefaultStyles
                                currentLocation={true}
                                currentLocationLabel="My Location"
                                styles={{
                                    textInput: {
                                    padding: 10,
                                    backgroundColor: '#eee',
                                    },
                                    container: {
                                    position: 'absolute',
                                    top: 5,
                                    left: 5,
                                    right: 5,
                                    },
                                    listView: {
                                    position: 'absolute',
                                    top: 45,
                                    },
                                    separator: {
                                    backgroundColor: '#e0e0e0',
                                    height: 1,
                                    },
                                }}
                                fetchDetails
                                query={{
                                    key: 'AIzaSyD6hl1nh-mG9scBryWnwx0F0kXiSShqXHQ',
                                    language: 'en',
                                }}
                                renderRow={(GooglePlaceData) => <PlaceRow data={GooglePlaceData} />}
                                renderDescription={(DescriptionRow) =>DescriptionRow.description || DescriptionRow.vicinity}
                                />
                            </View>
                        </View>

                    </View>
                </Modal>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    <Entypo name="location-pin" size={24} color={'#8e2525'} />
                    Location
                </Text>
            </Pressable>
            <View
                style={{
                    margin: 10,
                    marginTop: 0,
                    height: 320,
                    borderRadius: 10,
                    backgroundColor: 'white',
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 15,
                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#3d3d3d',
                        }}>
                        Chauffeur in need near you!
                    </Text>
                    <Pressable
                        onPress={()=>console.warn('pressed')}>
                        <Entypo name="dots-three-horizontal" size={24} color={'#8e2525'} />
                    </Pressable>
                </View>
                <View>
                    <Post />
                </View>
            </View>
        </View>
    );
};
export default PostScreen;
