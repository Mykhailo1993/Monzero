import React, {useState} from 'react';
import {
  View,
  ScrollView,
  useWindowDimensions,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

import onboardingData from '../../data/onboardingData';
import styles from './style';

const Swiper = () => {
  const {width: screenWidth} = useWindowDimensions();
  const [activeSwipe, setActiveSwipe] = useState(0);

  const onScroll = ({nativeEvent}) => {
    const currentSwipe = nativeEvent.contentOffset.x;
    if (currentSwipe === 0) {
      setActiveSwipe(0);
    }
    if (currentSwipe === screenWidth) {
      setActiveSwipe(1);
    }
    if (currentSwipe === screenWidth * 2) {
      setActiveSwipe(2);
    }
    if (currentSwipe === screenWidth * 3) {
      setActiveSwipe(3);
    }
  };

  const renderImages = () =>
    onboardingData.map(item => (
      <View key={item.id} style={[styles.itemContainer, {width: screenWidth}]}>
        <Image source={item.img} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    ));

  const renderDots = () =>
    onboardingData.map((item, index) => (
      <View
        key={item.id}
        style={[
          styles.dot,
          activeSwipe === index && {
            backgroundColor: 'rgb(125,11,243)',
            width: 16,
            height: 16,
          },
        ]}
      />
    ));

  return (
    <>
      <View style={styles.imageContainer}>
        <ScrollView
          scrollEventThrottle={1000}
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          style={styles.scrollViewStyle}
          horizontal
          bounces={false}
          decelerationRate="fast"
          snapToInterval={screenWidth}>
          {renderImages()}
        </ScrollView>
      </View>
      <View style={styles.dotContainer}>{renderDots()}</View>
      <View
        style={{
          marginTop: 33,
          width: 343,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: 'rgb(125,11,243)',
            marginHorizontal: 20,
            borderRadius: 16,
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 17,
              fontWeight: '600',
              fontSize: 18,
              color: 'white',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#EEE5FF',
            marginHorizontal: 20,
            borderRadius: 16,
            marginTop: 16,
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 17,
              fontWeight: '600',
              fontSize: 18,
              color: 'rgb(125,11,243)',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Swiper;
