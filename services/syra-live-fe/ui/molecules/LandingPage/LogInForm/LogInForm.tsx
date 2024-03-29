import React from "react";
import { useForm } from "react-hook-form";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';

interface Props {
  onSubmit: (data: TLogInForm) => void;
  isSending: boolean;
  hasError: boolean;
}

export type TLogInForm = {
  email: string;
  password: string;
}

function LogInForm({onSubmit, hasError, isSending}: Props) {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<TLogInForm>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired marginY={4}>
        <FormLabel htmlFor="email">{t('Email address')}</FormLabel>
        <Input
          type="email"
          id="email"
          aria-describedby="name-helper-text"
          placeholder={"you@example.com"}
          {...register('email', { required: true })}
        />
      </FormControl>
      <FormControl isRequired marginY={4}>
        <FormLabel htmlFor="password">{t('Password')}</FormLabel>
        <Input
          type="password"
          id="password"
          aria-describedby="password-helper-text"
          placeholder={t('Password')}
          {...register('password', { required: true })}
        />
      </FormControl>
      <Button isLoading={isSending} marginY={4} type={"submit"} isFullWidth colorScheme={"teal"}>{t('L O G   I N')}</Button>
    </form>
  );
}

export default LogInForm;
