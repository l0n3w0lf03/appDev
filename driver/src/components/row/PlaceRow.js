/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const PlaceRow = ({data}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <View
        style={{
          backgroundColor: '#e0e0e0',
          padding: 5,
          borderRadius: 50,
          marginRight: 15,
        }}>
        {data.description === 'HOME'
          ? <Entypo name="home" size={20} color={'#dc143c'} />
          : <Entypo name="location-pin" size={20} color={'#dc143c'} />
        }
      </View>
      <Text
        style={{}}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};

export default PlaceRow;
