/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTabNavigator from '../navigation/HomeTabNavigator';
import Reviews from '../components/review/Reviews';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;