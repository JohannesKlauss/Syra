import React from "react";
import LandingPageTopBar from "../ui/molecules/LandingPage/LandingPageTopBar/LandingPageTopBar";
import LandingHero from "../ui/molecules/LandingPage/LandingHero/LandingHero";
import { landingPageStore } from "../recoil/landingPageStore";
import { useSetRecoilState } from "recoil";
import LandingClaim from "../ui/molecules/LandingPage/LandingClaim/LandingClaim";
import Benefits from "../ui/molecules/LandingPage/Benefits/Benefits";
import Pricing from "../ui/organisms/LandingPage/Pricing/Pricing";
import { Box, Image } from "@chakra-ui/core";
import { benefits } from '../staticText/benefits';
import { tiers } from '../staticText/tiers';

function Home() {
  const setShowSignUpModal = useSetRecoilState(landingPageStore.showSignUpModal);

  return (
    <>
      <LandingPageTopBar/>
      <LandingHero onClickSignUp={() => setShowSignUpModal(currVal => !currVal)}/>
      <LandingClaim py={12}/>
      <Benefits py={12} benefits={benefits}/>
      <Box h={'768px'} overflow={'hidden'}>
        <Image src="/assets/hero.jpg" alt="" objectFit={'cover'} w={'100%'}/>
      </Box>
      <Pricing tiers={tiers}/>
    </>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['default'],
});

export default Home;