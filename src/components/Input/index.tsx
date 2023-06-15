import React from 'react';
import {View, TextInput, TextStyle, ViewStyle} from 'react-native';

import MediumText from '../MediumText';
import colors from '../../assets/colors';

import styles from './styles';

type InputType = {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  errorMessage?: string;
  inputContainerStyle?: ViewStyle;
  inputStyle?: TextStyle;
};

const Input: React.FC<InputType> = props => {
  const {
    value,
    onChange,
    placeholder = 'Email',
    errorMessage,
    inputContainerStyle,
    inputStyle,
    ...rest
  } = props;

  return (
    <View style={[styles.containerStyle, inputContainerStyle]}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        placeholderTextColor={colors.placeholderColor}
        style={[
          styles.inputStyle,
          !!errorMessage && styles.errorInputStyle,
          inputStyle,
        ]}
        {...rest}
      />
      {errorMessage && (
        <MediumText style={[styles.errorStyle]}>{errorMessage}</MediumText>
      )}
    </View>
  );
};

export default Input;
