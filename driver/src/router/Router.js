/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTabNavigator from '../navigation/HomeTabNavigator';
import Reviews from '../components/review/Reviews';
import HomeMenu from '../components/menu/HomeMenu';
import AboutUs from '../screens/AboutUs';
import Booking from '../screens/Booking';
import CarService from '../screens/CarService';
import Help from '../screens/Help';
import LogOut from '../screens/LogOut';
import Notification from '../screens/Notification';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import LearnMore from '../components/messages/LearnMore';
import PostLocation from '../components/post/PostLocation';
import EditProfile from '../screens/profile/EditProfile';
import PostDetails from '../components/post/PostDetails';


const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
                name={'Home'}
                component={HomeTabNavigator}
                options={{
                    headerShown: false,
                }}
            />
        <Stack.Screen
                name={'Reviews'}
                component={Reviews}
                options={{
                    headerShown: true,
                    headerTitle: 'Review',
                }}
            />
        <Stack.Screen
                name={'HomeMenu'}
                component={HomeMenu}
                options={{
                    headerShown: true,
                    headerTitle: 'Menu',
                }}
            />
          <Stack.Screen
                name={'AboutUs'}
                component={AboutUs}
                options={{
                    headerShown: true,
                    headerTitle: 'About Us',
                }}
            />
        <Stack.Screen
                name={'Booking'}
                component={Booking}
                options={{
                    headerShown: true,
                    headerTitle: 'Booking',
                }}
            />
        <Stack.Screen
                name={'CarService'}
                component={CarService}
                options={{
                    headerShown: true,
                    headerTitle: 'Car Service',
                }}
            />
        <Stack.Screen
                name={'Help'}
                component={Help}
                options={{
                    headerShown: true,
                    headerTitle: 'Help',
                }}
        />
        <Stack.Screen
                name={'LogOut'}
                component={LogOut}
                options={{
                    headerShown: true,
                    headerTitle: 'Log Out',
                }}
            />
        <Stack.Screen
                name={'Notification'}
                component={Notification}
                options={{
                    headerShown: true,
                    headerTitle: 'Notification',
                }}
            />
        <Stack.Screen
                name={'PrivacyPolicy'}
                component={PrivacyPolicy}
                options={{
                    headerShown: true,
                    headerTitle: 'Privacy Policy',
                }}
            />
        <Stack.Screen
                name={'LearnMore'}
                component={LearnMore}
                options={{
                    headerShown: true,
                    headerTitle: 'Travel Advisory',
                }}
            />
        <Stack.Screen
                name={'PostLocation'}
                component={PostLocation}
                options={{
                    headerShown: true,
                    headerTitle: 'Car Location',
                }}
            />
        <Stack.Screen
                name={'EditProfile'}
                component={EditProfile}
                options={{
                    headerShown: true,
                    headerTitle: 'Profile',
                }}
            />
        <Stack.Screen
                name={'PostDetails'}
                component={PostDetails}
                options={{
                    headerShown: true,
                    headerTitle: 'Details',
                }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;