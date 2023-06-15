import React from 'react';
import {Pressable, TextStyle, ViewStyle} from 'react-native';
import MediumText from '../MediumText';

import colors from '../../assets/colors';
import styles from './styles';

interface ICheckBox {
  value: boolean;
  onValueChange: () => void;
  markStyle?: TextStyle;
  container?: ViewStyle;
  size?: number;
  color?: string;
}

const CheckBox: React.FC<ICheckBox> = props => {
  const {
    value,
    onValueChange,
    markStyle,
    container,
    size = 24,
    color = colors.purple,
  } = props;

  return (
    <Pressable
      onPress={onValueChange}
      style={[
        styles.container,
        container,
        {width: size, height: size},
        !value && {borderColor: color},
        value && {backgroundColor: color, borderColor: color},
      ]}>
      {value && (
        <MediumText style={[styles.markStyle, markStyle]}>✓</MediumText>
      )}
    </Pressable>
  );
};

export default CheckBox;
