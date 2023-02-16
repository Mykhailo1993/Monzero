import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import styles from './styles';

interface IProps {
  style?: TextStyle;
}

const MediumText: React.FC<IProps & TextProps> = ({
  style,
  children,
  ...rest
}) => (
  <Text style={[styles.text, style]} {...rest}>
    {children}
  </Text>
);

export default MediumText;
