import React from 'react';
import { Avatar, Box, Button, Divider, Flex, FormControl, Skeleton } from '@chakra-ui/react';
import { useCreateFeedItemMutation, useCreateTextFeedItemMutation, useMeQuery } from "../../../../gql/generated";
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
  mixdownId?: string;
}

function CreateFeedItem({}: Props) {
  const { data, loading, error } = useMeQuery();
  const [executeCreateFeedItem, {loading: isSending}] = useCreateFeedItemMutation();
  const [executeCreateTextFeedItem, {loading: isSendingText}] = useCreateTextFeedItemMutation();
  const setRefetchFeed = useSetRecoilState(feedStore.refetchFeed);
  const { t } = useTranslation();
  const { register, handleSubmit, setValue, getValues } = useForm<TCreateFeedItemForm>();

  const onSubmit = async (formData: TCreateFeedItemForm) => {
    const me = data.me.id;
    let result;

    if (formData.mixdownId) {
      result = await executeCreateFeedItem({
        variables: {
          me,
          text: formData.text,
          mixdownId: formData.mixdownId
        },
      });
    } else {
      result = await executeCreateTextFeedItem({
        variables: {
          me,
          text: formData.text,
        },
      });
    }

    if (result.data.createFeedItem.id) {
      setRefetchFeed(true);
      setValue('text', '');
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
                  w={'100%'}
                  {...register('text', { required: true })}
                  placeholder={t('Share your work, {{name}}', { name: data.me.name })}/>
              </FormControl>
            </Box>
          </Flex>
          <Divider my={2}/>
          <Flex>
            <AttachMixdown onSelectMixdown={mixdownId => setValue('mixdownId', mixdownId)}/>
            <Button marginLeft={4} isFullWidth colorScheme={'teal'} isLoading={isSending || isSendingText} type={'submit'}>{t('Post')}</Button>
          </Flex>
        </Box>
        {getValues().mixdownId && <FeedItemAudioPreview mixdownId={getValues().mixdownId}/>}
      </Box>
    </form>
  );
}

export default CreateFeedItem;
