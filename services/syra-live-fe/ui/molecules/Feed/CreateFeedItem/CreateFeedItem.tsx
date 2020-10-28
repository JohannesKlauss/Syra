import React from 'react';
import { Avatar, Box, Button, Divider, Flex, FormControl, Input, Skeleton, Textarea } from '@chakra-ui/core';
import { useCreateFeedItemMutation, useMeQuery } from '../../../../gql/generated';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import AttachMixdown from './AttachMixdown/AttachMixdown';
import FeedItemAudioPreview from './FeedItemAudioPreview/FeedItemAudioPreview';
import { useSetRecoilState } from 'recoil';
import { feedStore } from '../../../../recoil/feedStore';
import AutoResizeTextarea from '../../../atoms/AutoResizeTextarea/AutoResizeTextarea';

interface Props {

}

type TCreateFeedItemForm = {
  text: string;
  mixdownId: string;
}

function CreateFeedItem({}: Props) {
  const { data, loading, error } = useMeQuery();
  const [executeCreateFeedItem, {loading: isSending}] = useCreateFeedItemMutation();
  const setRefetchFeed = useSetRecoilState(feedStore.refetchFeed);
  const { t } = useTranslation();
  const { register, handleSubmit, setValue, getValues } = useForm<TCreateFeedItemForm>();

  const onSubmit = async (formData: TCreateFeedItemForm) => {
    const me = data.me.id;

    const result = await executeCreateFeedItem({
      variables: {
        me,
        text: formData.text,
        mixdownId: formData.mixdownId
      },
    });

    if (result.data.createFeedItem.id) {
      setRefetchFeed(true);
    }
  };

  if (error) return null;
  if (loading) return <Skeleton h={4}/>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
      <Box marginBottom={8} rounded={'8px'} overflow={'hidden'} bg={'gray.900'} color={'gray.300'}
           boxShadow={'0px 3px 24px -5px rgba(0,0,0,1)'} w={'100%'}>
        <Box background={'linear-gradient(to right, #654ea3, #eaafc8)'} height={'2px'}/>
        <Box padding={4}>
          <Flex align={'top'}>
            <Avatar name={data.me.name} src={data.me.avatar}/>
            <Box marginLeft={4} flex={4}>
              <FormControl>
                <AutoResizeTextarea
                  id="text"
                  name={'text'}
                  w={'100%'}
                  ref={register({ required: true })}
                  placeholder={t('Share your work, {{name}}', { name: data.me.name })}/>
              </FormControl>
            </Box>
          </Flex>
          <Divider/>
          <Flex>
            <AttachMixdown onSelectMixdown={mixdownId => setValue('mixdownId', mixdownId)}/>
            <Button marginLeft={4} isFullWidth variantColor={'teal'} isLoading={isSending} type={'submit'}>{t('Post')}</Button>
          </Flex>
        </Box>
        {getValues().mixdownId && <FeedItemAudioPreview mixdownId={getValues().mixdownId}/>}
      </Box>
    </form>
  );
}

export default CreateFeedItem;
