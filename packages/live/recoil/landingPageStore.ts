import { atom } from "recoil";

const showSignUpModal = atom({
  key: 'landingPage/showSignInModal',
  default: false,
});

const showLogInModal = atom({
  key: 'landingPage/showLogInModal',
  default: false,
});

export const landingPageStore = {
  showLogInModal,
  showSignUpModal,
};
