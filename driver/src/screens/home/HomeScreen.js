/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, Pressable, Dimensions} from 'react-native';
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import NewBookPopup from '../../components/pop_up/NewBookPopUp';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = (props) => {

    const navigation = useNavigation();

    const [isOnline, setIsOnline] = useState(false);
    const [book, setBook] = useState();
    const [myPosition, setMyPosition] = useState();
    const origin = {
        latitude: 13.31875782892781,
        longitude: 123.50468058452924,
      };
    const destination = {
        latitude: 13.167295403973585,
        longitude: 123.75147431055926,
      };

    const getDestination = () =>{
        if (book && book.pickedUp) {
            return {
                latitude: book.destinationLatitude,
                longitude: book.destinationLongitude,
            };
        }

        return {
                latitude: book.originLatitude,
                longitude: book.originLongitude,
        };
    };

    // eslint-disable-next-line no-shadow
    const onUserLocationChange = (event) => {
        setMyPosition(event.nativeEvent.coordinate);
    };

    const onDirectionFound = (event) => {
        if (book) {
            setBook({
                ...book,
                distance: event.distance,
                duration: event.duration,
                pickedUp: book.pickedUp || event.distance < 0.2,
                isFinished: book.pickedUp && event.distance < 0.2,
            });
        }
    };


    const [newBook, setNewBook] = useState({
        id: '1',
        type: 'cARx',
        originLatitude: 13.31875782892781,
        originLongitude: 123.50468058452924,


        destinationLatitude: 13.153182311220629,
        destinationLongitude: 123.71460564127814,
        //destinationLatitude: 13.31875782892781,
        //destinationLongitude: 123.50468058452924,

        user: {
            rating: 5.7,
            name: 'Pedro',
        },
    });

    const onGoPress = () => {
        setIsOnline(!isOnline);
    };

    const renderBottomTitle = () => {

        if (book && book.isFinished) {
            return (
                <View
                    style={{
                      backgroundColor: '#e0e0e0',
                      width: 230,
                      height: 100,
                      borderTopRightRadius: 100,
                      borderBottomRightRadius: 100,
                      left:0,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            borderRadius: 60,
                        }}>
                        <Pressable
                            onPress={() => console.warn('clicked')}
                            style={{
                                backgroundColor: 'white',
                                height: 50,
                                width: 140,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 40,
                            }}>

                            <Text
                                style={{
                                    fontSize: 18,
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}>FINISH {book.type}</Text>
                        </Pressable>

                        <View
                            style={{
                                marginVertical: 5,
                                backgroundColor: 'white',
                                borderRadius: 20,
                                width: 140,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#32cd32' }}>{book.user.name}</Text>
                        </View>
                    </View>
                </View>
                    );
                }


        if (book && book.pickedUp) {
            return (
                <View
                    style={{
                      backgroundColor: '#e0e0e0',
                      width: 230,
                      height: 100,
                      borderTopRightRadius: 100,
                      borderBottomRightRadius: 100,
                      left:0,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                        }}>
                        <View style={{
                                backgroundColor: 'blue',
                                alignItems: 'center',
                                height: 50,
                                width: 50,
                                justifyContent: 'center',
                                borderRadius: 500,
                                marginHorizontal: 10,
                            }}>
                                <FontAwesome5 name="user-circle" size={20} color={'white'} />
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 80,
                                    }}>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: 'black',
                                    }}>{book.distance ? book.distance.toFixed(1) : '?'} km</Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: 'black',
                                    }}>{book.duration ? book.duration.toFixed(1) : '?'} min</Text>
                                </View>
                            </View>
                    </View>
                    <View
                        style={{
                            marginVertical: 5,
                            backgroundColor: 'white',
                            borderRadius: 20,
                            width: 140,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#32cd32' }}>Dropping {book.user.name}</Text>
                    </View>
                </View>
                    );
                }

        if (book) {
            return (
                <View
                    style={{
                      backgroundColor: 'white',
                      width: 230,
                      height: 100,
                      borderTopRightRadius: 100,
                      borderBottomRightRadius: 100,
                      left:0,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                        }}>
                        <View style={{
                                backgroundColor: 'blue',
                                alignItems: 'center',
                                height: 50,
                                width: 50,
                                justifyContent: 'center',
                                borderRadius: 500,
                                marginHorizontal: 10,
                            }}>
                                <FontAwesome5 name="user-circle" size={20} color={'white'} />
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 80,
                                    }}>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#3d3d3d',
                                    }}>{book.distance ? book.distance.toFixed(1) : '?'} km</Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: '#1f1f1f',
                                    }}>{book.duration ? book.duration.toFixed(1) : '?'} min</Text>
                                </View>
                            </View>
                    </View>
                    <View
                        style={{
                            marginVertical: 5,
                            backgroundColor: 'white',
                            borderRadius: 20,
                            width: 140,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#32cd32' }}>Picking {book.user.name}</Text>
                    </View>
                </View>
                    );
                }
                if (isOnline) {
                    return (
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#32cd32' }}>Connected</Text>
                    );
                }
                return (<Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>Not Connected</Text>);

            };

    const onDecline = () => {
        setNewBook();
    };

    // eslint-disable-next-line no-shadow
    const onAccept = (newBook) => {
        setBook(newBook);
        setNewBook();
    };

    const GOOGLE_MAPS_APIKEY = 'AIzaSyD6hl1nh-mG9scBryWnwx0F0kXiSShqXHQ';

  return (
      <View
            style={{
                height: '100%',
            }}>
            <View>
                <View>
                    <MapView
                        style={{
                            width: '100%',
                            height: Dimensions.get('window').height - 70,
                        }}
                        showsUserLocation={true}
                        onUserLocationChange={onUserLocationChange}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                        latitude: 13.153182311220629,
                        longitude: 123.71460564127814,
                        latitudeDelta: 0.0222,
                        longitudeDelta: 0.0121,
                        }}
                    >
                        {book && (
                            <MapViewDirections
                            origin={myPosition}
                            onReady = {onDirectionFound}
                            destination={getDestination()}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={3}
                            strokeColor="red"
                        />
                        )}


                    </MapView>

                    <Pressable
                        onPress={()=>console.warn('clicked')}
                        style={{
                            position: 'absolute',
                            backgroundColor: '#123524',
                            width: 110,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTopRightRadius: 50,
                            borderBottomRightRadius: 50,
                            borderWidth: 3,
                            borderLeftWidth: 0,
                            borderColor: '#e6e600',
                            bottom: 325,
                        }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: 24,

                        }}>
                            <Text style={{
                                color: '#32cd32',
                            }}>
                                <MaterialCommunityIcons name="currency-php" size={20} />
                            </Text>
                            {' '}
                            0.00
                        </Text>
                    </Pressable>

                    <View
                    style={{
                        position: 'absolute',
                        backgroundColor: '#a3a3a3',
                        bottom: 10,
                        height: 100,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Pressable
                        onPress={onGoPress}
                        style={{
                            position: 'absolute',
                            width: 75,
                            height: 75,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                            borderWidth: 1,
                            borderColor: 'black',
                            marginBottom: 30,
                            right: 10,
                            backgroundColor: 'white',
                        }}>

                        {
                            isOnline
                            ? <MaterialCommunityIcons name="car-connected" size={30} color={'#32cd32'}/>
                            : <AntDesign name="disconnect" size={30} color={'#696969'}/>
                        }
                    </Pressable>
                    <View
                        style={{
                        position: 'absolute',
                        backgroundColor: 'white',
                        width: 230,
                        height: 100,
                        borderTopRightRadius: 100,
                        borderBottomRightRadius: 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                        left:0,
                        }}>
                        {renderBottomTitle()}
                    </View>
                    </View>



                </View>
                { newBook && <NewBookPopup
                    newBook={newBook}
                    duration={5}
                    distance={3}
                    onDecline={onDecline}
                    onAccept={() => onAccept(newBook)}
                />}
            </View>
    </View>
  );
};

export default HomeScreen;
