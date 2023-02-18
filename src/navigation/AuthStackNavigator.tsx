import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import {Image, Pressable} from 'react-native';
import images from '../assets/images';

export type AuthParamList = {
  SignUpScreen: undefined;
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthParamList>();

const AuthStackNavigator = () => (
  <Stack.Navigator
    screenOptions={({navigation}) => ({
      headerLeft: ({}) => (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={images.app.arrowLeft}
            style={{width: 32, height: 24}}
          />
        </Pressable>
      ),
      title: 'Login',
      headerTintColor: 'black',
      headerTitleStyle: {
        fontFamily: 'Inter-Medium',
        fontSize: 18,
      },
      contentStyle: {
        borderWidth: 0,
      },
      headerShadowVisible: false,
    })}>
    <Stack.Screen
      name="SignUpScreen"
      component={SignUpScreen}
      options={{title: 'Sign Up'}}
    />
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{title: 'Login'}}
    />
  </Stack.Navigator>
);
export default AuthStackNavigator;
