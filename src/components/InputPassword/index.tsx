import React, {useState} from 'react';
import {
  View,
  TextInput,
  TextStyle,
  ViewStyle,
  Pressable,
  Image,
} from 'react-native';

import MediumText from '../MediumText';
import colors from '../../assets/colors';

import styles from './styles';
import images from '../../assets/images';

type InputPasswordType = {
  value: string;
  onChange: (text: string) => void;
  icon?: boolean;
  errorMessage?: string;
  inputContainerStyle?: ViewStyle;
  inputStyle?: TextStyle;
};

const InputPassword: React.FC<InputPasswordType> = props => {
  const [isVisiblePassword, setisVisiblePassword] = useState(true);

  const {
    value,
    onChange,
    icon = true,
    errorMessage,
    inputContainerStyle,
    inputStyle,
    ...rest
  } = props;

  const checkVisible = (isVisible: boolean) => () => {
    setisVisiblePassword(isVisible);
  };

  return (
    <View>
      <View
        style={[
          styles.containerStyle,
          inputContainerStyle,
          !!errorMessage && styles.errorInputStyle,
        ]}>
        <TextInput
          secureTextEntry={isVisiblePassword}
          value={value}
          onChangeText={onChange}
          placeholder="Password"
          placeholderTextColor={colors.placeholderColor}
          style={[styles.inputStyle, inputStyle]}
          {...rest}
        />
        {icon && (
          <Pressable
            onPressIn={checkVisible(false)}
            onPressOut={checkVisible(true)}>
            <Image source={images.app.eye} style={styles.eye} />
          </Pressable>
        )}
      </View>
      {errorMessage && (
        <MediumText style={styles.errorStyle}>{errorMessage}</MediumText>
      )}
    </View>
  );
};

export default InputPassword;
