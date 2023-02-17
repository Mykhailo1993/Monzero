import React from 'react';
import {View, Text} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthParamList} from '../../navigation/AuthStackNavigator';

import styles from './styles';

type SignUpType = NativeStackScreenProps<AuthParamList, 'SignUpScreen'>;

const SignUpScreen: React.FC<SignUpType> = () => {
  return (
    <View style={styles.constainer}>
      <Text>SignUpScreen</Text>
    </View>
  );
};

export default SignUpScreen;
