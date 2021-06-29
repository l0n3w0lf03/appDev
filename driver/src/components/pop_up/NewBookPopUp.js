/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const NewBookPopup = ({newBook, onAccept, onDecline, duration, distance}) =>{

  return (

    <View
      style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: Dimensions.get('window').height - 70,
        padding: 15,
        justifyContent: 'space-between',
        backgroundColor: '#00000099',
      }}>

      <View
        style={{
          backgroundColor: '#001400',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          height: 250,
          top: 105,
        }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
              <View
                style={{
                  alignItems: 'center',
                  width: 100,
                  left: 20,
                  flexDirection: 'row',
                }}>
                <Entypo name="clock" size={35} color={'green'} />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 25,
                    fontWeight: 'bold',
                  }}>{'  '}
                  {duration} min
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  right: 20,
                  flexDirection: 'row',
                }}>
                <MaterialCommunityIcons name="map-marker-distance" size={35} color={'green'} />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 25,
                    fontWeight: 'bold',
                  }}>{'  '}
                  {distance} km
                </Text>
              </View>
          </View>
          <View
            style={{
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <View style={{
                backgroundColor: 'blue',
                alignItems: 'center',
                height: 80,
                width: 80,
                justifyContent: 'center',
                borderRadius: 80,
            }}>
              <FontAwesome5 name="user-circle" size={60} color={'white'} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
                backgroundColor: 'green',
                borderRadius: 20,
              }}>
              <Text
                style={{
                    color: 'white',
                    fontSize: 25,
                    marginHorizontal: 10,
                    fontWeight: 'bold',
              }}>{newBook.type}</Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                <AntDesign name="star" size={18} color={'white'}/>{' '}{newBook.user.rating}
              </Text>
            </View>
          </View>
      </View>

      <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 30,
          paddingLeft: 30,
          bottom: 0,
        }}>
          <Pressable
            style={{
                  backgroundColor: 'black',
                  borderRadius: 50,
                  padding: 20,
                  width: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
            onPress={onDecline} >
              <Text style={{
                fontWeight: 'bold',
                color: 'white',
              }}><Entypo name="cross" size={24} /></Text>
            </Pressable>
            <Pressable
            style={{
                  backgroundColor: 'green',
                  padding: 20,
                  borderRadius: 50,
                  width: 100,
                  alignItems: 'center',
                }}
            onPress={onAccept} >
              <Text style={{
                fontWeight: 'bold',
                color: 'white',
              }}><Entypo name="check" size={24} /></Text>
            </Pressable>
        </View>
    </View>
  );
};

export default NewBookPopup;
