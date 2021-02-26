import React from 'react';
import { SessionListDataFragment, UserLinkFragment } from '../../../gql/generated';
import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import UserList from '../UserList/UserList';
import SessionList from '../SessionList/SessionList';
import SessionSearchResultList from '../SessionList/SessionSearchResultList';

interface Props {
  userResults: UserLinkFragment[];
  projectResults: SessionListDataFragment[];
  searchString: string;
}

function SearchResults({ userResults, searchString, projectResults }: Props, ref) {
  const { t } = useTranslation();

  return (
    <Box
      bg={'gray.700'}
      w={'350px'}
      maxH={'80vh'}
      overflowY={'scroll'}
      position={'absolute'}
      top={'60px'}
      right={8}
      rounded={8}
      boxShadow={'0px 3px 24px -5px rgba(0,0,0,1)'}
    >
      <Box px={4} py={2} bg={'gray.800'}>
        <Text fontSize={'sm'} color={'gray.300'}>
          {t('Sessions')}
        </Text>
      </Box>
      <Box px={4} py={2}>
        {projectResults.length > 0 && searchString.length > 2 && (
          <SessionSearchResultList size={'sm'} sessions={projectResults} />
        )}
        {searchString.length < 3 && (
          <Text fontSize={'sm'} fontWeight={300}>
            {t('Please type in three or more characters.')}
          </Text>
        )}
        {searchString.length > 2 && projectResults.length === 0 && (
          <Text fontSize={'sm'} fontWeight={300}>
            {t('No projects found.')}
          </Text>
        )}
      </Box>

      <Box px={4} py={2} bg={'gray.800'}>
        <Text fontSize={'sm'} color={'gray.300'}>
          {t('Users')}
        </Text>
      </Box>
      <Box px={4} py={2}>
        {userResults.length > 0 && searchString.length > 2 && (
          <UserList size={'sm'} users={userResults} isMessageButtonContracted={true} />
        )}
        {searchString.length < 3 && (
          <Text fontSize={'sm'} fontWeight={300}>
            {t('Please type in three or more characters.')}
          </Text>
        )}
        {searchString.length > 2 && userResults.length === 0 && (
          <Text fontSize={'sm'} fontWeight={300}>
            {t('No users found.')}
          </Text>
        )}
      </Box>
    </Box>
  );
}

export default React.forwardRef(SearchResults);
