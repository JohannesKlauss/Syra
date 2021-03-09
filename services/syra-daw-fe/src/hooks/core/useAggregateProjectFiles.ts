// This hook aggregates files from local filesystem, memory and cloud
import { useEffect, useMemo, useState } from "react";
import { fileSystem } from "../../utils/fileSystem";
import { useProjectFilesQuery } from "../../gql/generated";
import { projectStore } from "../../recoil/projectStore";
import { useRecoilValue } from "recoil";

export default function useAggregateProjectFiles() {
  const id = useRecoilValue(projectStore.id);

  const [areLocalFilesAggregating, setAreLocalFilesAggregating] = useState(false);
  const [localFiles, setLocalFiles] = useState<File[]>([]);

  const {data, loading} = useProjectFilesQuery({
    variables: {
      id
    }
  });

  const isReady = useMemo(() => !loading && data && !areLocalFilesAggregating, [loading, data, areLocalFilesAggregating]);

  useEffect(() => {
    setAreLocalFilesAggregating(true);

    (async () => {
      setLocalFiles(await fileSystem.getFiles());

      setAreLocalFilesAggregating(false);
    })();
  }, []);

  return {
    isReady,
    localFiles,
    serverFiles: data?.project?.audioAssets
  }
}