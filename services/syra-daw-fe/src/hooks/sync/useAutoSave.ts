import useInterval from '../core/useInterval';
import { saveToDb } from '../../recoil/effects/saveToDatabaseEffect';
import { useMeQuery, useProjectQuery } from '../../gql/generated';

export default function useAutoSave(projectId: string, everyMs: number = 5000) {
  const { data: meData } = useMeQuery();
  const { data: projectData } = useProjectQuery({
    variables: {
      id: projectId,
    },
  });

  useInterval(
    async (id, ownerId, myId) => {
      if (ownerId === myId) {
        await saveToDb(id);
      }
    },
    everyMs,
    projectId,
    projectData?.project?.owner.id,
    meData?.me.id,
  );
}
