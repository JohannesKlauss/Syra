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
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import GenFormInput from '../../../atoms/Form/GenFormInput';
import { useTranslation } from 'react-i18next';
import AutoResizeTextarea from '../../../atoms/AutoResizeTextarea/AutoResizeTextarea';
import { useMeQuery, useUpdateUserMutation } from '../../../../gql/generated';
import ChangeAvatar from '../ChangeAvatar/ChangeAvatar';
import transformFormDataToGqlInputObject from '../../../../helpers/gql/formDataTransformer';
import useApiResToast from '../../../../hooks/ui/useApiResToast';

interface Props {
}

type TEditProfileForm = {
  name: string;
  handle: string;
  website: string;
  bio: string;
  email: string;
}

function EditProfileTab({}: Props) {
  const { t } = useTranslation();
  const toast = useApiResToast();
  const [optimisticAvatar, setOptimisticAvatar] = useState<string>(null);
  const { data: { me }, loading, error, refetch } = useMeQuery();
  const [executeUpdateUser, {loading: isMutationExecuting}] = useUpdateUserMutation();
  const { register, handleSubmit, formState: { errors } } = useForm<TEditProfileForm>();

  const onSubmit = async (data: TEditProfileForm) => {
    const result = await executeUpdateUser({
      variables: {
        data: transformFormDataToGqlInputObject(data)
      }
    });

    if (result.errors === undefined) {
      toast(t('We updated your profile.'));
    }
  };

  const onAvatarChanged = (src: string) => {
    setOptimisticAvatar(src);
    refetch();
  }

  if (loading) return <Skeleton h={24}/>;
  if (error) return null;

  return (
    <Box>
      <Flex align={'top'} mb={8}>
        <Avatar name={me.name} src={me.avatar}/>
        <Box ml={8}>
          <Text fontWeight={600} fontSize={'lg'}>@{me.handle}</Text>
          <ChangeAvatar avatar={optimisticAvatar ?? me.avatar} onAvatarChanged={onAvatarChanged}/>
        </Box>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GenFormInput
          placeholder={t('Name')}
          label={t('Name')}
          helpText={t('accountEditNameHelpText')}
          isRequired
          isInvalid={errors.name != null}
          defaultValue={me.name}
          {...register('name', { required: true })}
        />
        <GenFormInput
          placeholder={t('Handle')}
          label={t('Handle')}
          helpText={t('accountEditHandleHelpText')}
          isRequired
          isInvalid={errors.handle != null}
          defaultValue={me.handle}
          {...register('handle', { required: true, minLength: 3, validate: val => !(/[\s/@]/g).test(val) })}
        />
        <GenFormInput
          placeholder={t('Website')}
          name={'website'}
          label={t('Website')}
          defaultValue={me.website}
          {...register('website')}
        />
        <FormControl>
          <FormLabel htmlFor={'bio'}>{t('Bio')}</FormLabel>
          <AutoResizeTextarea
            id="text"
            w={'100%'}
            {...register('bio')}
            defaultValue={me.bio}
            placeholder={t('Short Bio')}/>
        </FormControl>
        <FormControl isRequired marginY={4}>
          <FormLabel htmlFor="email">{t('Email address')}</FormLabel>
          <Input
            type="email"
            id="email"
            defaultValue={me.email}
            isRequired
            isInvalid={errors.email != null}
            {...register('email', {
              required: true,
              pattern: {
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
        <Button isLoading={isMutationExecuting} marginY={4} type={'submit'} isFullWidth colorScheme={'teal'}>{t('Update')}</Button>
      </form>
    </Box>
  );
}

export default EditProfileTab;
