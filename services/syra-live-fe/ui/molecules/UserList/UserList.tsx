import React from 'react';
import { Avatar, Box, Flex, List, ListItem, Text, Link as ChakraLink } from '@chakra-ui/react';
import { FeedUserFragment } from '../../../gql/generated';
import { useRouter } from 'next/router';
import Link from 'next/link';
import UserListActions from './UserListActions/UserListActions';

interface Props {
  users: FeedUserFragment[];
  isMessageButtonContracted?: boolean;
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const UserList: React.FC<Props> = ({ users, isMessageButtonContracted, size }) => {
  const { push } = useRouter();

  return (
    <List spacing={3}>
      {users.map((user) => (
        <ListItem key={user.handle}>
          <Flex justify={'space-between'} align={'center'}>
            <Flex align={'center'} maxWidth={'60%'} pos={'relative'}>
              <Avatar size={size} name={user.name} src={user.avatar} onClick={() => push(`/profile/${user.handle}`)} />
              <Box ml={4} isTruncated>
                <Link passHref href={`/profile/${user.handle}`}>
                  <ChakraLink fontWeight={600} fontSize={size} title={`@${user.handle}`}>
                    @{user.handle}
                  </ChakraLink>
                </Link>
                <Text fontSize={size} title={user.name}>
                  {user.name}
                </Text>
              </Box>
            </Flex>
            <UserListActions user={user} isMessageButtonContracted={isMessageButtonContracted} />
          </Flex>
        </ListItem>
      ))}
    </List>
  );
};

UserList.defaultProps = {
  size: 'md',
};

export default UserList;
