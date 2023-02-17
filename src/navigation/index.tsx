import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';

import OnboardingScreen from '../screens/OnboardingScreen';
import AuthStackNavigator, {AuthParamList} from './AuthStackNavigator';

export type AppParamList = {
  OnboardingScreen: undefined;
  AuthStackNavigator: NavigatorScreenParams<AuthParamList>;
};

const Stack = createNativeStackNavigator<AppParamList>();

const AppNavigation = () => (
  <Stack.Navigator
    initialRouteName="OnboardingScreen"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
  </Stack.Navigator>
);

export default AppNavigation;
