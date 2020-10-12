import React from "react";
import TopBar from "../ui/molecules/LandingPage/TopBar/TopBar";
import LandingHero from "../ui/molecules/LandingPage/LandingHero/LandingHero";
import { landingPageStore } from "../recoil/landingPageStore";
import { useRecoilState } from "recoil";
import SignUpModal from "../ui/organisms/LandingPage/SignUpModal/SignUpModal";
import LogInModal from "../ui/organisms/LandingPage/LogInModal/LogInModal";
import LandingClaim from "../ui/molecules/LandingPage/LandingClaim/LandingClaim";
import Benefits from "../ui/molecules/LandingPage/Benefits/Benefits";
import Pricing from "../ui/organisms/LandingPage/Pricing/Pricing";
import { Box, Image } from "@chakra-ui/core";

const benefits = [
  'Advanced collaboration tools to create music',
  'Share your session with your friends',
  'You only need your browser',
  'Fast, intuitive workflow for professional results'
];
const tiers = [
  {
    topGradient: 'linear-gradient(to right, #b92b27, #1565c0)',
    buttonVariantColor: 'red',
    title: 'Essentials',
    price: 'Free',
    features: [
      '8 MIDI and Audio Tracks',
      '2 Aux and Bus Tracks',
      'External interface support',
      'Essential collaboration tools',
      '12 audio effects',
      'Unlimited public sessions',
      '2 private sessions',
    ]
  },
  {
    topGradient: 'linear-gradient(to right, #11998e, #38ef7d)',
    buttonVariantColor: 'teal',
    title: 'Standard',
    price: '4,99',
    currency: '€',
    features: [
      '64 MIDI and Audio Tracks',
      '16 Aux and Bus Tracks',
      'External interface support',
      'Professional collaboration tools',
      '18 audio effects',
      'Unlimited public sessions',
      'Unlimited private sessions',
      'Basic ML and AI music tools',
      'Band creation',
      'Direct to soundcloud publishing',
      'Role management',
      '4 User templates'
    ]
  },
  {
    topGradient: 'linear-gradient(to right, #74ebd5, #acb6e5)',
    buttonVariantColor: 'cyan',
    title: 'Studio',
    price: '9,99',
    currency: '€',
    features: [
      'Unlimited MIDI and Audio Tracks',
      '128 Aux and Bus Tracks',
      'External interface support',
      'Professional collaboration tools',
      '28 audio effects',
      'Unlimited public sessions',
      'Unlimited private sessions',
      'Advanced ML and AI music tools',
      'Band creation',
      'Direct to soundcloud publishing',
      'Role management',
      'Unlimited User templates',
      'Unlimited session history access',
      'Enterprise support',
    ]
  }
];

export default function Home() {
  const [showLogInModal, setShowLogInModal] = useRecoilState(landingPageStore.showLogInModal);
  const [showSignUpModal, setShowSignUpModal] = useRecoilState(landingPageStore.showSignUpModal);

  const toggleSignUpModal = () => setShowSignUpModal(currVal => !currVal);
  const toggleLogInModal = () => setShowLogInModal(currVal => !currVal);
  const switchToLogin = () => {
    setShowSignUpModal(false);
    setShowLogInModal(true);
  };
  const switchToSignUp = () => {
    setShowSignUpModal(true);
    setShowLogInModal(false);
  };

  return (
    <>
      <TopBar onClickLogIn={toggleLogInModal} onClickSignUp={toggleSignUpModal}/>
      <LandingHero onClickSignUp={toggleSignUpModal}/>
      <LandingClaim py={12}/>
      <Benefits py={12} benefits={benefits}/>
      <Box h={'768px'} overflow={'hidden'}>
        <Image src="/assets/hero.jpg" alt="" objectFit={'cover'}w={'100%'}/>
      </Box>
      <Pricing tiers={tiers}/>
      <SignUpModal isOpen={showSignUpModal} onClose={() => setShowSignUpModal(false)}
                   onClickSwitchToLogin={switchToLogin}/>
      <LogInModal isOpen={showLogInModal} onClose={() => setShowLogInModal(false)}
                   onClickSwitchToSignUp={switchToSignUp}/>
    </>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['default'],
})
