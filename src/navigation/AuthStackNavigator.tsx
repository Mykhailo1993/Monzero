import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';

export type AuthParamList = {
  SignUpScreen: undefined;
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthParamList>();

const AuthStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
  </Stack.Navigator>
);
export default AuthStackNavigator;
