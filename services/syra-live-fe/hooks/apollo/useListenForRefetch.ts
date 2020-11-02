import { RecoilState, useRecoilState } from 'recoil';
import { useEffect } from 'react';

export default function useListenForRefetch(atom: RecoilState<boolean>, refetch) {
  const [doRefetch, setDoRefetch] = useRecoilState(atom);

  useEffect(() => {
    if (doRefetch) {
      (async () => {
        await refetch();

        setDoRefetch(false);
      })();
    }
  }, [doRefetch]);
}
