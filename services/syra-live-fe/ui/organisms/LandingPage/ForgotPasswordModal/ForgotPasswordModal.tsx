import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ResetPassword from "../../../molecules/ResetPassword/ResetPassword";

interface Props {

}

function ForgotPasswordModal({}: Props) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant={'link'} size={'xs'} marginLeft={2} colorScheme={'teal'} onClick={onOpen}>
        {t('Forgot Password.')}
      </Button>
      <ResetPassword isOpen={isOpen} onClose={onClose}/>
    </>
  );
}

export default ForgotPasswordModal;
