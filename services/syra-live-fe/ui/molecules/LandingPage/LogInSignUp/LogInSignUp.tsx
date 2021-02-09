import React from "react";
import SignUpModal from "../../../organisms/LandingPage/SignUpModal/SignUpModal";
import LogInModal from "../../../organisms/LandingPage/LogInModal/LogInModal";
import { useRecoilState } from "recoil";
import { landingPageStore } from "../../../../recoil/landingPageStore";
import { Box, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface Props {

}

function LogInSignUp({}: Props) {
  const { t } = useTranslation();

  const [showLogInModal, setShowLogInModal] = useRecoilState(landingPageStore.showLogInModal);
  const [showSignUpModal, setShowSignUpModal] = useRecoilState(landingPageStore.showSignUpModal);

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
      <Box>
        <Button marginX={4} onClick={switchToLogin}>{t('Log in')}</Button>
        <Button onClick={switchToSignUp}>{t('Sign up')}</Button>
      </Box>
      <SignUpModal isOpen={showSignUpModal} onClose={() => setShowSignUpModal(false)}
                   onClickSwitchToLogin={switchToLogin}/>
      <LogInModal isOpen={showLogInModal} onClose={() => setShowLogInModal(false)}
                  onClickSwitchToSignUp={switchToSignUp}/>
    </>
  );
}

export default LogInSignUp;
