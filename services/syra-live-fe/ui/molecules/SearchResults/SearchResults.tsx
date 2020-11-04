import React from 'react';
import { UserLinkFragment } from '../../../gql/generated';
import { Box, Text } from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';
import UserList from "../UserList/UserList";

interface Props {
  userResults: UserLinkFragment[];
}

function SearchResults({ userResults }: Props) {
  const { t } = useTranslation();

  return (
    <Box bg={'gray.900'} w={'400px'} maxH={'80vh'} overflowY={'scroll'}>
      <Text fontSize={'xs'} color={'gray.700'}>
        {t('Users')}
      </Text>
      {userResults.length > 0 && <UserList users={userResults}/>}
    </Box>
  );
}

export default SearchResults;
