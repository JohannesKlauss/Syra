import { useChangesSubscription, useMeQuery } from "../../gql/generated";
import { useEffect } from "react";

export default function useProjectSync() {
  const {data} = useChangesSubscription({
    variables: {
      projectId: 'ckkbj5l5l0706lp14figy1mb1',
    },
  });

  const {data: meData} = useMeQuery();

  useEffect(() => {
    if (meData?.me.id !== data?.changes.authorId) {
      console.log('received changes', data);
    }
  }, [data, meData]);
}
