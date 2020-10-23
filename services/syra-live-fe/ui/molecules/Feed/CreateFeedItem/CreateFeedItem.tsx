import React from 'react';
import { Avatar, Box, Flex, FormControl, FormLabel, Input, Skeleton, Text } from '@chakra-ui/core';
import { useMeQuery } from '../../../../gql/generated';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import AttachMixdown from './AttachMixdown/AttachMixdown';
import FeedItemAudio from '../FeedItem/FeedItemAudio/FeedItemAudio';
import FeedItemAudioPreview from './FeedItemAudioPreview/FeedItemAudioPreview';

interface Props {

}

type TCreateFeedItemForm = {
  text: string;
  mixdownId: string;
}

function CreateFeedItem({}: Props) {
  const { data, loading, error } = useMeQuery();
  const { t } = useTranslation();
  const { register, handleSubmit, setValue, getValues } = useForm<TCreateFeedItemForm>();

  const onSubmit = (data: TCreateFeedItemForm) => {

  };

  if (error) return null;
  if (loading) return <Skeleton h={4}/>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box marginBottom={4} rounded={'8px'} overflow={'hidden'} bg={'gray.900'} color={'gray.300'}
           boxShadow={'0px 3px 24px -5px rgba(0,0,0,1)'}>
        <Box background={'linear-gradient(to right, #654ea3, #eaafc8)'} height={'2px'}/>
        <Box padding={4}>
          <Flex align={'center'}>
            <Avatar name={data.me.name} src={data.me.avatar}/>
            <Box marginX={4} flex={4}>
              <FormControl>
                <Input
                  type="text"
                  id="text"
                  name={'text'}
                  w={'100%'}
                  ref={register({ required: true })}
                  placeholder={t('Share your work, {{name}}', { name: data.me.name })}/>
              </FormControl>
            </Box>
            <AttachMixdown onSelectMixdown={mixdownId => setValue('mixdownId', mixdownId)}/>
          </Flex>
        </Box>
        {getValues().mixdownId && <FeedItemAudioPreview/>}
      </Box>
    </form>
  );
}

export default CreateFeedItem;
