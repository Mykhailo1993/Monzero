import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 56,
  },
  inputContainerStyle: {
    marginVertical: 24,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 38,
    marginBottom: 27,
  },
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
  checkBoxContainer: {
    marginRight: 10,
  },
});
