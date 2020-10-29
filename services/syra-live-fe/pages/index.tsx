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
import { benefits } from '../staticText/benefits';
import { tiers } from '../staticText/tiers';

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
