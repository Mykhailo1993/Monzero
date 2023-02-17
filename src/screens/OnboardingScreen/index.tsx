import React from 'react';
import {SafeAreaView, View} from 'react-native';

import colors from '../../assets/colors';
import Button from '../../components/Button';
import Swiper from '../../components/Swiper';
import styles from './styles';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppParamList} from '../../navigation';

type OnboardingScreenProps = NativeStackScreenProps<AppParamList>;

const OnboardingScreen = ({navigation}: OnboardingScreenProps) => {
  const signUp = () => {
    navigation.navigate('AuthStackNavigator', {
      screen: 'SignUpScreen',
    });
  };
  const login = () => {
    navigation.navigate('AuthStackNavigator', {screen: 'LoginScreen'});
  };

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <Swiper />
      <View style={styles.rowContainer}>
        <Button
          onPress={signUp}
          label="Sign up"
          containerStyle={styles.sigUpBtn}
        />
        <Button
          onPress={login}
          label="Login"
          containerStyle={{backgroundColor: colors.violet20}}
          labelStyle={{color: colors.violet100}}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
