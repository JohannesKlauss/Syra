import React from 'react';
import { useProjectQuery } from '../../../gql/generated';
import { useRecoilValue } from 'recoil';
import { projectStore } from '../../../recoil/projectStore';
import { List } from '@chakra-ui/react';
import EditMember from "./EditMember";

interface Props {}

const EditMemberList: React.FC<Props> = () => {
  const id = useRecoilValue(projectStore.id);
  const { data, refetch } = useProjectQuery({
    variables: {
      id,
    },
  });

  return (
    <List spacing={3}>
      {data && data.project?.members.map(({user}) => (
        <EditMember onRemoveMember={() => refetch()} user={user}/>
      ))}
    </List>
  );
};

export default EditMemberList;
