import React, { useRef } from "react";
import { Avatar, Flex, FormControl } from '@chakra-ui/core';
import { useMeQuery, usePostCommentToFeedItemMutation } from '../../../../gql/generated';
import { useForm } from 'react-hook-form';
import AutoResizeTextarea from '../../../atoms/AutoResizeTextarea/AutoResizeTextarea';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState } from "recoil";
import { feedStore } from "../../../../recoil/feedStore";
import useSuspendableQuery from "../../../../hooks/apollo/useSuspendableQuery";

interface Props {
  feedItemId: string;
}

type TCommentForm = {
  text: string;
};

function CreateComment({ feedItemId }: Props) {
  const { t } = useTranslation();
  const { data } = useSuspendableQuery(useMeQuery());
  const [executePost, { loading: isSending }] = usePostCommentToFeedItemMutation();
  const setRefetchCommentList = useSetRecoilState(feedStore.refetchCommentList(feedItemId));
  const { register, handleSubmit, reset } = useForm<TCommentForm>();
  const formRef = useRef<HTMLFormElement>();

  const onSubmit = async ({ text }: TCommentForm) => {
    await executePost({
      variables: {
        feedItemId,
        text,
      },
    });

    setRefetchCommentList(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <Flex align={'top'} pt={4}>
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
