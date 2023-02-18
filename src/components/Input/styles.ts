import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  containerStyle: {
    width: '100%',
  },
  inputStyle: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.placeholderColor,
    fontSize: 16,
    color: '#292B2D',
    fontFamily: 'Inter-Medium',
  },
  errorInputStyle: {
    borderColor: colors.red100,
  },
  errorStyle: {
    color: colors.red100,
    marginHorizontal: 17,
    marginTop: 10,
    fontSize: 14,
  },
});
