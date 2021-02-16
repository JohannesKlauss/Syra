import { List } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { BaseUserFragment, useProjectQuery } from '../../../gql/generated';
import AddFriend from './AddFriend';
import { projectStore } from '../../../recoil/projectStore';
import { useRecoilValue } from 'recoil';
import { differenceWith, isEqual } from 'lodash';

interface Props {
  users?: BaseUserFragment[] | null;
}

const FriendsList: React.FC<Props> = ({ users }) => {
  const id = useRecoilValue(projectStore.id);
  const { data, loading, refetch } = useProjectQuery({
    variables: {
      id,
    },
  });

  const filteredUsers = useMemo(() => {
    if (!users) {
      return [];
    }

    if (!loading) {
      return differenceWith(users, data?.project ? data?.project?.members.map(({ user }) => user) : [], isEqual);
    }

    return users;
  }, [data, loading, users]);

  return <List spacing={3}>{filteredUsers.map((user) => <AddFriend onAddFriend={() => refetch()} user={user} />)}</List>;
};

export default FriendsList;
