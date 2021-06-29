/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from '../screens/home/HomeScreen';
import ProfileMenu from '../screens/menu/ProfileMenu';
import PostScreen from '../screens/post/PostScreen';
const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#00db00',
        }}>
            <Tab.Screen
                name={'Profile'}
                component={ProfileMenu}
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="md-person-circle-sharp" size={30} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="navigation" size={30} color={color} />
                    ),

                }}
            />
            <Tab.Screen
                name={'PostScreen'}
                component={PostScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="post-outline" size={30} color={color} />
                    ),

                }}
            />


        </Tab.Navigator>
    );
};

export default HomeTabNavigator;
