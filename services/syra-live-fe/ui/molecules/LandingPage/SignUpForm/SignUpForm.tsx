import React from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface Props {
  hasError: boolean;
  isSending: boolean;
  onSubmit: (data: TSignUpForm) => void;
}

export type TSignUpForm = {
  name: string;
  email: string;
  handle: string;
  password: string;
  accessCode: string;
};

function SignUpForm({ hasError, onSubmit, isSending }: Props) {
  const { register, handleSubmit, errors } = useForm<TSignUpForm>();
  const { t } = useTranslation();

  console.log('errors', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired marginY={4} isInvalid={errors.accessCode != null}>
        <FormLabel htmlFor="accessCode">{t('Early Access Code')}</FormLabel>
        <Input
          type="text"
          id="accessCode"
          name={'accessCode'}
          ref={register({
            required: true,
            minLength: { value: 32, message: t('This is not a valid early access code.') },
            maxLength: { value: 32, message: t('This is not a valid early access code.') },
          })}
          aria-describedby="accessCode-helper-text"
          placeholder={t('Enter your early access code')}
        />
        <FormHelperText id="accessCode-helper-text">
          {t('Please enter the code you have been provided with.')}
        </FormHelperText>
        {errors.accessCode && <FormErrorMessage>{errors.accessCode.message}</FormErrorMessage>}
      </FormControl>
      <FormControl isRequired marginY={4} isInvalid={errors.name != null}>
        <FormLabel htmlFor="name">{t('User name')}</FormLabel>
        <Input
          type="text"
          id="name"
          name={'name'}
          ref={register({
            required: true,
            minLength: { value: 5, message: t('Your name must have at least 5 characters.') },
          })}
          aria-describedby="name-helper-text"
          placeholder={t('Enter your name')}
        />
        {errors.name == null && <FormHelperText id="email-helper-text">{t('Use your artist name if you have one.')}</FormHelperText>}
        {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
      </FormControl>
      <FormControl isRequired marginY={4} isInvalid={errors.handle != null}>
        <FormLabel htmlFor="handle">{t('User handle')}</FormLabel>
        <InputGroup>
          <InputLeftAddon children="@" />
          <Input
            type="text"
            id="handle"
            name={'handle'}
            ref={register({
              required: true,
              minLength: { value: 5, message: t('Your name must have at least 5 characters.') },
              pattern: {
                value: /[a-zA-Z0-9._%+-]+/,
                message: t('No whitepaces are allowed. Only allowed symbols are ., _, %, + and  -'),
              },
            })}
            aria-describedby="handle-helper-text"
            placeholder={t('Enter your handle')}
          />
        </InputGroup>
        {errors.handle == null && <FormHelperText id="handle-helper-text">{t('This is your handle. No Spaces allowed.')}</FormHelperText>}
        {errors.handle && <FormErrorMessage>{errors.handle.message}</FormErrorMessage>}
      </FormControl>
      <FormControl isRequired marginY={4} isInvalid={errors.email != null}>
        <FormLabel htmlFor="email">{t('Email address')}</FormLabel>
        <Input
          type="email"
          id="email"
          name={'email'}
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('Invalid email address.'),
            },
          })}
          aria-describedby="email-helper-text"
          placeholder={'you@example.com'}
        />
        {errors.email == null && <FormHelperText id="email-helper-text">{t("We'll never share your email.")}</FormHelperText>}
        {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
      </FormControl>
      <FormControl isRequired marginY={4} isInvalid={errors.password != null}>
        <FormLabel htmlFor="password">{t('Password')}</FormLabel>
        <Input
          type="password"
          id="password"
          name={'password'}
          ref={register({
            required: true,
            minLength: { value: 6, message: t('Please choose a password with a minimum of 6 characters.') },
          })}
          aria-describedby="password-helper-text"
          placeholder={t('At least 6 characters')}
        />
        {errors.password == null && <FormHelperText id="password-helper-text">
          {t('Choose a strong password to be on the safe side.')}
        </FormHelperText>}
        {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
        {hasError && <FormErrorMessage>{t('Something went wrong. Please try again.')}</FormErrorMessage>}
      </FormControl>
      <Button isLoading={isSending} marginY={4} type={'submit'} isFullWidth colorScheme={'teal'}>
        {t('S I G N  U P')}
      </Button>
    </form>
  );
}

export default SignUpForm;
