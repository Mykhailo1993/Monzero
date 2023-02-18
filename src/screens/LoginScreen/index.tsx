import React, {useState} from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthParamList} from '../../navigation/AuthStackNavigator';

import Button from '../../components/Button';
import MediumText from '../../components/MediumText';

import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';

import styles from './styles';

type LoginType = NativeStackScreenProps<AuthParamList, 'LoginScreen'>;

const LoginScreen: React.FC<LoginType> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {};
  const forgotPassword = () => {};
  const signUp = () => navigation.navigate('SignUpScreen');

  return (
    <View style={styles.constainer}>
      <Input
        value={email}
        onChange={setEmail}
        inputContainerStyle={styles.inputContainerStyle}
      />
      <InputPassword
        value={password}
        onChange={setPassword}
        inputContainerStyle={styles.inputPasswordContainer}
      />
      <Button label="Login" onPress={login} containerStyle={styles.btnLogin} />
      <MediumText onPress={forgotPassword} style={styles.forgotPassword}>
        Forgot Password?
      </MediumText>
      <View style={styles.rowContainer}>
        <MediumText style={styles.dontHaveText}>
          Don’t have an account yet?{' '}
        </MediumText>
        <View style={styles.signUpContainer}>
          <MediumText onPress={signUp} style={styles.signUpText}>
            Sign Up
          </MediumText>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
