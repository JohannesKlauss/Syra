import React from "react";
import { Avatar, Box, Flex, List, ListItem, Text, Link as ChakraLink } from "@chakra-ui/react";
import { FeedUserFragment } from "../../../gql/generated";
import { useRouter } from "next/router";
import Link from 'next/link';
import UserListActions from "./UserListActions/UserListActions";

interface Props {
  users: FeedUserFragment[];
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

const UserList: React.FC<Props> = ({users, size}) => {
  const { push } = useRouter();

  return (
    <List spacing={3}>
      {users.map((user) => (
        <ListItem key={user.handle}>
          <Flex justify={'space-between'} align={'center'}>
            <Flex align={'center'}>
              <Avatar size={size} name={user.name} src={user.avatar} onClick={() => push(`/profile/${user.handle}`)} />
              <Box ml={4}>
                <Link passHref href={`/profile/${user.handle}`}>
                  <ChakraLink fontWeight={600} fontSize={size}>@{user.handle}</ChakraLink>
                </Link>
                <Text fontSize={size}>{user.name}</Text>
              </Box>
            </Flex>
            <UserListActions user={user}/>
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
