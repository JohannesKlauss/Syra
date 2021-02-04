import { RefObject, useEffect, useRef, useState } from "react";
import { useMeQuery } from '../../gql/generated';
import { useRecoilValue } from 'recoil';
import { projectStore } from '../../recoil/projectStore';
import { JitsiInstance } from "../../types/JitsiMeetExternalAPI";

export default function useVideoChat(ref: RefObject<HTMLDivElement>, width: number, height: number) {
  const [isInitialized, setIsInitialized] = useState(false);
  const projectId = useRecoilValue(projectStore.id);
  const { data } = useMeQuery();
  const api = useRef<JitsiInstance>();

  useEffect(() => {
    if (data?.me.id && projectId.length > 0 && window.JitsiMeetExternalAPI && ref.current && !isInitialized) {
      api.current = new window.JitsiMeetExternalAPI('meet.jit.si', {
        roomName: `syra-conference-${projectId}`,
        width,
        height,
        parentNode: ref.current,
        userInfo: {
          displayName: data.me.name,
          avatarUrl: data.me.avatar,
        }
      });

      setIsInitialized(true);
    }
  }, [data, projectId, window.JitsiMeetExternalAPI, ref, width, height, isInitialized, setIsInitialized]);

  useEffect(() => {
    return () => {
      api.current?.executeCommand('hangup');
      api.current?.dispose();
    }
  }, []);

  return api.current;
}
