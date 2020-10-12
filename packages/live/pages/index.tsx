import React from "react";
import TopBar from "../ui/molecules/TopBar/TopBar";
import LandingHero from "../ui/molecules/LandingHero/LandingHero";
import { landingPageStore } from "../recoil/landingPageStore";
import { useRecoilState } from "recoil";
import SignUpModal from "../ui/organisms/SignUpModal/SignUpModal";
import LogInModal from "../ui/organisms/LogInModal/LogInModal";

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
