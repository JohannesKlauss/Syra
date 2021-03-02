import { systemStore } from "../../recoil/systemStore";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { fileSystem } from "../../utils/fileSystem";

export default function useEnableFileSystem(projectId: string) {
  const [hasAccess, setHasAccess] = useRecoilState(systemStore.hasUserGrantedAccessToFileSystem);

  useEffect(() => {
    if(!hasAccess) {
      (async () => {
        await fileSystem.init(projectId);

        setHasAccess(true);
      })();
    }
  }, [projectId, hasAccess]);
}