import React, { useState } from "react";
import { Box, Flex, IconButton, Link, ListItem, Text } from "@chakra-ui/react";
import AvatarWithOnlineStatus from "./AvatarWithOnlineStatus";
import { BaseUserFragment, useAddMemberMutation } from "../../../gql/generated";
import { HiUserAdd } from 'react-icons/hi';
import { projectStore } from "../../../recoil/projectStore";
import { useRecoilValue } from "recoil";

interface Props {
  user: BaseUserFragment;
  onAddFriend?: (user: BaseUserFragment) => void;
}

const AddFriend: React.FC<Props> = ({user, onAddFriend}) => {
  const id = useRecoilValue(projectStore.id);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executeMutation] = useAddMemberMutation({
    variables: {
      projectId: id,
      userId: user.id,
    }
  });

  const onClickAdd = async () => {
    setIsExecuting(true);

    await executeMutation();

    setIsExecuting(false);
    onAddFriend && onAddFriend(user);
  };

  return (
    <ListItem>
      <Flex align={'center'}>
        <AvatarWithOnlineStatus user={user} />
        <Box ml={4}>
          <Link href={`${process.env.REACT_APP_LIVE_URL}/profile/${user.handle}`} target={'_blank'}>
            <Text fontSize={'sm'} fontWeight={600}>
              {user.name}
            </Text>
          </Link>
          <Link href={`${process.env.REACT_APP_LIVE_URL}/profile/${user.handle}`} target={'_blank'}>
            <Text fontSize={'sm'} color={'gray.400'}>
              @{user.handle}
            </Text>
          </Link>
        </Box>
          <IconButton
            aria-label={'Remove member from session'}
            icon={<HiUserAdd />}
            colorScheme={'teal'}
            component="span"
            ml={'auto'}
            isLoading={isExecuting}
            onClick={onClickAdd}
          />
      </Flex>
    </ListItem>
  );
};

export default AddFriend;
