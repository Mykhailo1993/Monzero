import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  inputContainerStyle: {marginTop: 56},
  inputPasswordContainer: {marginTop: 24},
  btnLogin: {marginTop: 40},
  forgotPassword: {
    color: colors.violet100,
    marginTop: 33,
    fontSize: 18,
  },
  rowContainer: {flexDirection: 'row', marginTop: 38},
  signUpContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.violet100,
  },
  dontHaveText: {fontSize: 16, lineHeight: 19, color: colors.placeholderColor},
  signUpText: {
    color: colors.violet100,
    fontSize: 16,
    lineHeight: 19,
  },
});
