import React from "react";
import { Box, Flex, List, ListItem, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { SessionListDataFragment } from "../../../gql/generated";
import { formatDistanceToNow, fromUnixTime } from "date-fns";
import publicRuntimeConfig from "../../../const/config";

interface Props {
  sessions: SessionListDataFragment[];
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

const SessionList: React.FC<Props> = ({sessions, size}) => {
  return (
    <List spacing={3}>
      {sessions.map((session) => (
        <ListItem key={session.id}>
          <Flex justify={'space-between'} align={'center'}>
            <Flex align={'center'}>
              <Box ml={4}>
                <Link passHref href={`${publicRuntimeConfig.NEXT_PUBLIC_DAW_URL}/session/${session.id}`}>
                  <ChakraLink fontWeight={600} fontSize={size}>{session.name}</ChakraLink>
                </Link>
                <Text fontSize={size}>{formatDistanceToNow(fromUnixTime(session.createdAt / 1000))}</Text>
              </Box>
            </Flex>
          </Flex>
        </ListItem>
      ))}
    </List>
  );
};

export default SessionList;
