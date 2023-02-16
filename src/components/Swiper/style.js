import {StyleSheet, Dimensions} from 'react-native';
// import colors from '../../assets/colors';

const styles = StyleSheet.create({
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
  title: {
    marginTop: 41,
    lineHeight: 49,
    textAlign: 'center',
    marginHorizontal: 49,
    fontSize: 32,
    fontWeight: '700',
    color: 'black',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: '10%',
    lineHeight: 25,
    color: '#91919F',
  },
});

export default styles;
