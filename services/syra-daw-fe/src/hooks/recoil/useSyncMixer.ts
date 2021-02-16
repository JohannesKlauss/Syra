import { useContext, useEffect } from "react";
import { useMeQuery } from "../../gql/generated";
import { BackboneMixerContext } from "../../providers/BackboneMixerContext";

export default function useSyncMixer(projectId: string) {
  const backboneMixer = useContext(BackboneMixerContext);
  const { data } = useMeQuery();

  useEffect(() => {
    if (projectId !== null && projectId.length > 0 && data?.me.id) {
      backboneMixer.initPubSub(projectId, data?.me.id);
    }
  }, [backboneMixer, projectId, data]);
}