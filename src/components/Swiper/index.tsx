import React, {useState} from 'react';
import {
  View,
  ScrollView,
  useWindowDimensions,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
  SafeAreaView,
} from 'react-native';

import '../../i18n/index';
import {useTranslation} from 'react-i18next';

import onboardingData from '../../data/onboardingData';
import styles from './style';
import colors from '../../assets/colors';
import BoldText from '../BoldText';
import MediumText from '../MediumText';
import Button from '../Button';

const Swiper = () => {
  const {width: screenWidth} = useWindowDimensions();
  const [activeSwipe, setActiveSwipe] = useState(0);
  const {t} = useTranslation();

  const onScroll = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
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
    onboardingData.map((item, index) => (
      <View key={item.id} style={[styles.itemContainer, {width: screenWidth}]}>
        <Image source={item.img} style={styles.image} />
        <BoldText style={styles.title}>
          {t(`onboarding.title${index + 1}`)}
        </BoldText>
        <MediumText style={styles.description}>{item.description}</MediumText>
      </View>
    ));

  const renderDots = () =>
    onboardingData.map((item, index) => (
      <View
        key={item.id}
        style={[styles.dot, activeSwipe === index && styles.activeDot]}
      />
    ));

  const signUp = () => {};
  const login = () => {};
  return (
    <SafeAreaView style={styles.safeareaContainer}>
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
      <View style={styles.rowContainer}>
        <Button
          onPress={signUp}
          label="Sign up"
          containerStyle={styles.sigUpBtn}
        />
        <Button
          onPress={login}
          label="Login"
          containerStyle={{backgroundColor: colors.violet20}}
          labelStyle={{color: colors.violet100}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Swiper;
