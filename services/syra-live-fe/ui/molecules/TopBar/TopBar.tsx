import React, { useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { IoMdAdd } from 'react-icons/io';
import Link from 'next/link';
import Search from '../Search/Search';
import AvatarMenu from '../Feed/AvatarMenu/AvatarMenu';
import { useCreateProjectMutation } from '../../../gql/generated';
import NewMessageNotifier from '../Notifications/NewMessageNotifier/NewMessageNotifier';
import publicRuntimeConfig from '../../../const/config';
import OnlineFollowersList from '../OnlineFollowersList/OnlineFollowersList';

interface Props {}

function TopBar({}: Props) {
  const { t } = useTranslation();
  const [isCreatingSession, setIsCreatingSession] = useState(false);
  const [executeMutation] = useCreateProjectMutation();

  const onClickNewSession = async () => {
    setIsCreatingSession(true);
    const { data, errors } = await executeMutation();

    if (errors == null) {
      setIsCreatingSession(false);
      window && window.open(`${publicRuntimeConfig.NEXT_PUBLIC_DAW_URL}/editor/${data.createProject.id}`, '_blank');
    }
  };

  return (
    <Box
      position={'fixed'}
      top={0}
      bg={'gray.900'}
      w={'100%'}
      h={'72px'}
      color={'white'}
      p={'16px'}
      boxShadow={'0px 3px 24px -5px rgba(0,0,0,1)'}
      zIndex={10}
    >
      <Box h={'32px'}>
        <Flex alignItems={'center'} justify={'space-between'}>
          <Box>
            <Link href={'/feed'}>
              <Text cursor={'pointer'} fontSize="lg" as={'span'} marginLeft={8} marginRight={8}>
                {t('S Y R A')} &nbsp; | &nbsp; {t('Live')}
              </Text>
            </Link>
            <Link href={'/feed'}>
              <Button variant={'link'} marginX={4}>
                {t('Feed')}
              </Button>
            </Link>
            <Button variant={'link'} marginX={4}>
              {t('Explore')}
            </Button>
            <Link href={`/sessions`}>
              <Button variant={'link'} marginX={4}>
                {t('Sessions')}
              </Button>
            </Link>
            <Button variant={'link'} marginX={4}>
              {t('Marketplace')}
            </Button>
          </Box>
          <Box>
            <OnlineFollowersList />
          </Box>
          <Box>
            <Flex align={'center'} justify={'space-between'}>
              <Button
                variant={'link'}
                marginX={8}
                leftIcon={<IoMdAdd />}
                isLoading={isCreatingSession}
                onClick={onClickNewSession}
              >
                {t('New Session')}
              </Button>
              <Search />
              <NewMessageNotifier />
              <AvatarMenu />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default TopBar;
