import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Skeleton,
  Text
} from "@chakra-ui/react";
import { useMeQuery } from "../../../../gql/generated";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import GenFormInput from "../../../atoms/Form/GenFormInput";
import useApiResToast from "../../../../hooks/ui/useApiResToast";
import axios from "axios";

interface Props {

}

type TChangePasswordForm = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

function ChangePasswordTab({}: Props) {
  const { data: { me }, loading, error } = useMeQuery();
  const { t } = useTranslation();
  const toast = useApiResToast();
  const [isSending, setIsSending] = useState(false);
  const { register, handleSubmit, reset } = useForm<TChangePasswordForm>();

  const onSubmit = async (data: TChangePasswordForm) => {
    setIsSending(true);

    const res = await axios.post(`${process.env.NEXT_PUBLIC_LIVE_GQL_URL}/password/update`, data, {
      withCredentials: true
    });

    if (res.status === 201) {
      toast(t("We updated your password."));
      reset();
    }

    setIsSending(false);
  };

  if (loading) return <Skeleton h={24}/>;
  if (error) return null;

  return (
    <Box>
      <Flex align={"center"} mb={8}>
        <Avatar name={me.name} src={me.avatar}/>
        <Box ml={8}>
          <Text fontWeight={600} fontSize={"2xl"}>@{me.handle}</Text>
        </Box>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize={"sm"} color={"gray.500"}>{t("Password needs to have a length of at least 6 characters!")}</Text>
        <GenFormInput type={"password"} isRequired label={t("Current Password")} name={"currentPassword"}
                      placeholder={t("Your current password")} ref={register({ required: true, minLength: 6 })}/>
        <GenFormInput type={"password"} isRequired label={t("New Password")} name={"newPassword"}
                      placeholder={t("Your new password")} ref={register({ required: true, minLength: 6 })}/>
        <GenFormInput type={"password"} isRequired label={t("Confirm New Password")} name={"confirmNewPassword"}
                      placeholder={t("Confirm your current password")}
                      ref={register({ required: true, minLength: 6 })}/>
        <Button isLoading={isSending} marginY={4} type={"submit"} isFullWidth
                colorScheme={"teal"}>{t("Update")}</Button>
      </form>
    </Box>
  );
}

export default ChangePasswordTab;
