import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.violet100,
    marginHorizontal: 20,
    borderRadius: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    marginVertical: 17,
    fontSize: 18,
    color: 'white',
    lineHeight: 22,
  },
});
