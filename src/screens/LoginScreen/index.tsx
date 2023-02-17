import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthParamList} from '../../navigation/AuthStackNavigator';

import styles from './styles';

type LoginType = NativeStackScreenProps<AuthParamList, 'LoginScreen'>;

const LoginScreen: React.FC<LoginType> = () => {
  return (
    <View style={styles.constainer}>
      <Text>SignUpScreen</Text>
    </View>
  );
};

export default LoginScreen;
