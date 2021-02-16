import { AvatarGroup } from '@chakra-ui/react';
import React from 'react';
import { useProjectQuery } from '../../../gql/generated';
import { projectStore } from '../../../recoil/projectStore';
import { useRecoilValue } from 'recoil';
import AvatarWithOnlineStatus from './AvatarWithOnlineStatus';

interface Props {}

const AvatarMemberList: React.FC<Props> = ({}) => {
  const id = useRecoilValue(projectStore.id);
  const { data } = useProjectQuery({
    variables: {
      id,
    },
  });

  return (
    <AvatarGroup spacing={-2} max={6} mx={4}>
      {data && data.project?.members.map(({ user }) =>
        <AvatarWithOnlineStatus key={user.id} user={user} />)}
    </AvatarGroup>
  );
};

export default AvatarMemberList;
