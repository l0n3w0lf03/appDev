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
import DriverProfile from '../screens/profile/DriverProfile';
import PostDetails from '../components/post/PostDetails';
import BookingDetails from '../components/booking/BookingDetails';
import Payment from '../screens/Payment';
import FAQ from '../screens/FAQ';
import Tutorials from '../screens/Tutorials';
import TermsOfService from '../screens/TermsOfService';
import Chat from '../components/messages/Chat';
import EditProfile from '../screens/profile/EditProfile';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

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
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'HomeMenu'}
                component={HomeMenu}
                options={{
                    headerShown: true,
                    headerTitle: '',
                    headerTitleAlign: 'center',
                }}
            />
          <Stack.Screen
                name={'AboutUs'}
                component={AboutUs}
                options={{
                    headerShown: true,
                    headerTitle: 'About Us',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'Booking'}
                component={Booking}
                options={{
                    headerShown: true,
                    headerTitle: 'Booking',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'Payment'}
                component={Payment}
                options={{
                    headerShown: true,
                    headerTitle: 'Payment',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'CarService'}
                component={CarService}
                options={{
                    headerShown: true,
                    headerTitle: 'Car Service',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'Help'}
                component={Help}
                options={{
                    headerShown: true,
                    headerTitle: 'Help',
                    headerTitleAlign: 'center',
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
                name={'SignIn'}
                component={SignIn}
                options={{
                    headerShown: false,
                }}
            />
        <Stack.Screen
                name={'SignUp'}
                component={SignUp}
                options={{
                    headerShown: false,
                }}
            />
        <Stack.Screen
                name={'Notification'}
                component={Notification}
                options={{
                    headerShown: true,
                    headerTitle: 'Notification',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'PrivacyPolicy'}
                component={PrivacyPolicy}
                options={{
                    headerShown: true,
                    headerTitle: 'Privacy Policy',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'LearnMore'}
                component={LearnMore}
                options={{
                    headerShown: true,
                    headerTitle: 'Travel Advisory',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'PostLocation'}
                component={PostLocation}
                options={{
                    headerShown: true,
                    headerTitle: 'Car Location',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'DriverProfile'}
                component={DriverProfile}
                options={{
                    headerShown: true,
                    headerTitle: 'Driver Profile',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'EditProfile'}
                component={EditProfile}
                options={{
                    headerShown: true,
                    headerTitle: 'Edit Profile',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'PostDetails'}
                component={PostDetails}
                options={{
                    headerShown: true,
                    headerTitle: 'Details',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'BookingDetails'}
                component={BookingDetails}
                options={{
                    headerShown: true,
                    headerTitle: 'Details',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'FAQ'}
                component={FAQ}
                options={{
                    headerShown: true,
                    headerTitle: 'FAQ',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'Tutorials'}
                component={Tutorials}
                options={{
                    headerShown: true,
                    headerTitle: 'Tutorials',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'TermsOfService'}
                component={TermsOfService}
                options={{
                    headerShown: true,
                    headerTitle: 'Terms of Service',
                    headerTitleAlign: 'center',
                }}
            />
        <Stack.Screen
                name={'Chat'}
                component={Chat}
                options={{
                    headerShown: true,
                    headerTitle: 'Chat',
                    headerTitleAlign: 'center',
                }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;