import React from 'react';
import { Box, FormControl } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import GenFormInput from '../../../atoms/Form/GenFormInput';
import { useTranslation } from 'react-i18next';
import AutoResizeTextarea from '../../../atoms/AutoResizeTextarea/AutoResizeTextarea';

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
  const { register, handleSubmit } = useForm<TEditProfileForm>();

  return (
    <Box>
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
        <AutoResizeTextarea
          id="text"
          name={'text'}
          w={'100%'}
          ref={register()}
          placeholder={t('Short Bio')}/>
      </FormControl>
    </Box>
  );
}

export default EditProfileTab;
