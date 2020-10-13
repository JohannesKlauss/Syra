import React from "react";
import { useForm } from "react-hook-form";
import { Button, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/core";
import { useTranslation } from 'react-i18next';

interface Props {

}

type LogInForm = {
  email: string;
  password: string;
}

function LogInForm({}: Props) {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<LogInForm>();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired marginY={4}>
        <FormLabel htmlFor="email">{t('Email address')}</FormLabel>
        <Input
          type="email"
          id="email"
          name={'email'}
          ref={register({ required: true })}
          aria-describedby="name-helper-text"
          placeholder={"you@example.com"}/>
      </FormControl>
      <FormControl isRequired marginY={4}>
        <FormLabel htmlFor="password">{t('Password')}</FormLabel>
        <Input
          type="password"
          id="password"
          name={'password'}
          ref={register({ required: true })}
          aria-describedby="password-helper-text"
          placeholder={t('Password')}/>
      </FormControl>
      <Button marginY={4} type={"submit"} isFullWidth variantColor={"teal"}>{t('L O G   I N')}</Button>
    </form>
  );
}

export default LogInForm;
