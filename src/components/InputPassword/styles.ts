import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  containerStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.placeholderColor,
  },
  inputStyle: {
    fontSize: 16,
    flex: 1,
    color: '#292B2D',
    fontFamily: 'Inter-Medium',
  },
  errorInputStyle: {
    borderColor: colors.red100,
  },
  eye: {width: 21, height: 14},
  errorStyle: {
    color: colors.red100,
    marginHorizontal: 17,
    marginTop: 10,
    fontSize: 14,
  },
});
