import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  safeareaContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    height: Dimensions.get('screen').height / 1.45,
  },
  scrollViewStyle: {paddingTop: '10%'},
  itemContainer: {
    alignItems: 'center',
  },
  image: {width: 312, height: 312},
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#EEE5FF',
    borderRadius: 20,
    marginRight: 9,
  },
  activeDot: {
    backgroundColor: colors.violet100,
    width: 16,
    height: 16,
  },
  rowContainer: {marginTop: 33, width: 343, alignItems: 'center'},
  sigUpBtn: {marginBottom: 16},

  title: {
    marginTop: 41,
    lineHeight: 49,
    textAlign: 'center',
    marginHorizontal: 49,
    fontSize: 32,
    color: 'black',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 52,
    lineHeight: 19,
    color: '#91919F',
  },
});

export default styles;
