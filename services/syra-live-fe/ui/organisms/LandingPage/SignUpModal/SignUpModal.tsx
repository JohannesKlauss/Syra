import React, { useState } from 'react';
import {
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import SocialSignUp from '../../../molecules/LandingPage/SocialSignUp/SocialSignUp';
import { useSetRecoilState } from 'recoil';
import { landingPageStore } from '../../../../recoil/landingPageStore';
import { useTranslation } from 'react-i18next';
import { useSignUpUserMutation } from '../../../../gql/generated';
import SignUpForm, { TSignUpForm } from '../../../molecules/LandingPage/SignUpForm/SignUpForm';
import useApiResToast from "../../../../hooks/ui/useApiResToast";
import useLoginLocal from "../LogInModal/useLoginLocal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onClickSwitchToLogin: () => void;
}

function SignUpModal({ isOpen, onClose, onClickSwitchToLogin }: Props) {
  const [hasError, setHasError] = useState(false);
  const [executeMutation, { loading }] = useSignUpUserMutation();
  const setShowSignUpModal = useSetRecoilState(landingPageStore.showSignUpModal);
  const toast = useApiResToast();
  const { t } = useTranslation();
  const executeLocalLogin = useLoginLocal();

  const onSubmit = async (data: TSignUpForm) => {
    try {
      const result = await executeMutation({ variables: data });

      if (result.data.signUpUser.id) {
        setShowSignUpModal(false);

        const success = await executeLocalLogin(data);

        if (success) {
          // We use the hard coded version because the cookie doesn't get set when using useRouter.
          window.location.href = '/feed';
        }
      }
    } catch (e) {
      setHasError(true);

      toast(t('Problem during Sign Up'), "warning", t(e.message));
    }
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered scrollBehavior={'inside'}>
      <ModalOverlay opacity={1} />
      <ModalContent pb={5}>
        <ModalHeader>{t('S Y R A   -   Early Access')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SignUpForm onSubmit={onSubmit} hasError={hasError} isSending={loading} />
          <Flex align={'center'} marginY={2}>
            <Divider flex={1} />
            <Text flex={1} fontSize={'md'} textAlign={'center'}>
              {t('or continue with')}
            </Text>
            <Divider flex={1} />
          </Flex>
          <SocialSignUp buttonSize={'lg'} fontSize={'2xl'} onClick={() => null} />
          <Flex align={'center'} justify={'center'}>
            <Text fontSize={'sm'} textAlign={'center'}>
              {t('Have an account?')}
              <Button variant={'link'} size={'sm'} marginLeft={2} colorScheme={'teal'} onClick={onClickSwitchToLogin}>
                {t('Log In')}.
              </Button>
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SignUpModal;
