import React from 'react';
import { Box, Button, Flex, IconButton, Text } from '@chakra-ui/core';
import { FaPlay } from 'react-icons/fa';
import { CgGitFork } from 'react-icons/cg';
import { BsThreeDots } from 'react-icons/bs';
import { RiHeartFill, RiShareForwardFill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

interface Props {
  listens: number;
  likes: number;
}

function FeedItemActions({listens, likes}: Props) {
  const { t } = useTranslation();

  return (
    <Box>
      <Flex justify={'space-between'} align={'center'}>
        <Box>
          <Flex align={'center'}>
            <Box as={FaPlay} size={'11px'} marginRight={2}/>
            <Text fontWeight={400} fontSize={'sm'}>{listens}</Text>
          </Flex>
        </Box>
        <Box>
          <Flex align={'center'}>
            <Button marginX={2} leftIcon={CgGitFork} variantColor={'teal'}
                    size={'sm'}>{t('Make it your own')}</Button>
            <Button marginX={2} leftIcon={RiShareForwardFill} variantColor={'gray'} size={'sm'}>{t('Share')}</Button>
            <Button marginX={2} rightIcon={RiHeartFill} variantColor={'gray'} size={'sm'}>{likes}</Button>
            <IconButton marginLeft={2} aria-label={'Expand menu'} icon={BsThreeDots} size={'sm'}/>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default FeedItemActions;
