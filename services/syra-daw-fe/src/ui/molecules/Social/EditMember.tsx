import { Box, Flex, IconButton, Link, ListItem, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BaseUserFragment, useMeQuery, useRemoveMemberMutation } from '../../../gql/generated';
import AvatarWithOnlineStatus from './AvatarWithOnlineStatus';
import { HiUserRemove } from 'react-icons/hi';
import { projectStore } from '../../../recoil/projectStore';
import { useRecoilValue } from 'recoil';

interface Props {
  user: BaseUserFragment;
  onRemoveMember?: (user: BaseUserFragment) => void;
}

const EditMember: React.FC<Props> = ({ user, onRemoveMember }) => {
  const id = useRecoilValue(projectStore.id);
  const [isExecuting, setIsExecuting] = useState(false);
  const { data } = useMeQuery();
  const [executeMutation] = useRemoveMemberMutation({
    variables: {
      projectId: id,
      userId: user.id,
    },
  });

  const onClickRemove = async () => {
    setIsExecuting(true);

    await executeMutation();

    setIsExecuting(false);
    onRemoveMember && onRemoveMember(user);
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
        {data && data.me.id !== user.id && (
          <IconButton
            aria-label={'Remove member from session'}
            icon={<HiUserRemove />}
            colorScheme={'red'}
            component="span"
            ml={'auto'}
            isLoading={isExecuting}
            onClick={onClickRemove}
          />
        )}
      </Flex>
    </ListItem>
  );
};

export default EditMember;
