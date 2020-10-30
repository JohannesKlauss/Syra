import React, { useRef } from "react";
import { Avatar, Flex, FormControl, Skeleton } from '@chakra-ui/core';
import { useMeQuery, usePostCommentToFeedItemMutation } from '../../../../gql/generated';
import { useForm } from 'react-hook-form';
import AutoResizeTextarea from '../../../atoms/AutoResizeTextarea/AutoResizeTextarea';
import { useTranslation } from 'react-i18next';

interface Props {
  feedItemId: string;
}

type TCommentForm = {
  text: string;
};

function CreateComment({ feedItemId }: Props) {
  const { t } = useTranslation();
  const { data, error, loading } = useMeQuery();
  const [executePost, { loading: isSending }] = usePostCommentToFeedItemMutation();
  const { register, handleSubmit } = useForm<TCommentForm>();
  const formRef = useRef<HTMLFormElement>();

  const onSubmit = async ({ text }: TCommentForm) => {
    await executePost({
      variables: {
        feedItemId,
        text,
      },
    });
  };

  if (loading) return <Skeleton h={8} />;
  if (error) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <Flex align={'top'}>
        <Avatar size={'sm'} src={data.me.avatar} name={data.me.name}/>
        <FormControl ml={4} w={'100%'}>
          <AutoResizeTextarea
            id={`${feedItemId}-comment-text`}
            name={'text'}
            size={'sm'}
            w={'100%'}
            isFullWidth
            isDisabled={isSending}
            onKeyDown={e => e.keyCode === 13 && !e.shiftKey && formRef.current.requestSubmit()}
            ref={register({ required: true })}
            placeholder={t('Write a comment...')}
          />
        </FormControl>
      </Flex>
    </form>
  );
}

export default CreateComment;
