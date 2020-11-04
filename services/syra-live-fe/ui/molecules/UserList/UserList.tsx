import React from "react";
import { Avatar, Box, Flex, List, ListItem, Text, Link as ChakraLink, Button, IconButton } from "@chakra-ui/core";
import { FeedUserFragment } from "../../../gql/generated";
import { useRouter } from "next/router";
import Link from 'next/link';
import UserListActions from "./UserListActions/UserListActions";

interface Props {
  users: FeedUserFragment[];
}

function UserList({users}: Props) {
  const { push } = useRouter();

  return (
    <List spacing={3}>
      {users.map((user) => (
        <ListItem key={user.handle}>
          <Flex justify={'space-between'}>
            <Flex align={'center'}>
              <Avatar name={user.name} src={user.avatar} onClick={() => push(`/profile/${user.handle}`)} />
              <Box ml={4}>
                <Link passHref href={`/profile/${user.handle}`}>
                  <ChakraLink fontWeight={600}>@{user.handle}</ChakraLink>
                </Link>
                <Text>{user.name}</Text>
              </Box>
            </Flex>
            <UserListActions user={user}/>
          </Flex>
        </ListItem>
      ))}
    </List>
  );
}

export default UserList;
