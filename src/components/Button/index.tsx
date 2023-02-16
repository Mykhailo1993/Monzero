import * as React from 'react';
import {
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from 'react-native';

import styles from './styles';
import MediumText from '../MediumText';

interface IButton {
  onPress: () => void;
  label: string;
  image?: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

const Button: React.FC<IButton> = props => {
  const {onPress, containerStyle, label, labelStyle, image, imageStyle} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <View style={styles.rowContainer}>
        {image && <Image source={image} style={imageStyle} />}
        <MediumText style={[styles.textStyle, labelStyle]}>{label}</MediumText>
      </View>
    </TouchableOpacity>
  );
};
export default Button;
