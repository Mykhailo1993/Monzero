import images from '../assets/images';
import {t} from 'i18next';

const onboardingData = [
  {
    img: images.onboarding.illustration,
    title: t('onboarding.title1'),
    description: 'Become your own money manager and make every cent count',
    id: 1,
  },
  {
    img: images.onboarding.moneyGoes,
    title: t('onboarding.title2'),
    description:
      'Track your transaction easily, with categories and financial report ',
    id: 2,
  },
  {
    img: images.onboarding.plan,
    title: t('onboarding.title3'),
    description: 'Setup your budget for each category so you in control',
    id: 3,
  },
];

export default onboardingData;
