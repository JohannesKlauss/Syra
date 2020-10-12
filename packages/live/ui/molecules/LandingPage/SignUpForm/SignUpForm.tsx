import React from "react";
import { Button, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/core";
import { useForm } from "react-hook-form";

interface Props {
}

type SignUpForm = {
  name: string;
  email: string;
  password: string;
};

function SignUpForm({}: Props) {
  const { register, handleSubmit } = useForm<SignUpForm>();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired marginY={4}>
        <FormLabel htmlFor="name">User name</FormLabel>
        <Input
          type="text"
          id="name"
          name={'name'}
          ref={register({ required: true, minLength: 6 })}
          aria-describedby="name-helper-text"
          placeholder={"Enter your name"}/>
        <FormHelperText id="email-helper-text">
          Use your artist name if you have one.
        </FormHelperText>
      </FormControl>
      <FormControl isRequired marginY={4}>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          type="email"
          id="email"
          name={'email'}
          ref={register({
            required: true, pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })}
          aria-describedby="email-helper-text"
          placeholder={"you@example.com"}
        />
        <FormHelperText id="email-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl isRequired marginY={4}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          id="password"
          name={'password'}
          ref={register({ required: true, minLength: 6 })}
          aria-describedby="password-helper-text"
          placeholder={"At least 6 characters"}/>
        <FormHelperText id="password-helper-text">
          Choose a strong password to be on the safe side.
        </FormHelperText>
      </FormControl>
      <Button marginY={4} type={"submit"} isFullWidth variantColor={"teal"}>S I G N &nbsp; U P</Button>
    </form>
  );
}

export default SignUpForm;
