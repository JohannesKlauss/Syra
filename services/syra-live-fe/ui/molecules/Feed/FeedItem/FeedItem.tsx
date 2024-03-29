import React from 'react';
import { Box, Divider, Flex, Link as ChakraLink, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';
import FeedItemActions from './FeedItemActions/FeedItemActions';
import { useFeedItemByIdQuery } from '../../../../gql/generated';
import Link from 'next/link';
import CreateComment from '../CreateComment/CreateComment';
import CommentList from '../CommentList/CommentList';
import useSuspendableQuery from '../../../../hooks/apollo/useSuspendableQuery';
import Suspendable from "../../../atoms/Suspendable/Suspendable";
import AvatarWithOnlineStatus from "../../Avatar/AvatarWithOnlineStatus";

interface Props {
  id: string;
}

function FeedItem({ id }: Props) {
  const { t } = useTranslation();
  const { data } = useSuspendableQuery(useFeedItemByIdQuery({ variables: { id } }));

  const feedItem = data.feedItem;

  return (
    <Box
      marginBottom={4}
      rounded={'8px'}
      overflow={'hidden'}
      bg={'gray.900'}
      color={'gray.300'}
      boxShadow={'0px 3px 24px -5px rgba(0,0,0,1)'}
    >
      {feedItem.mixdown && (
        <Box padding={4} background={'linear-gradient(to right, #24243e, #302b63, #24243e)'}>
          {/*<FeedItemAudio authorName={feedItem.author.name} mixdown={feedItem.mixdown} />*/}
        </Box>
      )}
      <Box padding={4}>
        <Flex align={'center'}>
          <Link href={`profile/${feedItem.author.handle}`}>
            <AvatarWithOnlineStatus user={feedItem.author} cursor={"pointer"}/>
          </Link>
          <Box marginLeft={4}>
            <Link passHref href={`profile/${feedItem.author.handle}`}>
              <ChakraLink fontWeight={600} fontSize={'sm'}>
                {feedItem.author.name}
              </ChakraLink>
            </Link>
            <Text color={'gray.400'} fontSize={'sm'}>
              {t('{{time}} ago', { time: formatDistanceToNow(fromUnixTime(feedItem.updatedAt / 1000)) })}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box padding={4} paddingTop={0}>
        <Text whiteSpace={'pre'} fontSize={'sm'}>
          {feedItem.text}
        </Text>
      </Box>
      <Box paddingX={4} py={2}>
        <FeedItemActions
          feedItemId={feedItem.id}
          isMeLiking={feedItem.isMeLiking}
          likes={feedItem.likeCount}
          listens={feedItem.mixdown && feedItem.mixdown.listens}
        />
        <Divider marginY={2} />
      </Box>
      <Box padding={4} paddingTop={0}>
        <Suspendable>
          <CommentList feedItemId={feedItem.id} />
          <CreateComment feedItemId={feedItem.id} />
        </Suspendable>
      </Box>
    </Box>
  );
}

export default FeedItem;
