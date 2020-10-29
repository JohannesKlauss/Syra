import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';
import useApiResToast from '../../../hooks/ui/useApiResToast';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type TResetPasswordForm = {
  email: string;
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function ResetPassword({ isOpen, onClose }: Props) {
  const cancelRef = React.useRef();
  const { t } = useTranslation();
  const toast = useApiResToast();
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, register } = useForm<TResetPasswordForm>();

  const onSubmit = async (data: TResetPasswordForm) => {
    setIsLoading(true);

    const res = await axios.post(`${process.env.NEXT_PUBLIC_LIVE_GQL_URL}/password/reset`, data);

    setIsLoading(false);

    if (res.status === 201) {
      toast(
        t('Reset email sent'),
        'success',
        t('If you have a registered account, we sent you an email containing a link to reset your password.'),
        5000,
      );
      onClose();
    }
  };

  return (
    <AlertDialog isCentered isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {t('Reset Password')}
          </AlertDialogHeader>

          <AlertDialogBody>
            <FormControl isRequired marginY={4}>
              <FormLabel htmlFor="email">{t('Email address')}</FormLabel>
              <Input
                type="email"
                id="email"
                name={'email'}
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t('Invalid email address'),
                  },
                })}
                aria-describedby="email-helper-text"
                placeholder={'you@example.com'}
              />
              <FormHelperText id="email-helper-text">{t('Enter the email of your account.')}</FormHelperText>
            </FormControl>

            <Text fontSize={'sm'} color={'gray.400'}>
              {t('Proceeding will send a mail to your attached email inbox.')}
            </Text>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button isLoading={isLoading} variantColor="teal" type={'submit'} ml={4}>
              Reset
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ResetPassword;
