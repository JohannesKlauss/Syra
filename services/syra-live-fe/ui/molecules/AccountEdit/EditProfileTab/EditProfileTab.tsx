import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Skeleton,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import GenFormInput from '../../../atoms/Form/GenFormInput';
import { useTranslation } from 'react-i18next';
import AutoResizeTextarea from '../../../atoms/AutoResizeTextarea/AutoResizeTextarea';
import { useMeQuery } from '../../../../gql/generated';
import ChangeAvatar from '../ChangeAvatar/ChangeAvatar';

interface Props {
}

type TEditProfileForm = {
  name: string;
  handle: string;
  avatar: string;
  website: string;
  bio: string;
  email: string;
}

function EditProfileTab({}: Props) {
  const { t } = useTranslation();
  const [optimisticAvatar, setOptimisticAvatar] = useState<string>(null);
  const { data: { me }, loading, error, refetch } = useMeQuery();
  const { register, handleSubmit } = useForm<TEditProfileForm>();

  if (loading) return <Skeleton h={24}/>;
  if (error) return null;

  const onAvatarChanged = (src: string) => {
    setOptimisticAvatar(src);
    refetch();
  }

  return (
    <Box>
      <Flex align={'top'} mb={8}>
        <Avatar name={me.name} src={me.avatar}/>
        <Box ml={8}>
          <Text fontWeight={600} fontSize={'lg'}>@{me.handle}</Text>
          <ChangeAvatar avatar={optimisticAvatar ?? me.avatar} onAvatarChanged={onAvatarChanged}/>
        </Box>
      </Flex>
      <GenFormInput
        placeholder={t('Name')}
        name={'name'}
        label={t('Name')}
        helpText={t('accountEditNameHelpText')}
        isRequired
        ref={register({ required: true })}
      />
      <GenFormInput
        placeholder={t('Handle')}
        name={'handle'}
        label={t('Handle')}
        helpText={t('accountEditHandleHelpText')}
        isRequired
        ref={register({ required: true, minLength: 3 })}
      />
      <GenFormInput
        placeholder={t('Website')}
        name={'website'}
        label={t('Website')}
        ref={register()}
      />
      <FormControl>
        <FormLabel htmlFor={'bio'}>{t('Bio')}</FormLabel>
        <AutoResizeTextarea
          id="text"
          name={'bio'}
          w={'100%'}
          ref={register()}
          placeholder={t('Short Bio')}/>
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
      <Button isLoading={false} marginY={4} type={'submit'} isFullWidth variantColor={'teal'}>{t('Update')}</Button>
    </Box>
  );
}

export default EditProfileTab;
