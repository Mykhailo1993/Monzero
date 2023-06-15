import React, {useState} from 'react';
import {View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthParamList} from '../../navigation/AuthStackNavigator';

import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';
import MediumText from '../../components/MediumText';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';

import styles from './styles';
import images from '../../assets/images';

type SignUpType = NativeStackScreenProps<AuthParamList, 'SignUpScreen'>;

const SignUpScreen: React.FC<SignUpType> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCheked, setIsChecked] = useState(false);

  const onValueChange = () => setIsChecked(prev => !prev);
  const signUp = () => {};

  return (
    <View style={styles.constainer}>
      <Input value={name} onChange={setName} placeholder="Name" />
      <Input
        value={email}
        onChange={setEmail}
        placeholder="Name"
        inputContainerStyle={styles.inputContainerStyle}
      />
      <InputPassword value={password} onChange={setPassword} />
      <View style={styles.rowContainer}>
        <CheckBox
          value={isCheked}
          onValueChange={onValueChange}
          container={styles.checkBoxContainer}
        />
        <MediumText style={styles.dontHaveText}>
          By signing up, you agree to the{' '}
          <MediumText onPress={signUp} style={styles.signUpText}>
            Terms of Service and Privacy Policy
          </MediumText>
        </MediumText>
      </View>

      <Button label="Sign Up" onPress={signUp} />
      <MediumText style={{marginVertical: 12, color: '#91919F', fontSize: 14}}>
        Or with
      </MediumText>
      <Button
        label="Sign Up with Google"
        image={images.app.iconGoogle}
        onPress={() => {}}
        containerStyle={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#F1F1FA',
        }}
        labelStyle={{color: 'black', marginLeft: 10}}
      />
      <View style={styles.rowContainer}>
        <MediumText style={styles.dontHaveText}>
          Already have an account?{' '}
        </MediumText>
        <View style={styles.signUpContainer}>
          <MediumText onPress={signUp} style={styles.signUpText}>
            Login
          </MediumText>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
