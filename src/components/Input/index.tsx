import React from 'react';
import {View, TextInput, TextStyle, ViewStyle} from 'react-native';

import MediumText from '../MediumText';
import colors from '../../assets/colors';

import styles from './styles';

type InputType = {
  value: string;
  onChange: (text: string) => void;
  errorMessage?: string;
  inputContainerStyle?: ViewStyle;
  inputStyle?: TextStyle;
};

const Input: React.FC<InputType> = props => {
  const {
    value,
    onChange,
    errorMessage,
    inputContainerStyle,
    inputStyle,
    ...rest
  } = props;

  return (
    <View style={[styles.containerStyle, inputContainerStyle]}>
      <TextInput
        value={value}
        placeholder="Email"
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
