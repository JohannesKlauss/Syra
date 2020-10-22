import React from 'react';
import { Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface Props {
  hasError: boolean;
  isSending: boolean;
  onSubmit: (data: SignUpForm) => void;
}

type SignUpForm = {
  name: string;
  email: string;
  password: string;
  accessCode: string;
};

function SignUpForm({ hasError, onSubmit, isSending }: Props) {
  const { register, handleSubmit } = useForm<SignUpForm>();
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired marginY={4}>
        <FormLabel htmlFor="accessCode">{t('Early Access Code')}</FormLabel>
        <Input
          type="password"
          id="accessCode"
          name={'accessCode'}
          ref={register({ required: true, minLength: 6 })}
          aria-describedby="accessCode-helper-text"
          placeholder={t('Enter your early access code')}/>
        <FormHelperText id="accessCode-helper-text">
          {t('Please enter the code you have been provided with.')}
        </FormHelperText>
      </FormControl>
      <FormControl isRequired marginY={4}>
        <FormLabel htmlFor="name">{t('User name')}</FormLabel>
        <Input
          type="text"
          id="name"
          name={'name'}
          ref={register({ required: true, minLength: 6 })}
          aria-describedby="name-helper-text"
          placeholder={t('Enter your name')}/>
        <FormHelperText id="email-helper-text">
          {t('Use your artist name if you have one.')}
        </FormHelperText>
      </FormControl>
      <FormControl isRequired marginY={4}>
        <FormLabel htmlFor="email">{t('Email address')}</FormLabel>
        <Input
          type="email"
          id="email"
          name={'email'}
          ref={register({
            required: true, pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('Invalid email address'),
            },
          })}
          aria-describedby="email-helper-text"
          placeholder={'you@example.com'}
        />
        <FormHelperText id="email-helper-text">
          {t('We\'ll never share your email.')}
        </FormHelperText>
      </FormControl>
      <FormControl isRequired marginY={4}>
        <FormLabel htmlFor="password">{t('Password')}</FormLabel>
        <Input
          type="password"
          id="password"
          name={'password'}
          ref={register({ required: true, minLength: 6 })}
          aria-describedby="password-helper-text"
          placeholder={t('At least 6 characters')}/>
        <FormHelperText id="password-helper-text">
          {t('Choose a strong password to be on the safe side.')}
        </FormHelperText>
        {hasError && <FormErrorMessage>{t('Something went wrong. Please try again later.')}</FormErrorMessage>}
      </FormControl>
      <Button isLoading={isSending} marginY={4} type={'submit'} isFullWidth variantColor={'teal'}>{t('S I G N  U P')}</Button>
    </form>
  );
}

export default SignUpForm;
