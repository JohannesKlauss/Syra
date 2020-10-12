import React from "react";
import { useForm } from "react-hook-form";
import { Button, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/core";

interface Props {

}

type LogInForm = {
  name: string;
  password: string;
}

function LogInForm({}: Props) {
  const { register, handleSubmit } = useForm<LogInForm>();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired marginY={4}>
        <FormLabel htmlFor="name">User name</FormLabel>
        <Input
          type="text"
          id="name"
          name={'name'}
          ref={register({ required: true })}
          aria-describedby="name-helper-text"
          placeholder={"name or email"}/>
      </FormControl>
      <FormControl isRequired marginY={4}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          id="password"
          name={'password'}
          ref={register({ required: true })}
          aria-describedby="password-helper-text"
          placeholder={"password"}/>
      </FormControl>
      <Button marginY={4} type={"submit"} isFullWidth variantColor={"teal"}>L O G &nbsp; I N</Button>
    </form>
  );
}

export default LogInForm;
