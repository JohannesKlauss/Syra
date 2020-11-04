import React from 'react';
import { Avatar, Box, Divider, Flex, IconButton, List, ListItem, Text } from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';
import { FiRefreshCw } from 'react-icons/fi';
import { MdPersonAdd } from 'react-icons/md';
import { FollowRecommendation } from '../../../../types/FollowRecommendation';

interface Props {
  recommendations: FollowRecommendation[];
}

function FollowRecommendationsBox({recommendations}: Props) {
  const { t } = useTranslation();

  return (
    <Box overflow={'hidden'} rounded={8} bg={'gray.900'} boxShadow={'0px 3px 24px -5px rgba(0,0,0,1)'} paddingX={8}>
      <Flex justify={'space-between'} align={'center'} paddingY={4}>
        <Text fontWeight={700} fontSize={'lg'}>{t('People to follow')}</Text>
        <IconButton icon={FiRefreshCw} aria-label={t('Refresh people to follow')}/>
      </Flex>
      <Box marginTop={'0.75rem'}>
        <List spacing={3}>
          {recommendations.map(({ name, avatar, followers, id }, i) => (
            <ListItem key={i}>
              <Flex justify={'space-between'} align={'center'}>
                <Box>
                  <Flex align={'center'}>
                    <Avatar name={name} size={'sm'}/>
                    <Box marginLeft={4}>
                      <Text fontWeight={600} fontSize={'sm'}>{name}</Text>
                      <Text fontSize={'xs'} color={'gray.400'}><strong>{followers}</strong> {t('Followers')}</Text>
                    </Box>
                  </Flex>
                </Box>
                <IconButton icon={MdPersonAdd} aria-label={t('Follow')}/>
              </Flex>
              <Divider/>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default FollowRecommendationsBox;
